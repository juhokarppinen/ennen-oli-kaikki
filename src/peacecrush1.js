var peacecrush1_state = {

    create: function() {

        var text = "Kun kesä kääntyy syksyksi, sinun on palattava kaupunkiin opintojesi pariin. "+PLAYER.crush+
        " tulee hyvästelemään. Pyydätkö lupaa kirjoittaa hänelle?";
        var leftButtonLabel  = "Kyllä";
        var rightButtonLabel  = "Ei";
        var image = 'youthworkcountrybackground';

        drawUItwoButtons(image, text, leftButtonLabel, rightButtonLabel, this);
    },

    leftButtonHandler: function () {
        GAME.state.start('peacecrush2');
    },

    rightButtonHandler: function () {
        GAME.state.start('peacecrush3');
    }
};
