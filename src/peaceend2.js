var peaceend2_state = {

    create: function() {
        var text = "Puna-armeijan ilmavoimat iskevät Suomeen 25.6.1941. Seuraavana päivänä presidentti "
        +"Risto Ryti pitää radiopuheen, jossa kertoo Suomen olevan jälleen sodassa Neuvostoliiton kanssa.";

        var image = "citybackground";
                
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        if(PLAYER.lotta === true) {
            GAME.state.start('wartime3');
        } else if(PLAYER.widowboss === true ) {
            GAME.state.start('warcrush1');
        } else if(PLAYER.gender === "female" || PLAYER.noconscript === true) {
            GAME.state.start('wartime4');
        } else {
            //todo GAME.state.start('war3');
            GAME.state.start('death');
        }
    }
}