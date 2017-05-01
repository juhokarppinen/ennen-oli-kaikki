var peaceend2_state = {

    create: function() {
        var text = "Puna-armeijan ilmavoimat iskevät Suomeen 25.6.1941. Seuraavana päivänä presidentti "
        +"Risto Ryti pitää radiopuheen, jossa kertoo Suomen olevan jälleen sodassa Neuvostoliiton kanssa.";

        var image = "citybackground";
                
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('death');
    }
}