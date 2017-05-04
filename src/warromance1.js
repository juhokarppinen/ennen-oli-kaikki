var warromance1_state = {

    create: function() {

        var image = 'barnbackground';
        PLAYER.crush = pickName("female");
        var text = "Vietätte yhdessä unohtumattomia päiviä. Tunnet olevasi rakastunut. Pyydätkö häntä vaimoksesi?";
        var leftButtonLabel  = "Kyllä";
        var rightButtonLabel  = "Ei";
        var infoText = "Sota-aikana avioliittoja solmittiin runsaasti, sillä sotilaan vaimo sai kuukausipalkkaa " +
        "valtiolta. Itse sotilas sai enemmän lomapäiviä. Monet sota-ajan pika-avioliitot kuitenkin päättyivät " +
        "myös nopeasti sodan jälkeen. Avioerojen määrä kasvoi.\n\nLähde: Elämää kotirintamalla. Artikkeli. yle.fi";

        drawUItwoButtons(image, text, leftButtonLabel, rightButtonLabel, this, infoText);
    },

    leftButtonHandler: function () {
        GAME.state.start('warromance2');
    },

    rightButtonHandler: function () {
        GAME.state.start('warromance3');
    }
}