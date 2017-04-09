var barn3_state = {

    create: function() {

        
        if (Math.random() <= 0.50) {     // 50% chance for dramatic effect
        var text = "Löydät heilasi. Onneksi " + PLAYER.crush + " toimii tilanteessa kuten pitää ja pyytää sinua vaimokseen. Pidätte pikaiset häät ja " + 
                   "muutatte työnantajasi teille osoittamaan mökkiin lähelle palvelusväen aittoja.";
        var image            = 'weddingbackground';
        PLAYER.spouse = PLAYER.crush;
        } else {
            var text = +PLAYER.crush + " on kuitenkin viikkoa aiemmin muuttanut muualle töiden perässä. "
                    + "Hänen löytämisensä on nyt mahdotonta. Otat nöyränä potkut vastaan.";
            var image        = 'youthworkcountrybackground';
        }
        
        //todo: country wedding picture
        
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('child1');
    }
}