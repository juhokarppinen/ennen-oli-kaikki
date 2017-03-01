var school_state = {

    create: function() {
        var background = GAME.add.sprite(0, 0, 'schoolbackground');
        background.alpha = 0;
        
        var box = GAME.add.sprite(GAME.world.centerX*0.3, GAME.world.centerY*0.2, 'box');
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
        
        var text1 = GAME.add.text(GAME.world.centerX * 0.4, GAME.world.centerY * 0.3, text, style);
        text1.alpha = 0;

        var continueButton = GAME.add.button(GAME.world.centerX, GAME.world.centerY * 1.4, 'button');
        continueButton.anchor.set(0.5);
        continueButton.alpha = 0;
        var t1 = GAME.add.text(continueButton.centerX, continueButton.centerY, 'Jatka');
        t1.anchor.set(0.5);
        t1.alpha = 0;
        continueButton.inputEnabled = true;
        continueButton.events.onInputDown.add(die, this);
        
        //fade in
        tweenElements(background, [box, continueButton, text1, t1]);

    },
    
    update: function() {
    }
}

function die () {
    GAME.state.start('death');
}