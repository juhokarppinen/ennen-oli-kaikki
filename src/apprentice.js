var apprentice_state = {

    create: function() {
        PLAYER.age = 16;

        if (PLAYER.class === "rich") {
            var image     = 'youthworkcitybackground';
            var imageInfo = "";
            var text      = "Apteekkarin apupoikana toimiminen on kiinnostavaa. "+
                            "Koulutustaustasi vuoksi olet erittäin pätevä työssäsi.";
        } else {
            var image     = 'youthworkcitybackground';
            var imageInfo = "";
            var text      = "Kätevyytesi huomataan. Pääset eräälle verstaalle " +
                            "oppipojaksi. Kuulet kehuja, että muutaman vuoden " +
                            "päästä sinulla voisi hyvinkin olla oma verstas.";
        }
        
        var centerButtonLabel   = "Jatka";
        var centerButtonHandler = continueFromYouthwork1;

        drawUIsingleButton(image, imageInfo, text, PLAYER.age, 
                           CENTER_BUTTON.x, CENTER_BUTTON.y, 
                           centerButtonLabel, centerButtonHandler,
                           this);
    },

    update: function() {
    }
}

function continueFromYouthwork1 () {
    //todo: add different branches
    if(PLAYER.location.name !== "Jyväskylä" && PLAYER.class === "poor") {
        GAME.state.start('servant1');
    } else {
        GAME.state.start('death');
    }
}
