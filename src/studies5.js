var studies5_state = {

    create: function() {
        var text = "Ahkera opiskelusi tuottaa tuloksia ja pääset kuin pääsetkin jatkamaan opintiellä. Aloitat oppikoulun ";

        if(PLAYER.location.name === "Jämsä") {
            text += "Jämsän yhteiskoulussa."
        }   else {
            text += "Jyväskylän tyttökoulussa."
        }

        var centerButtonLabel = "Jatka";
        var image           = 'studies1background';

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function() {
        GAME.state.start('studies2');
    }
}