var citywork1_state = {

    create: function() {
        PLAYER.age = 16;

        var text      = "Kävipä tuuri! Pääsit kauppa-apulaiseksi Osuusliike " +
                        "Mäki-Mattiin. Työhösi kuuluu kaikenlaista, mutta " +
                        "onneksi olet nopea oppimaan.";
        var image     = 'citybackground';
        var imageInfo = "";
            
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, imageInfo, text, centerButtonLabel, this);
    },

    update: function() {
    }
}

function centerButtonHandler() {
    GAME.state.start('dance1');
}