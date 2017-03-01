var death_state = {

    preload: function() {
    },

    create: function() {
        var background = GAME.add.sprite(0, 0, 'deathbackground');
        background.alpha = 0;

        var box = GAME.add.sprite(GAME.world.centerX*0.3, GAME.world.centerY*0.2, 'box');
        box.alpha = 0;

        var text1 = GAME.add.text(GAME.world.centerX * 0.4, GAME.world.centerY * 0.3, "Kuolit...", STYLE);
        text1.alpha = 0;

        var startButton = GAME.add.button(GAME.world.centerX, GAME.world.centerY * 1.4, 'button');
        startButton.anchor.set(0.5);
        var t1 = GAME.add.text(startButton.centerX, startButton.centerY, 'Pelaa uudestaan');
        t1.anchor.set(0.5);
        t1.alpha = 0;

        startButton.inputEnabled = true;
        startButton.events.onInputDown.add(startGAME, this);

        startButton.alpha = 0;

        tweenElements(background, [box, startButton, text1, t1]);
},

    update: function() {
    }
}

function startGAME () {
    GAME.state.start('beginning');

}
