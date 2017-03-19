var unnamed_state = { 

    create: function() {
        PLAYER.age = 0; // Optional age update; can be removed.

        var text             = "";
        var image            = "";
        var imageInfo        = "";
        var leftButtonLabel  = "";
        var rightButtonLabel = "";

        drawUIsingleButton(image, imageInfo, text, leftButtonLabel, rightButtonLabel, this);
    },

    update: function() {
    }
}

function leftButtonHandler() {
    GAME.state.start("");    
}

function rightButtonHandler() {
    GAME.state.start("");
}
