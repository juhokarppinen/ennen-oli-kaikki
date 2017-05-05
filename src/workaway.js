var workaway_state = {

    create: function() {

        var text = "Kerrot emännälle palaavasi asiaan huomenna. Sinua hävettää mutta et halua kantaa vastuuta, "
        +"joten aamuhämärissä lähdet pikaisesti toiselle paikkakunnalle. "
        +"Etsit töitä renkinä, ja onneksi löydät niitä tilalta, jolla ei kysytä ylimääräisiä kysymyksiä.";
        
        var image            = 'youthworkcountrybackground';
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('conscript');
    }
};