var studies1_state = {

    create: function() {
        PLAYER.age = 12;
        if(PLAYER.gender === "female") {
            var gendertext = "Jyväskylän tyttökoulussa";
            var image      = 'studieswomenbackground';
        } else {
            var gendertext = "Jyväskylän lyseossa";
            var image      = 'studies1background';
        }
        var text = "Myönnyt vanhempiesi tahtoon ja aloitat opiskelun " + gendertext
        + ". Opiskelu osoittautuu paljon vaikeammaksi kuin olit odottanut, mutta et aio luovuttaa.";

        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function() {
        GAME.state.start('studies6');
    }
}