var servant2_state = {

    create: function() {
        PLAYER.age = 17;

        if(PLAYER.gender === "female") {
            var gendertext = "piikana";
        } else {
            var gendertext = "renkinä";
        }

        var text = "Vaikka olet tottunut kovaan työhön pienestä pitäen, "+gendertext +
                   " oleminen on raskaampaa kuin olisit koskaan voinut kuvitellakaan. " +
                   "Olet silti tyytyväinen valintaasi, ja saat lähetettyä kotiinkin muutaman lantin.";
        
        var image             = 'youthworkcountrybackground';
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('servant4');
    }
}