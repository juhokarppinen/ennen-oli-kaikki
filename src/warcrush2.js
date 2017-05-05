var warcrush2_state = {

    create: function() {

        var image = 'barnbackground';
        var text = "Aika kuluu aivan liian nopeasti, ja pian hänen on palattava takaisin rintamalle. "
        +"Viimeisenä iltanaan "+PLAYER.crush+" pyytää sinua vaimokseen. Mitä vastaat?";
        var leftButtonLabel  = "Kyllä";
        var rightButtonLabel  = "Ei";
        var infoText = "Sota-aikana avioliittoja solmittiin runsaasti, sillä sotilaan vaimo sai kuukausipalkkaa " +
        "valtiolta. Itse sotilas sai enemmän lomapäiviä. Monet sota-ajan pika-avioliitot kuitenkin päättyivät " +
        "myös nopeasti sodan jälkeen. Avioerojen määrä kasvoi.\n\nLähde: Elämää kotirintamalla. Artikkeli. yle.fi";

        drawUItwoButtons(image, text, leftButtonLabel, rightButtonLabel, this, infoText);
    },

    leftButtonHandler: function () {
        GAME.state.start('warcrush4');
    },

    rightButtonHandler: function () {
        GAME.state.start('warcrush5');
    }
};