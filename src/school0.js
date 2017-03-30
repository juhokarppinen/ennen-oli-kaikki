var school0_state = {

    create: function() {
        PLAYER.age = 7;

        var text = "Vuonna 1921 Suomessa säädettiin laki yleisestä " +
                   "oppivelvollisuudesta, mutta lähimpään kouluun on yli viisi kilometriä " +
                   "joten sinut on vapautettu oppivelvollisuudesta Saarijärven valtuuston päätöksen mukaisesti. " +
                   "Jäät kotiin auttamaan vanhempiasi kuten tähänkin asti.";

        var image             = 'countrybackground';
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('youthwork1');
    }
}