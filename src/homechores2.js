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
        
        var image = "homechorescountrybackground";
        var imageInfo = "";
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, imageInfo, text, centerButtonLabel, this);
    },

    update: function() {
    },

    centerButtonHandler: function () {
        GAME.state.start('barn1');
    }
}
