var beginwar2_state = {

    create: function() {
        
        var image          = 'articlecontinuationwar2';
        var centerButtonLabel = "Jatka";
        var text = "Puna-armeijan ilmavoimat iskevät Suomeen 25.6.1941. Seuraavana päivänä presidentti "
            +"Risto Ryti pitää radiopuheen, jossa kertoo Suomen olevan jälleen sodassa Neuvostoliiton kanssa.";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        if(PLAYER.lotta === true) {
            GAME.state.start('wartime3');
        } else if(PLAYER.widowboss === true ) {
            GAME.state.start('warcrush1');
        } else if(PLAYER.gender === "female" || PLAYER.noconscript === true || PLAYER.amputation === true) {
            GAME.state.start('wartime4');
        } else {
            GAME.state.start('war3');
        }
    }
};