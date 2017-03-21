var workaway_state = {

    create: function() {

        var text = "Sinua hävettää ja muutat pikaisesti toiselle paikkakunnalle."
        +" Etsit töitä renkinä, ja onneksi löydät niitä tilalta, jolla ei kysytä ylimääräisiä kysymyksiä.";
        
        var image            = 'youthworkcountrybackground';
        var imageInfo        = "Juhani Ahola";
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, imageInfo, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('beginwar');
    }
}