var weddingcountry_state = {

    create: function() {

        var text = "Pidätte pienimuotoiset mutta romanttiset häät ja ";
        if (PLAYER.gender === "male") {
            if(PLAYER.class === "poor") {
                text += "muutatte asumaan pieneen mökkiin työnantajasi tontin laidalle.";
                PLAYER.spouse = PLAYER.crush;
            } else {
                text += "muutatte asumaan pieneen mökkiin isäsi tontin laidalle.";
                PLAYER.spouse = PLAYER.crush;
            }
        } else {
            text += "muutatte asumaan pieneen mökkiin hänen setänsä tontin laidalle.";
            PLAYER.spouse = PLAYER.crush;
        }
        text += " Haluatte perustaa oman perheen.";
        
        var image            = 'weddingbackground';
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('child1');
    }
}