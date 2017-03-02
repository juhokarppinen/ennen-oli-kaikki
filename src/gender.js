var gender_state = {

    preload: function() {
    },

    create: function() {
        var background = GAME.add.sprite(0, 0, 'genderbackground');
        background.alpha = 0;

        var girlButton = GAME.add.button(GAME.world.centerX*0.5, GAME.world.centerY * 0.2, 'button');
        girlButton.anchor.set(0.5);
        var t1 = GAME.add.text(girlButton.centerX, girlButton.centerY, 'Tyttö');
        t1.anchor.set(0.5);
        t1.alpha = 0;
        girlButton.inputEnabled = true;
        girlButton.events.onInputDown.add(startGameAsGirl, this);
        girlButton.alpha = 0;
        
        var boyButton = GAME.add.button(GAME.world.centerX*1.5, GAME.world.centerY * 0.2, 'button');
        boyButton.anchor.set(0.5);
        var t2 = GAME.add.text(boyButton.centerX, boyButton.centerY, 'Poika');
        t2.anchor.set(0.5);
        t2.alpha = 0;
        boyButton.inputEnabled = true;
        boyButton.events.onInputDown.add(startGameAsBoy, this);
        boyButton.alpha = 0;

        tweenElements(background, [girlButton, boyButton, t1, t2]);
},

    update: function() {
    }
}

function startGameAsGirl () {
    PLAYER.gender = "female";
    GAME.state.start('beginning');
}

function startGameAsBoy () {
    PLAYER.gender = "male";
    GAME.state.start('beginning');
}