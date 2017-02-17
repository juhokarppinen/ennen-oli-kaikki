var school_state = {

    create: function() {
        game.add.sprite(0, 0, 'schoolbackground');
        
        var style = {font: "25px verdana", fill: "#FFFFFF"};
        var text1 = game.add.text(game.world.centerX * 0.2, game.world.centerY * 0.5, "Kävit kansakoulun.", style);
        var text2 = game.add.text(game.world.centerX * 0.2, game.world.centerY * 0.6, "Se meni vähän heikosti, koska perheestä ei ollut apua.", style);

        var continueButton = game.add.button(game.world.centerX, game.world.centerY, 'button');
        continueButton.anchor.set(0.5);
        var t1 = game.add.text(continueButton.centerX, continueButton.centerY, 'Jatka');
        t1.anchor.set(0.5);
        continueButton.inputEnabled = true;
        continueButton.events.onInputDown.add(die, this);

    },
    
    update: function() {
    }
}

function die () {
    game.state.start('death');

}