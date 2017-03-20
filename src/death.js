var death_state = {

    create: function() {
        var causeOfDeathText = "";

        // Childhood death
        if (PLAYER.causeofdeath === "keuhkokuume") {
            causeOfDeathText = "Keuhkotuberkuloosi oli 1900-luvun alkupuolella "
            + "yksi yleisimmistä kuolinsyistä muiden kulkutautien lisäksi. "
            + "Vielä 1920-luvun lopulla se tappoi tuhansia ihmisiä joka vuosi. "
            + "Keuhkotuberkuloosi koitui sinunkin kohtalokseksi. Lepää "
            + "rauhassa, " + PLAYER.name + "!";
            // Is there any data showing actual ages of deceased children? 
            PLAYER.age = Math.floor(Math.random() * 6); 
        }

        var numberTexts = ["yksi","kaksi","kolme","neljä","viisi","kuusi",
                           "seitsemän","kahdeksan","yhdeksän","kymmenen"];

        if (PLAYER.age === 0) var ageOfDeathText = "vain muutaman kuukauden ikäinen.";
        else if (PLAYER.age <= 10) var ageOfDeathText = numberTexts[PLAYER.age - 1] + "vuotias.";
        else var ageOfDeathText = PLAYER.age + "-vuotias.";

        var text = "Kuolit... " + causeOfDeathText + " Olit kuollessasi " + ageOfDeathText;

        var image            = "deathbackground";
        var imageInfo        = "Väinö Kannisto";
        var rightButtonLabel = "Valikkoon";
        
        if(PLAYER.gender === "female") var leftButtonLabel = "Pelaa poikana";
        else var leftButtonLabel = "Pelaa tyttönä";


        drawUItwoButtons(image, imageInfo, text, leftButtonLabel, rightButtonLabel, this);
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