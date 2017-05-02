var map1_state = {

    create: function() {
        //PLACEHOLDER! TODO: Add map with animation
        var image = 'citybackground';
        var text = "Suomi menetti sodassa Karjalan.";
                
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        if(PLAYER.gender === "female") {
            GAME.state.start('peacetime2');
        } else {
            if(PLAYER.noconscript === true) {
                GAME.state.start('peacetime2');
            } else {
                GAME.state.start('peacesoldier2');
            }
        }
    }
}