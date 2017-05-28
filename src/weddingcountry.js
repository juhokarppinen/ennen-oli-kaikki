var weddingcountry_state = {

    create: function() {

        var text = "Pidätte pienimuotoiset häät ja ";
        if (PLAYER.gender === "male") {
            if(PLAYER.class === "poor") {
                text += "muutatte työnantajasi teille osoittamaan mökkiin lähelle palvelusväen aittoja.";
                PLAYER.spouse = PLAYER.crush;
            } else {
                text += "nuorikkosi muuttaa torppaanne häiden jälkeen.";
                PLAYER.spouse = PLAYER.crush;
            }
        } else {
            if(PLAYER.class === "poor") {
                text += "muutatte työnantajasi teille osoittamaan mökkiin lähelle palvelusväen aittoja.";
                PLAYER.spouse = PLAYER.crush;
            } else {
                text += "muutat miehen perheen torppaan häiden jälkeen.";
                PLAYER.spouse = PLAYER.crush;
            }
        }
        
        var image            = 'weddingbackground';
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        if(PLAYER.class === "poor") {
            GAME.state.start('child1');
        } else {
            if(PLAYER.gender === "female") {
                GAME.state.start('conscriptwife');
            } else {
                GAME.state.start('conscript');
            }
        }
    }
};