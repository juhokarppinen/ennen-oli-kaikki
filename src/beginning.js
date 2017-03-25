var beginning_state = {

    create: function () {
        createPlayerStats();

        var classText;
        var genderText;
        if (PLAYER.gender === "male") genderText = "pojan";
        else                          genderText = "tytön";
        if(PLAYER.location.name !== "Jyväskylä") {
            var image     = 'beginningcountrybackground';
            if (PLAYER.class === "poor")        classText = "mäkitupalaiseksi ";
            else if (PLAYER.class === "middle") classText = "torpparin esikoiseksi ";
            else                                classText = "pappilan kolmanneksi lapseksi";
        } else {
            var image     = 'beginningcitybackground';
            if (PLAYER.class === "rich")        classText = "toiseksi lapseksi opettajaperheeseen ";
            else                                classText = "työläisperheeseen ";
        }
        
        var text = "Tervetuloa maailmaan! Synnyit " + classText + 
        PLAYER.location.to + " Suomen itsenäisyyden alkumetreillä. " +
        "Sinut kastettiin nimellä " + PLAYER.name + ", joka oli yksi suosituimmista " +
        genderText + "nimistä vuonna 1917.";

        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        if (Math.random() <= 0.18) {     // 18% die before going to school
            if(Math.random() <= 0.60) {
                PLAYER.causeofdeath = "keuhkokuume";
            } else {
                PLAYER.causeofdeath = "espanjantauti";
            }
            GAME.state.start('death');
        } else if (PLAYER.location.name !== "Jyväskylä" && Math.random() <= 0.20) {
            if(PLAYER.class === "rich") {
                GAME.state.start('school1');
            } else {
                PLAYER.noschool = true;
                GAME.state.start('school0'); // 20% of non-rich rural children didn't go to school.
            }
        } else {
            PLAYER.noschool = false;
            GAME.state.start('school1');
        }
    }
}

function createPlayerStats() {
    PLAYER.name = pickName(PLAYER.gender);
    PLAYER.age = 0;
    PLAYER.causeofdeath = "";
    var locations = [{name: "Hankasalmi", to: "Hankasalmelle", at: "Hankasalmella"},
        {name: "Jämsä", to: "Jämsään", at: "Jämsässä"}, {name: "Saarijärvi", to: "Saarijärvelle", at: "Saarijärvellä"}, 
        {name: "Jyväskylän maalaiskunta", to: "Jyväskylän maalaiskuntaan", at: "Jyväskylän maalaiskunnassa"}];
    if (Math.random() <= 0.20) { 
        PLAYER.location = {name: "Jyväskylä", to: "Jyväskylään", at: "Jyväskylässä"};
    } else {
        PLAYER.location = locations[Math.floor(Math.random()*locations.length)];
    }
    var classes = ["poor", "middle"];
    if (Math.random() <= 0.10 && PLAYER.location.name !== "Hankasalmi") { 
        PLAYER.class = "rich";
    } else {
        PLAYER.class = classes[Math.floor(Math.random()*classes.length)];
    }
}


//todo: fix this; right now it sometimes gives undefined
function calculateOdds(weights, results) {
    var num = Math.random(),
    s = 0,
    lastIndex = weights.length - 1;

    for (var i = 0; i < lastIndex; ++i) {
        s += weights[i];
        if (num < s) {
            return results[i];
        }
    }
}