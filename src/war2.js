var war2_state = {

    create: function() {
        var text = "Kuulut jalkaväen jääkärirykmenttiin. Osasto on aluksi täysin keskisuomalainen, "
        +"kunnes miestappioiden jälkeen sitä täydennetään muualtakin Suomesta.";
                
        var image            = 'warbackground';
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('war3');
    }
}