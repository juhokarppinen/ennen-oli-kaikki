var unnamed_state = { 

    create: function() {
        PLAYER.age = 0; // Optional age update; can be removed.

        var text             = "";
        var image            = "";
        var leftButtonLabel  = "";
        var rightButtonLabel = "";

        drawUItwoButtons(image, text, leftButtonLabel, rightButtonLabel, this);
    },

    leftButtonHandler: function () {
        GAME.state.start("");    
    },

    rightButtonHandler: function () {
        GAME.state.start("");
    }
}
