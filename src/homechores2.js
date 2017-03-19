var homechores2_state = {

    create: function() {
        PLAYER.age = 16;

        if(PLAYER.gender === "male") {
            var text = "Raadat isäsi rinnalla kotitilalla, muttet voi lakata " +
                       "jossittelemasta, millaiseksi elämäsi olisi muuttunut, " +
                       "jos olisit jatkanut opintoja.";
        } else {
            var text = "Vuosien kuluessa saat lisää vastuuta ja pääset auttamaan "+
                       "tilan hoitamiseen liittyvissä tehtävissä.";
        }
        
        var centerButtonLabel   = "Jatka";

        drawUIsingleButton(image, imageInfo, text, centerButtonLabel, this);
    },

    update: function() {
    }
}

function centerButtonHandler () {
    GAME.state.start('barn1');
}
