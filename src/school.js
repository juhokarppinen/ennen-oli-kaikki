var school_state = {

    create: function() {
        game.add.sprite(0, 0, 'schoolbackground');
        
        var continueButton = game.add.sprite(game.world.centerX*0.1, game.world.centerY*0.2, 'box');
        
        var style = {font: "25px verdana", fill: "#1e1711"};
        var text1 = game.add.text(game.world.centerX * 0.2, game.world.centerY * 0.5, "Kävit kansakoulun.", style);
        if(player.class === "poor") {
            var text2 = game.add.text(game.world.centerX * 0.2, game.world.centerY * 0.6, "Välillä oli vaikeaa, koska perheesi on köyhä.", style);
        }
        if(player.class === "middle") {
            var text2 = game.add.text(game.world.centerX * 0.2, game.world.centerY * 0.6, "Se meni ihan hyvin, perheestä oli apua.", style);
        }
        if(player.class === "rich") {
            var text2 = game.add.text(game.world.centerX * 0.2, game.world.centerY * 0.6, "Se meni loistavasti, perheen tukemana.", style);
        }

        var continueButton = game.add.button(game.world.centerX * 0.8, game.world.centerY * 1.2, 'button');
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