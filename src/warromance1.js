var warromance1_state = {

    create: function() {

        var image = 'barnbackground';
        PLAYER.crush = pickName("female");
        var text = "Vietätte yhdessä unohtumattomia päiviä. Tunnet olevasi rakastunut. Pyydätkö häntä vaimoksesi?";
        var leftButtonLabel  = "Kyllä";
        var rightButtonLabel  = "Ei";

        drawUItwoButtons(image, text, leftButtonLabel, rightButtonLabel, this);
    },

    leftButtonHandler: function () {
        GAME.state.start('warromance2');
    },

    rightButtonHandler: function () {
        GAME.state.start('warromance3');
    }
}