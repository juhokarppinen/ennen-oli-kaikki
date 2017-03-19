var dance1_state = {

    create: function() {
        PLAYER.age = 19;

        PLAYER.crush = pickName("male");
        var text = "Livahdat tansseihin, joissa tapaatkin erään vakioasiakkaan. " +
                   "Tanssien päätteeksi " + PLAYER.crush + " haluaa saattaa " +
                   "sinut kotiin, suostutko ehdotukseen?";
        
        var image            = 'citybackground';
        var imageInfo        = "";
        var leftButtonLabel  = "Kyllä";
        var rightButtonLabel = "Ei";

        drawUItwoButtons(image, imageInfo, text, leftButtonLabel, rightButtonLabel, this);
    },

    leftButtonHandler: function () {
        GAME.state.start('death');
    },

    rightButtonHandler: function () {
        GAME.state.start('death');
    }
}