var peacecrush3_state = {

    create: function() {

        var text = "Syksy kuluu nopeasti opintojen parissa, mutta pimenneinä iltoina uneksit "
        +"kesän heinätöistä ja "+PLAYER.crush+" on mielessäsi. Toivot kuulevasi hänestä vielä.";
        
        var image     = 'teacherschoolbackground';
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('peaceend1');
    }
}