var warcrush2_state = {

    create: function() {

        var image = 'barnbackground';
        var text = "Aika kuluu aivan liian nopeasti, ja pian hänen on palattava takaisin rintamalle. "
        +"Viimeisenä iltanaan "+PLAYER.crush+" pyytää sinua vaimokseen. Mitä vastaat?";
        var leftButtonLabel  = "Kyllä";
        var rightButtonLabel  = "Ei";

        drawUItwoButtons(image, text, leftButtonLabel, rightButtonLabel, this);
    },

    leftButtonHandler: function () {
        GAME.state.start('warcrush4');
    },

    rightButtonHandler: function () {
        GAME.state.start('warcrush5');
    }
}