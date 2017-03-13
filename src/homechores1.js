var homechores1_state = {

    create: function() {
        var text = "";
        if(PLAYER.class === "poor") {
            var background = GAME.add.sprite(0, 0, 'homechorescountrybackground');
            text = "Olet hyvä apu kotona, mutta perheeseen syntyy uusi vauva. Perheesi rahatilanne on niin tiukka, että joudut pian etsimään työtä muualta.";
        } else if(PLAYER.class === "middle") {
            var background = GAME.add.sprite(0, 0, 'homechores1background');
            text = "Opit kotona kaiken kotiaskareista. Äitisi opettaa sinut laittamaan ruokaa ja ompelemaan vaatteita.";
        } else if(PLAYER.class === "rich") {
            var background = GAME.add.sprite(0, 0, 'homechores1background');
            text = "Äitisi opettaa sinut laittamaan ruokaa ja ompelemaan vaatteita. Lisäksi isäsi harjoittaa lukutaitoasi lukemalla sanomalehteä ja kirjoja kanssasi.";
        }
        background.alpha = 0;
        
        PLAYER.age = 12;
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
        continueButton.events.onInputDown.add(continueFromHomechores, this);

        //fade in
        tweenElements(background, [box, continueButton, text1, t1]);

    },

    update: function() {
    }
}

function continueFromHomechores () {
    if(PLAYER.location.name !== "Jyväskylä") {
        if(PLAYER.class === "poor") {
            GAME.state.start('servant1');
        } else if(PLAYER.class === "middle") {
            GAME.state.start('homechores2');
        } else {
            GAME.state.start('death');
        }
    } else {
        if(PLAYER.class === "poor") {
            GAME.state.start('citywork1');
        } else {
            GAME.state.start('citywork2');
        }
    }
    
}
