var barn1_state = {

    create: function() {
        var text = "";
        var background = GAME.add.sprite(0, 0, 'youthworkcountrybackground');
        background.alpha = 0;
        
        if(PLAYER.gender === "male") {
            PLAYER.crush = pickName("female");
            text = "Talon piika " + PLAYER.crush + " on silmäillyt sinua vihjailevasti. Kutsutko hänet kanssasi heinälatoon?";
        } else {
            PLAYER.crush = pickName("male");
            text = "Talon renki " + PLAYER.crush + " on silmäillyt sinua vihjailevasti. Lähdetkö hänen kanssaan heinälatoon?";
        }
        
        PLAYER.age = 19;
        displayNameAndAge();

        var box = GAME.add.sprite(GAME.world.centerX*0.3, GAME.world.centerY*0.2, 'box');
        box.alpha = 0;

        var text1 = GAME.add.text(GAME.world.centerX * 0.4, GAME.world.centerY * 0.3, text, STYLE);
        text1.alpha = 0;

        var yesButton = GAME.add.button(GAME.world.centerX * 0.5, GAME.world.centerY * 1.4, 'button');
        yesButton.anchor.set(0.5);
        yesButton.alpha = 0;
        var t1 = GAME.add.text(yesButton.centerX, yesButton.centerY, "Kyllä");
        t1.anchor.set(0.5);
        t1.alpha = 0;
        yesButton.inputEnabled = true;
        yesButton.events.onInputDown.add(continueFromBarn1Y, this);
        var noButton = GAME.add.button(GAME.world.centerX * 1.5, GAME.world.centerY * 1.4, 'button');
        noButton.anchor.set(0.5);
        noButton.alpha = 0;
        var t2 = GAME.add.text(noButton.centerX, noButton.centerY, "Ei");
        t2.anchor.set(0.5);
        t2.alpha = 0;
        noButton.inputEnabled = true;
        noButton.events.onInputDown.add(continueFromBarn1N, this);

        //fade in
        tweenElements(background, [box, yesButton, noButton, text1, t1, t2]);

    },

    update: function() {
    }
}

function continueFromBarn1Y () {
    GAME.state.start('barn2');
}

function continueFromBarn1N () {
    GAME.state.start('death');
}