var citywork4_state = {

    create: function() {
        PLAYER.age = 14;
        var text = "Onneksesi saat paikan vaneritehtaalta. Olet kova tekemään työtä, ja "
        +"tehtaalla huomataan pian että sinut todella kannatti palkata. Jäät tehtaalle "
        +"hommiin moneksi vuodeksi.";

        var image               = 'plywoodfactorybackground';
        var centerButtonLabel   = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('conscript');
    }
}