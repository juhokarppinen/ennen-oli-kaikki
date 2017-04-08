var studies3_state = {

    create: function() {
        PLAYER.age = 16;

        if (PLAYER.friend === "Hilja") {
            var text = "Hiljaa auttaessasi teistä tuli parhaat ystävät ja valmistutte tyttökoulusta "+
                        "yhdessä erinomaisin arvosanoin. Suuntaatte molemmat sairaanhoitajakouluun " +
                        "hymyssä suin.";
        } else {
            var text = "Hilja joutui jättämään koulun kesken, mutta sinä valmistut oppikoulusta hyvin arvosanoin. " +
                       "Seuraat unelmaasi ja lähdet sairaanhoitajakouluun.";
        }
        
        var image     = 'studieswomenbackground';
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function() {
        GAME.state.start('death');
    }
}
