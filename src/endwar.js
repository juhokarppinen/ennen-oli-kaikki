var endwar_state = {

    create: function() {
        var image            = 'conscriptbackground';
        var article          = 'articlepeace';
        var centerButtonLabel = "Jatka";

        drawUIsingleButtonArticle(image, article, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        if(PLAYER.gender === "male" && PLAYER.noconscript !== true) {
            if(PLAYER.gender === "female") {
                GAME.state.start('peacetime2');
            } else {
                if(PLAYER.noconscript === true) {
                    GAME.state.start('peacetime2');
                } else {
                    GAME.state.start('peacesoldier2');
                }
            }
        } else {
            GAME.state.start('peacetime1');
        }
    }
}