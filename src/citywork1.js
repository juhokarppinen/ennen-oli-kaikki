var citywork1_state = {

    create: function() {
        PLAYER.age = 16;

        var text      = "Kävipä tuuri! Pääsit kauppa-apulaiseksi Osuusliike " +
                        "Mäki-Mattiin. Työhösi kuuluu kaikenlaista, mutta " +
                        "onneksi olet nopea oppimaan.";
        var image     = 'citybackground';
            
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('dance1');
    }
}
