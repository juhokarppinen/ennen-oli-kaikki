var lotta1_state = {

    create: function() {

        var text = "Työvoiman tarve sairaalassa kuitenkin vähenee sitä mukaa, kun potilaita kotiutetaan. "
        +"Töitä olisi tarjolla esimerkiksi siirtoväen huoltotehtävissä. Jatkatko lottana vai hankkiudutko opiskelemaan?";
        var leftButtonLabel  = "Lottatyö";
        var rightButtonLabel  = "Opiskelu";
        var image     = 'lottawarbackground';

        drawUItwoButtons(image, text, leftButtonLabel, rightButtonLabel, this);
    },

    leftButtonHandler: function () {
        GAME.state.start('lotta2');
    },

    rightButtonHandler: function () {
        GAME.state.start('studies9');
    }
};
