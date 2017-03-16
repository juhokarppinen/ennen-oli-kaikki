var school2_state = {

    create: function() {
        var background = GAME.add.sprite(0, 0, 'schoolbackground');
        background.alpha = 0;
        
        PLAYER.age = 11;
        displayNameAndAge();

        var box = GAME.add.sprite(GAME.world.centerX*0.3, GAME.world.centerY*0.2, 'box');
        box.alpha = 0;

        var text = "Vuonna 1928 pääset kansakoulusta.";
        var buttonText;

        if(PLAYER.gender === "female") {
            text += " Olet terävä oppilas, mutta tyttöjä ei tuolloin ollut tapana kouluttaa enempää, joten jäät kotiin auttamaan askareissa.";
            buttonText = "Kotitöihin";
        } else if(PLAYER.class === "poor") {
            text += " Olet terävä oppilas, mutta perheelläsi ei ole varaa oppikouluun ja kotona tarvitaan apuasi, joten koulutiesi päättyy tähän.";
            buttonText = "Töihin";
        } else if(PLAYER.class === "middle") {
            text += " Olet terävä oppilas, ja opettajasi kannustaa sinua jatkamaan oppikouluun. Perheesi ei kuitenkaan syty idealle, vaan haluaa sinut töihin.";
            buttonText = "Töihin";
        } else if(PLAYER.class === "rich" && PLAYER.gender === "male") {
            text += " Olet terävä oppilas, ja opettajasi kannustaa sinua jatkamaan oppikouluun. Pääsykokeista selvittyäsi vanhempasi ovat ylpeitä ja lähettävät sinut oppikouluun mielellään.";
            buttonText = "Oppikouluun";
        }

        var text1 = GAME.add.text(GAME.world.centerX * 0.4, GAME.world.centerY * 0.3, text, STYLE);
        text1.alpha = 0;

        var continueButton = GAME.add.button(GAME.world.centerX, GAME.world.centerY * 1.4, 'button');
        continueButton.anchor.set(0.5);
        continueButton.alpha = 0;
        var t1 = GAME.add.text(continueButton.centerX, continueButton.centerY, buttonText);
        t1.anchor.set(0.5);
        t1.alpha = 0;
        continueButton.inputEnabled = true;
        continueButton.events.onInputDown.add(continueFromSchool2, this);

        //fade in
        tweenElements(background, [box, continueButton, text1, t1]);
        displayTimeline(PLAYER.age);

    },

    update: function() {
    }
}

function continueFromSchool2 () {
    
    if(PLAYER.gender === "female") {
        GAME.state.start('homechores1');
    } else if(PLAYER.class === "rich") {
        GAME.state.start('studies1');
    } else {
        GAME.state.start('youthwork1');
    }
}
