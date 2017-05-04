var sixties_state = {

    create: function() {
        
        var image = "citybackground";
        PLAYER.age = 43;
        var text = "60-luku!";
                
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('death');
    }
}