var school_state = {

    create: function() {
        var background = game.add.sprite(0, 0, 'schoolbackground');
        background.alpha = 0;
        
        var box = game.add.sprite(game.world.centerX*0.3, game.world.centerY*0.2, 'box');
        box.alpha = 0;
        
        var style = {font: "32px verdana", fill: "#1e1711", wordWrap: true, wordWrapWidth: 700};
        
        var text = "Vuonna 1921 Suomessa säädettiin laki yleisestä oppivelvollisuudesta, joten aloitat koulutiesi sinä syksynä, kun täytät seitsemän vuotta.";
        
        if(player.class === "poor") {
            text += " Olet terävä oppilas, mutta äitisi tarvitsee apuasi pikkusisaruksiesi hoidossa, joten koulutiesi päättyy tähän.";
        }
        if(player.class === "middle") {
            text += " Olet terävä oppilas, ja opettajasi kannustaa sinua jatkamaan oppikouluun.";
        }
        if(player.class === "rich") {
            text += " Olet terävä oppilas, ja opettajasi kannustaa sinua jatkamaan oppikouluun.";
        }
        
        var text1 = game.add.text(game.world.centerX * 0.4, game.world.centerY * 0.3, text, style);
        text1.alpha = 0;

        var continueButton = game.add.button(game.world.centerX, game.world.centerY * 1.4, 'button');
        continueButton.anchor.set(0.5);
        continueButton.alpha = 0;
        var t1 = game.add.text(continueButton.centerX, continueButton.centerY, 'Jatka');
        t1.anchor.set(0.5);
        t1.alpha = 0;
        continueButton.inputEnabled = true;
        continueButton.events.onInputDown.add(die, this);
        
        //fade in
        game.add.tween(background).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true);
        game.add.tween(box).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.None, true, 2000);
        game.add.tween(continueButton).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.None, true, 2000);
        game.add.tween(text1).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.None, true, 2000);
        game.add.tween(t1).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.None, true, 2000);

    },
    
    update: function() {
    }
}

function die () {
    game.state.start('death');

}