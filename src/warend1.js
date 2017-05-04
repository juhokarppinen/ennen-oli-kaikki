var warend1_state = {

    create: function() {
        //just in case someone's age is still younger than this
        PLAYER.age = 27;
        var image = 'conscriptbackground';
        var text = "Taistelut Suomen ja Neuvostoliiton välillä lakkaavat 4. syyskuuta 1944. Aselevon ehtoihin kuuluu alueluovutusten lisäksi, "
        +"että Suomi katkaisee suhteensa Saksaan ja ajaa saksalaiset sotilaat pois maasta. Sota jatkuu nyt entisiä aseveljiä vastaan.";
                
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('warend2');
    }
}