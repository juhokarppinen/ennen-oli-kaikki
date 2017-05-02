var beginwar2_state = {

    create: function() {
        
        var image            = 'conscriptbackground';
        var article          = 'articlecontinuationwar';
        var centerButtonLabel = "Jatka";

        drawUIsingleButtonArticle(image, article, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('peaceend2');
    }
}