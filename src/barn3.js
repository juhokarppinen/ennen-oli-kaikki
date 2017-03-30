var barn3_state = {

    create: function() {

        if (PLAYER.gender === "male") {
            var text = PLAYER.crush + " on hyvin helpottunut. Pidätte pikaiset häät ja " + 
                       "muutatte asumaan pieneen mökkiin isäsi tontin laidalle.";
            PLAYER.spouse = PLAYER.crush;
        } else {
            if (Math.random() <= 0.50) {     // 50% chance for dramatic effect
            var text = "Kuultuaan kuka oli syyllinen, emäntä etsii rengin käsiinsä. Onneksi " + PLAYER.crush + " toimii tilanteessa kuin herrasmies ja pyytää sinua vaimokseen. Pidätte pikaiset häät ja " + 
                       "muutatte asumaan pieneen mökkiin hänen isänsä tontin laidalle.";
            PLAYER.spouse = PLAYER.crush;
            } else {
                var text = "Kuultuaan kuka oli syyllinen, emäntä yrittää etsiä rengin käsiinsä. "+PLAYER.crush + " on kuitenkin viikkoa aiemmin muuttanut muualle töiden perässä. "
                        + "Hänen löytämisensä on nyt mahdotonta.";
            }
        }
        
        //todo: country wedding picture
        var image            = 'youthworkcountrybackground';
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('child1');
    }
}