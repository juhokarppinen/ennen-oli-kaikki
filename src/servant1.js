var servant1_state = {

    create: function() {
        var text = "";
        var background = GAME.add.sprite(0, 0, 'youthworkcountrybackground');
        background.alpha = 0;
        
        if(PLAYER.gender === "male") {
            text = "Saat mahdollisuuden lähteä rengiksi naapuripitäjään. Otatko tilaisuuden vastaan?";
        } else {
            text = "Pidät piikana olemisesta mutta isäntäsi on välillä turhan ankara. Vaihdatko toiseen taloon?";
        }
        
        PLAYER.age = 16;
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
        yesButton.events.onInputDown.add(continueFromServant1Y, this);
        var noButton = GAME.add.button(GAME.world.centerX * 1.5, GAME.world.centerY * 1.4, 'button');
        noButton.anchor.set(0.5);
        noButton.alpha = 0;
        var t2 = GAME.add.text(noButton.centerX, noButton.centerY, "Ei");
        t2.anchor.set(0.5);
        t2.alpha = 0;
        noButton.inputEnabled = true;
        noButton.events.onInputDown.add(continueFromServant1N, this);

        //fade in
        tweenElements(background, [box, yesButton, noButton, text1, t1, t2]);

    },

    update: function() {
    }
}

function continueFromServant1Y () {
    GAME.state.start('servant2');
}

function continueFromServant1N () {
    if(PLAYER.gender === "male") {
        GAME.state.start('youthwork2');
    } else {
        GAME.state.start('servant3');
    }
}