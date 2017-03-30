var homechores0_state = {

    create: function() {
        PLAYER.age = 14;

        var text = "Päiväsi kuluvat kapiopitsejä ommellen, pianoa soittaen ja säätyläisneidon käytöstapoja opetellen. Pitkästyt kuitenkin pian ja liityt pikkulottiin.";
        
        var image = "homechorescitybackground";
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('lotta0');
    }
}