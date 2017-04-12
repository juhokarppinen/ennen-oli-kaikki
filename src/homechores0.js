var homechores0_state = {

    create: function() {
        PLAYER.age = 17;
        PLAYER.lotta = true;

        var text = "Päiväsi kuluvat ommellen, pianoa soittaen ja hienon naisen käytöstapoja opetellen. "
        +"Pitkästyt kuitenkin pian ja haet lottajärjestöön. Koeajan päättyessä tiedät valinneesi oikean "
        +"tien ja annat lottalupauksen.";
        
        var image = "homechores1background";
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('lotta0');
    }
}