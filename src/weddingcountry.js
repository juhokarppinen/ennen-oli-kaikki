var weddingcountry_state = {

    create: function() {

        var text = "Pidätte pienimuotoiset häät ja ";
        if (PLAYER.gender === "male") {
            if(PLAYER.class === "poor") {
                text += "muutatte työnantajasi teille osoittamaan mökkiin lähelle palvelusväen aittoja.";
                PLAYER.spouse = PLAYER.crush;
            } else {
                text += "muutatte asumaan pieneen mökkiin isäsi tontin laidalle.";
                PLAYER.spouse = PLAYER.crush;
            }
        } else {
            if(PLAYER.class === "poor") {
                text += "muutatte työnantajasi teille osoittamaan mökkiin lähelle palvelusväen aittoja.";
                PLAYER.spouse = PLAYER.crush;
            } else {
                text += "muutatte asumaan pieneen mökkiin isäsi tontin laidalle.";
                PLAYER.spouse = PLAYER.crush;
            }
        }
        
        var image            = 'weddingbackground';
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('child1');
    }
}