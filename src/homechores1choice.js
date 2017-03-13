var homechores1choice_state = {

    create: function() {
        var text = "Vaihtoehtoja näyttäisi olevan kaksi: hankkiudutko piiaksi naapuritilalle vai lähdetkö kaupunkiin töihin?";
        var background = GAME.add.sprite(0, 0, 'youthworkcountrybackground');
        background.alpha = 0;
        
        PLAYER.age = 13;
        displayNameAndAge();

        var box = GAME.add.sprite(GAME.world.centerX*0.3, GAME.world.centerY*0.2, 'box');
        box.alpha = 0;

        var text1 = GAME.add.text(GAME.world.centerX * 0.4, GAME.world.centerY * 0.3, text, STYLE);
        text1.alpha = 0;

        var cityButton = GAME.add.button(GAME.world.centerX * 0.5, GAME.world.centerY * 1.4, 'button');
        cityButton.anchor.set(0.5);
        cityButton.alpha = 0;
        var t1 = GAME.add.text(cityButton.centerX, cityButton.centerY, "Kaupunkiin");
        t1.anchor.set(0.5);
        t1.alpha = 0;
        cityButton.inputEnabled = true;
        cityButton.events.onInputDown.add(continueFromServant1City, this);
        var countryButton = GAME.add.button(GAME.world.centerX * 1.5, GAME.world.centerY * 1.4, 'button');
        countryButton.anchor.set(0.5);
        countryButton.alpha = 0;
        var t2 = GAME.add.text(countryButton.centerX, countryButton.centerY, "Naapuritilalle");
        t2.anchor.set(0.5);
        t2.alpha = 0;
        countryButton.inputEnabled = true;
        countryButton.events.onInputDown.add(continueFromServant1Country, this);

        //fade in
        tweenElements(background, [box, cityButton, countryButton, text1, t1, t2]);

    },

    update: function() {
    }
}

function continueFromServant1City () {
    GAME.state.start('citywork1');
}

function continueFromServant1Country () {
    GAME.state.start('servant3');
}