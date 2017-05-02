var endwar_state = {

    create: function() {
        PLAYER.age = 22;
        
        var image            = 'conscriptbackground';
        var article          = 'articlepeace';
        var centerButtonLabel = "Jatka";

        drawUIsingleButtonArticle(image, article, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('peacetime1');
    }
}