var unnamed_state = { 

    create: function() {
        PLAYER.age = 0; // Optional age update; can be removed

        var text              = "";
        var image             = "";
        var imageInfo         = "";
        var centerButtonLabel = "";

        drawUIsingleButton(image, imageInfo, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start("");
    }
}
