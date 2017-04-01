var studies1_state = {

    create: function() {
        PLAYER.age = 12;
        var text = "Isäsi myöntyy, ja aloitat oppikoulun Jyväskylän tyttökoulussa. Opiskelu osoittautuu " +
           "paljon vaikeammaksi kuin olit odottanut, mutta et aio luovuttaa. " +
           "Luokkatoverillasi Hiljalla on vaikeuksia pysytellä perässä, autatko häntä " + 
           "koulutöissä?";
        var leftButtonLabel = "Kyllä";
        var rightButtonLabel = "Ei";

        var image           = 'studies1background';

        drawUItwoButtons(image, text, leftButtonLabel, rightButtonLabel, this);
    },

    leftButtonHandler: function () {
        PLAYER.friend = "Hilja";
        GAME.state.start('studies3');
    },

    rightButtonHandler: function () {
        GAME.state.start('studies3');
    }
}