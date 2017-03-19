var barn1_state = {

    create: function() {
        PLAYER.age = 19;

        if (PLAYER.gender === "male") {
            PLAYER.crush = pickName("female");
            var servant = "piika ";
        } else {
            PLAYER.crush = pickName("male");
            var servant = "renki ";
        }

        var text = "Talon " + servant + PLAYER.crush + " on silmäillyt sinua " +
                   "vihjailevasti. Kutsutko hänet kanssasi heinälatoon?";

        var image            = 'youthworkcountrybackground';
        var imageInfo        = "";
        var leftButtonLabel  = "Kyllä";
        var rightButtonLabel = "Ei";

        drawUItwoButtons(image, imageInfo, text, leftButtonLabel, rightButtonLabel, this);
    },

    update: function() {
    }
}

function leftButtonHandler() {
    GAME.state.start('barn2');
}

function rightButtonHandler() {
    GAME.state.start('death');
}