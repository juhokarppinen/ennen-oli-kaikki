var studies2_state = {

    create: function() {
        PLAYER.age = 16;

        if (PLAYER.friend === "Hilda") {
            var text = "Hildaa auttaessasi teistä tuli parhaat ystävät ja valmistutte tyttökoulusta "+
                        "yhdessä erinomaisin arvosanoin. Suuntaatte molemmat sairaanhoitajakouluun " +
                        "hymyssä suin.";
        } else {
            var text = "Hilda joutui jättämään koulun kesken, mutta sinä valmistut oppikoulusta hyvin arvosanoin. " +
                       "Seuraat unelmaasi ja lähdet sairaanhoitajakouluun.";
        }
        
        var image     = 'studies1background';
        var imageInfo = "";
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, imageInfo, text, centerButtonLabel, this);
    },

    centerButtonHandler: function() {
        GAME.state.start('death');
    }
}
