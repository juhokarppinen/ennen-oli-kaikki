var school_state = {

    create: function() {
        var background = game.add.sprite(0, 0, 'schoolbackground');
        background.alpha = 0;
        
        var continueButton = game.add.sprite(game.world.centerX*0.1, game.world.centerY*0.2, 'box');
        
        var style = {font: "25px verdana", fill: "#1e1711"};
        var text1 = game.add.text(game.world.centerX * 0.2, game.world.centerY * 0.5, "Kävit kansakoulun.", style);
        text1.alpha = 0;
        if(player.class === "poor") {
            var text2 = game.add.text(game.world.centerX * 0.2, game.world.centerY * 0.6, "Välillä oli vaikeaa, koska perheesi on köyhä.", style);
        }
        if(player.class === "middle") {
            var text2 = game.add.text(game.world.centerX * 0.2, game.world.centerY * 0.6, "Se meni ihan hyvin, perheestä oli apua.", style);
        }
        if(player.class === "rich") {
            var text2 = game.add.text(game.world.centerX * 0.2, game.world.centerY * 0.6, "Se meni loistavasti, perheen tukemana.", style);
        }
        text2.alpha = 0;

        var continueButton = game.add.button(game.world.centerX * 0.8, game.world.centerY * 1.2, 'button');
        continueButton.anchor.set(0.5);
        var t1 = game.add.text(continueButton.centerX, continueButton.centerY, 'Jatka');
        t1.anchor.set(0.5);
        continueButton.inputEnabled = true;
        continueButton.events.onInputDown.add(die, this);
        
        //fade in
        game.add.tween(background).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true);
        game.add.tween(text1).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true);
        game.add.tween(text2).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true);
        game.add.tween(continueButton).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true);
        game.add.tween(t1).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true);

    },
    
    update: function() {
    }
}

function die () {
    game.state.start('death');

}