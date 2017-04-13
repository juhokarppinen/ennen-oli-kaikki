var war2_state = {

    create: function() {
        if(PLAYER.location.name !== "Jyväskylä") {
            var text = "Kuulut kranaatinheitinkomppaniaan, jalkaväkirykmentti 28, 10. divisioona.";
        } else {
            var text = "Kuulut kenttätykistörykmentti 10:een.";
        }
                
        var image            = 'warbackground';
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('war3');
    }
}