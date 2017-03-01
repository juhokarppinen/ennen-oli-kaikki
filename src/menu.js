var menu_state = {
    
    preload: function() {
    },
    
    create: function() {
        GAME.add.sprite(0, 0, 'menubackground');
        var style = {font: "25px verdana", fill: "#FFFFFF"};
        var text1 = GAME.add.text(GAME.world.centerX * 0.825, GAME.world.centerY * 0.2, "Ennen oli kaikki...", style);

        var startButton = GAME.add.button(GAME.world.centerX, GAME.world.centerY * 0.6, 'button');
        startButton.anchor.set(0.5);
        var t1 = GAME.add.text(startButton.centerX, startButton.centerY, 'Aloita');
        t1.anchor.set(0.5);
        startButton.inputEnabled = true;
        startButton.events.onInputDown.add(startGAME, this);

},

    update: function() {
    }
}

function startGAME () {
    GAME.state.start('beginning');

}