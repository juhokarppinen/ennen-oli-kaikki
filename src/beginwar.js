var beginwar_state = {

    create: function() {
        PLAYER.age = 22;
        
        var image            = 'conscriptbackground';
        var article          = 'articlewinterwar';
        var centerButtonLabel = "Jatka";

        drawUIsingleButtonArticle(image, article, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        if(PLAYER.noconscript === true) {
            GAME.state.start('wartime1');
        } else if(PLAYER.gender === "male") {
            GAME.state.start('war1');
        } else {
            GAME.state.start('wartime1');
        }
    }
}