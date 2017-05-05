//noinspection JSUnusedGlobalSymbols
var unnamed_state = {

    create: function() {
        PLAYER.age = 0; // Optional age update; can be removed

        var text              = "";
        var image             = "";
        var centerButtonLabel = "";
        var infoText          = "";

        drawUIsingleButton(image, text, centerButtonLabel, this, infoText);
    },

    centerButtonHandler: function () {
        GAME.state.start("");
    }
};
