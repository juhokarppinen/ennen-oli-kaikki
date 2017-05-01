var warcrush3_state = {

    create: function() {
        
        var image = 'barnbackground';
        var text = "Pettynyt "+PLAYER.crush+" lakkaa kirjoittamasta sinulle etkä kuule hänestä enää.";
                
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('death');
    }
}