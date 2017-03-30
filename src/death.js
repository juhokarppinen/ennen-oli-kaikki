var death_state = {

    create: function() {
        var causeOfDeathText = "";

        // Childhood death
        if (PLAYER.causeofdeath === "keuhkokuume") {
            causeOfDeathText = "Keuhkotuberkuloosi oli 1900-luvun alkupuolella "
            + "yksi yleisimmistä kuolinsyistä. "
            + "Vielä 1920-luvun lopulla se tappoi tuhansia ihmisiä joka vuosi. "
            + "Keuhkotuberkuloosi koitui sinunkin kohtalokseksi. Lepää rauhassa, " + PLAYER.name +"!";
            // Is there any data showing actual ages of deceased children? 
            PLAYER.age = Math.floor(Math.random() * 6);
        }
        if(PLAYER.causeofdeath === "espanjantauti") {
            causeOfDeathText = "1900-luvun tuhoisin influenssapandemia, espanjantauti, tappoi 10 ja 20-lukujen vaihteessa 30 miljoonaa ihmistä. "
            + "Suomeen tauti rantautui keskelle sisällissodan jälkeistä sekasortoa. "
            + "Tauti koitui sinunkin kohtaloksesi. Lepää rauhassa, " + PLAYER.name +"!";
            // Is there any data showing actual ages of deceased children? 
            PLAYER.age = Math.floor(Math.random() * 6);
        }
        // War death
        if (PLAYER.causeofdeath === "sota") {
            causeOfDeathText = "Sota koitui surmaksesi. Lepää rauhassa, " + PLAYER.name + "!";
        }

        var numberTexts = ["yksi","kaksi","kolme","neljä","viisi","kuusi",
                           "seitsemän","kahdeksan","yhdeksän","kymmenen"];

        if (PLAYER.age === 0) var ageOfDeathText = "vain muutaman kuukauden ikäinen.";
        else if (PLAYER.age <= 10) var ageOfDeathText = numberTexts[PLAYER.age - 1] + "vuotias.";
        else var ageOfDeathText = PLAYER.age + "-vuotias.";

        var text = "Kuolit... " + causeOfDeathText + " Olit kuollessasi " + ageOfDeathText;

        var image            = "deathbackground";
        var rightButtonLabel = "Valikkoon";
        
        if(PLAYER.gender === "female") var leftButtonLabel = "Pelaa poikana";
        else var leftButtonLabel = "Pelaa tyttönä";


        drawUItwoButtons(image, text, leftButtonLabel, rightButtonLabel, this);
    },

    leftButtonHandler: function () {
        if(PLAYER.gender === "female") PLAYER.gender = "male";
        else PLAYER.gender = "female";
        GAME.state.start('beginning');
    },

    rightButtonHandler: function () {
        GAME.state.start('menu');
    }
}