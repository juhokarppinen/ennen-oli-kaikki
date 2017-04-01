var homechores0_state = {

    create: function() {
        PLAYER.age = 17;

        var text = "Päiväsi kuluvat ommellen, pianoa soittaen ja hienon naisen käytöstapoja opetellen. "
        +"Pitkästyt kuitenkin pian ja liityt lottajärjestöön.";
        
        var image = "homechores1background";
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('lotta0');
    }
}