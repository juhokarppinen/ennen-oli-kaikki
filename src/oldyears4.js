var oldyears4_state = {
    create: function() {
        var image = "citybackground";
        PLAYER.age = 64;
        var text = "Elämäsi valo ovat lapsenlapsesi, jotka käyvät silloin tällöin katsomassa mummiaan. "
        +"Pidät huolta, että sinulla on aina tarjota heille Pandan lakritsia, vaikka ei olisikaan karkkipäivä.";
                
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('oldyears5');
    }
}