var studies5_state = {

    create: function() {

        if(PLAYER.location.name === "Jämsä") {
        }   else {
        }

        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function() {
        GAME.state.start('studies2');
    }
}
