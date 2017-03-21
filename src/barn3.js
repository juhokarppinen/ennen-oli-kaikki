var barn3_state = {

    create: function() {

        if (PLAYER.gender === "male") {
            var text = PLAYER.crush + " on hyvin helpottunut. Pidätte pikaiset häät ja " + 
                       "muutatte asumaan pieneen mökkiin isäsi tontin laidalle.";
            PLAYER.spouse = PLAYER.crush;
        } else {
            if (Math.random() <= 0.50) {     // 50% chance for dramatic effect
            var text = PLAYER.crush + " toimii onneksi tilanteessa kuin herrasmies ja pyytää sinua vaimokseen. Pidätte pikaiset häät ja " + 
                       "muutatte asumaan pieneen mökkiin hänen isänsä tontin laidalle.";
            PLAYER.spouse = PLAYER.crush;
            } else {
                var text = PLAYER.crush + " kieltää tapahtuneen täysin. Seuraavana päivänä hän on kadonnut kokonaan, sanomatta sinulle sanaakaan. "
                        + "Sukulaiset kertovat miehen muuttaneen muualle töiden perässä.";
            }
        }
        
        //todo: country wedding picture
        var image            = 'youthworkcountrybackground';
        var imageInfo        = "Juhani Ahola";
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, imageInfo, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('child1');
    }
}