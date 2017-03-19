var apprentice_state = {

    create: function() {
        PLAYER.age = 16;

        var text;
        var background;
        var pictureInfo = drawPictureInfo("");

        if (PLAYER.class === "rich") {
            var image     = 'youthworkcitybackground';
            var imageInfo = "";
            var text      = "Apteekkarin apupoikana toimiminen on kiinnostavaa. "+
                            "Koulutustaustasi vuoksi olet erittäin pätevä työssäsi.";
        } else {
            var image     = 'youthworkcitybackground';
            var imageInfo = "";
            var text      = "Kätevyytesi huomataan. Kuulet kehuja, että muutaman vuoden " +
                            "päästä sinulla voisi hyvinkin olla oma verstas.";
        }
        
        var centerButtonLabel   = "Jatka";
        var centerButtonHandler = continueFromApprentice;

        drawUIsingleButton(image, imageInfo, text, PLAYER.age, 
                           CENTER_BUTTON.x, CENTER_BUTTON.y, 
                           centerButtonLabel, centerButtonHandler,
                           this);
    },

    update: function() {
    }
}

function continueFromApprentice () {
    GAME.state.start('death');
}
