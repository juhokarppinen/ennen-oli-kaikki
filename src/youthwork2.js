var youthwork2_state = {

    create: function() {
        var text = "";
        if(PLAYER.location.name === "Jyväskylä") {
            text = "Joku muu saa oppipojan paikan, ja joudut etsimään uutta työtä.";
            var background = GAME.add.sprite(0, 0, 'youthworkcitybackground');
        } else {
            text = "Isäsi ei ole kovin tyytyväinen valintaasi, ja laittaa sinut rehkimään entistä kovempaa. Äitisi sen sijaan on tyytyväinen että pysyit kotona.";
            var background = GAME.add.sprite(0, 0, 'youthworkcountrybackground');
        }
        background.alpha = 0;
        
        PLAYER.age = 13;
        displayNameAndAge();

        var box = GAME.add.sprite(GAME.world.centerX*0.3, GAME.world.centerY*0.2, 'box');
        box.alpha = 0;

        var text1 = GAME.add.text(GAME.world.centerX * 0.4, GAME.world.centerY * 0.3, text, STYLE);
        text1.alpha = 0;

        var continueButton = GAME.add.button(GAME.world.centerX, GAME.world.centerY * 1.4, 'button');
        continueButton.anchor.set(0.5);
        continueButton.alpha = 0;
        var t1 = GAME.add.text(continueButton.centerX, continueButton.centerY, "Jatka");
        t1.anchor.set(0.5);
        t1.alpha = 0;
        continueButton.inputEnabled = true;
        continueButton.events.onInputDown.add(continueFromYouthwork2, this);

        //fade in
        tweenElements(background, [box, continueButton, text1, t1]);

    },

    update: function() {
    }
}

function continueFromYouthwork2 () {
    if(PLAYER.location.name === "Jyväskylä") {
        GAME.state.start('death');
    } else {
        GAME.state.start('barn1');
    }
}