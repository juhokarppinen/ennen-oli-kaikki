var school2_state = {

    create: function() {
        PLAYER.age = 11;

        var text = "Vuonna 1928 pääset kansakoulusta. Olet terävä oppilas, ";
        var centerButtonLabel;

        if(PLAYER.class === "rich") {
            centerButtonLabel = "Oppikouluun";
            text += "ja opettajasi kannustaa sinua jatkamaan oppikouluun. " +
                    "Pääsykokeista selvittyäsi vanhempasi ovat ylpeitä ja " +
                    "lähettävät sinut oppikouluun mielellään.";
        } else if(PLAYER.gender === "female") {
            centerButtonLabel = "Kotitöihin";
            text += "mutta tuohon aikaan harvat tytöt menivät kouluun " +
                    "kansakoulun jälkeen. Jäät kotiin auttamaan askareissa.";
        } else if(PLAYER.class === "poor") {
            centerButtonLabel = "Töihin";
            text += "mutta perheelläsi ei ole varaa oppikouluun ja kotona " +
                    "tarvitaan apuasi, joten koulutiesi päättyy tähän.";
        } else {
            centerButtonLabel = "Töihin";
            text += "ja opettajasi kannustaa sinua jatkamaan oppikouluun. " +
                    "Perheesi ei kuitenkaan syty idealle, vaan haluaa sinut " +
                    "töihin.";
        }

        var image     = 'schoolbackground';
        var imageInfo = "Signe Brander";

        drawUIsingleButton(image, imageInfo, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        if (PLAYER.class === "rich") {
            GAME.state.start('studies1');
        } else if (PLAYER.gender === "female") {
            GAME.state.start('homechores1');
        } else {
            GAME.state.start('youthwork1');
        }
    }   
}
