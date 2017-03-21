var school0_state = {

    create: function() {
        PLAYER.age = 7;

        var text = "Vuonna 1921 Suomessa säädettiin laki yleisestä " +
                   "oppivelvollisuudesta, mutta osa maalaiskylien lapsista ei päässyt " +
                   "aloittamaan kansakoulua. Jäit kotiin auttamaan vanhempiasi töissä. " +
                   "Vuosi on 1924.";

        var image             = 'beginningcountrybackground';
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        if (PLAYER.gender === "male")
            GAME.state.start('youthwork1');
        else
            GAME.state.start('homechores1');    
    }
}