var war2_state = {

    create: function() {
        PLAYER.age = 23;
        var text = "Pakkanen on laskenut Kannaksella alle 40 asteen. Olet palelluttanut vasemman jalkasi pahasti, "
        +"sillä saappaaseesi on tullut reikä. Jalkasi on täysin tunnoton ja sinut lähetetään kenttäsairaalaan tarkistettavaksi.";
                
        var image            = 'warbackground';
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('peacesoldier1');
    }
}