var servant2_state = {

    create: function() {
        PLAYER.age = 17;

        var text = "Olet tyytyväinen valintaasi. Elämä tuntuu hymyilevän ja " +
                   "saat lähetettyä kotiinkin muutaman lantin.";
        
        var image             = 'youthworkcountrybackground';
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('barn1');
    }
}