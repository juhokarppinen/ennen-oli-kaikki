var citywork1_state = {

    create: function() {
        PLAYER.age = 16;

        var text      = "Kävipä tuuri! Pääsit kauppa-apulaiseksi Osuusliike " +
                        "Mäki-Mattiin. Työhösi kuuluu kaikenlaista, mutta " +
                        "onneksi olet nopea oppimaan.";
        var image     = 'citybackground';
        var imageInfo = "";
            
        var centerButtonLabel   = "Jatka";
        var centerButtonHandler = continueFromCitywork;

        drawUIsingleButton(image, imageInfo, text, PLAYER.age, 
                           CENTER_BUTTON.x, CENTER_BUTTON.y, 
                           centerButtonLabel, centerButtonHandler,
                           this);
    },

    update: function() {
    }
}

function continueFromCitywork () {
    GAME.state.start('dance1');
}