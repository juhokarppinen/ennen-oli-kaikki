var unnamed_state = { 

    create: function() {
        PLAYER.age = 0; // Optional age update; can be removed

        var text              = "";
        var image             = "";
        var centerButtonLabel = "";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start("");
    }
}
