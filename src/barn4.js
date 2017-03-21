var barn4_state = {

    create: function() {
        var text = "Kun et näytä huomaavan häntä, "+PLAYER.crush+" tekee ensimmäisen aloitteen, ja kertoo sinulle tunteistaan. "
        + "Vastaatko niihin pyytämällä häntä vaimoksesi?";

        var image            = 'youthworkcountrybackground';
        var imageInfo        = "Juhani Ahola";
        var leftButtonLabel  = "Kyllä";
        var rightButtonLabel = "Ei";

        drawUItwoButtons(image, imageInfo, text, leftButtonLabel, rightButtonLabel, this);
    },

    leftButtonHandler: function () {
        //todo: wedding
        GAME.state.start('death');
    },

    rightButtonHandler: function () {
        GAME.state.start('workhome');
    }
}