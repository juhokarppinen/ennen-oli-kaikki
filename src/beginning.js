var beginning_state = {

    create: function () {
        createPlayerStats(PLAYER.gender, PLAYER.diedInChildhood, PLAYER.previousClass);

        var classText;
        var genderText;
        var infoText;

        if (PLAYER.gender === "male") genderText = "pojan";
        else                          genderText = "tytön";
        if(PLAYER.location.name !== "Jyväskylä") {
            var image     = 'countrybackground';
            infoText = "85% keskisuomalaisista sai toimeentulonsa maataloudesta vuonna 1920. Luku oli poikkeuksellisen korkea, " +
                       "sillä muussa Suomessa vastaava luku oli noin 70 prosenttia. Keski-Suomen maatalouden erityispiirteet olivat " +
                       "runsas pientilojen määrä ja viljelyalojen rehuvoittoisuus. ";
            if (PLAYER.class === "poor") { 
                classText = "mäkitupalaiseksi ";
                infoText += "\n\nMäkitupalainen omisti omalla tai vuokraamaallaan aluellaan mökin, mutta hän sai tavallisesti elantonsa muualta kuin mökistään.\n\n" + 
                           "Lähteet: 1) Jokipii M. Keski-Suomen historia. 2) Elkelä K. Maaseutuväestön historian sanastoa";
            }
            else if (PLAYER.class === "middle") {
                classText = "torpparin esikoiseksi ";
                infoText += "\n\nTorppari piti huolta torpastaan, joka oli maanviljelyä varten vuokralle annettu maatilan jakamaton osa.\n\n" + 
                           "Lähteet: 1) Jokipii M. Keski-Suomen historia. 2) Kielitoimiston sanakirja";
            }
            else {
                classText = "pappilan kolmanneksi lapseksi ";
                infoText += "\n\nPappila oli papin virka-asunto. Keski-Suomessa useampi pappila kuuluu arvokkaasti rakennettuihin kulttuuriympäristöihin.\n\n" +
                           "Lähteet: 1) Jokipii M. Keski-Suomen historia. 2) Maakunnallisesti arvokkaat rakennetut kulttuuriympäristöt Keski-Suomessa. Alueluettelon liite. Keski-Suomen liitto.";  
            }   
        } else {
            infoText = "Jyväskylän kaupunki perustettiin maaliskuussa 1837. Kaupungin alueella oli vain pari taloa, muutama torppa ja markkinapaikka. " +
                       "1920- ja 1930 Jyväskylästä alkoi tulla kaupunkimaisempi, kun ensimmäiset kerrostalot rakennettiin. Sadassa vuodessa Jyväskylän " +
                       "asukasluku on kasvanut reilusta 6000 ihmisestä noin 138 000 ihmiseen. Kasvuun on vaikuttanut monta eri ilmiöt: muun muassa " +
                       "teollisuuden kasvu, muuttoliike ja alueliitokset.\n\nLähde: Jokipii M. Keski-Suomen historia.";
            var image     = 'citybackground';
            if (PLAYER.class === "rich")        classText = "toiseksi lapseksi opettajaperheeseen ";
            else                                classText = "työläisperheeseen ";
        }
        
        var text = "Tervetuloa maailmaan! Synnyit " + classText + 
        PLAYER.location.to + " Suomen itsenäisyyden alkumetreillä. " +
        "Sinut kastettiin nimellä " + PLAYER.name + ", joka oli yksi suosituimmista " +
        genderText + "nimistä vuonna 1917.";

        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this, infoText);
    },

    centerButtonHandler: function () {
        if (Math.random() <= 0.18 && !PLAYER.diedInChildhood) {     // 18% die before going to school
            PLAYER.diedInChildhood = true;
            if(Math.random() <= 0.60) {
                PLAYER.causeofdeath = "keuhkokuume";
            } else {
                PLAYER.causeofdeath = "espanjantauti";
            }
            GAME.state.start('death');
        } else if (PLAYER.class === "poor" && PLAYER.location !== "Jyväskylä" && Math.random() <= 0.20) {            
            PLAYER.noschool = true;
            GAME.state.start('school0');
        } else {
            PLAYER.noschool = false;
            GAME.state.start('school1');
        }
    }
};

function createPlayerStats(gender, diedInChildhood, previousClass) {
    //gets rid of possible "ghosts"
    for (var member in PLAYER) { //noinspection JSUnfilteredForInLoop
        delete PLAYER[member];
    }
    PLAYER.gender = gender;
    PLAYER.diedInChildhood = diedInChildhood;
    PLAYER.name = pickName(PLAYER.gender);
    PLAYER.age = 0;
    PLAYER.previousAge = 0;
    PLAYER.causeofdeath = "";
    if (Math.random() <= 0.20) { 
        PLAYER.location = {name: "Jyväskylä", to: "Jyväskylään", at: "Jyväskylässä"};
    } else {
        PLAYER.location = {name: "maaseutu Jyväskylän lähellä", to: "maaseudulle Jyväskylän lähelle", at: "maaseudulla Jyväskylän lähellä"};
    }
    var classes = ["poor", "middle"];
    if (Math.random() <= 0.10 && previousClass !== 'rich') { 
        PLAYER.class = "rich";
    } else {
        do {
        PLAYER.class = classes[Math.floor(Math.random()*classes.length)];
        } while (PLAYER.class === previousClass);
    }
    PLAYER.previousClass = PLAYER.class;
}