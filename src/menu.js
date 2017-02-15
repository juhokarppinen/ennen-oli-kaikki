var menu_state = {
    
    preload: function() {
    },
    
    create: function() {
        game.add.sprite(0, 0, 'background');
        var style = {font: "25px verdana", fill: "#FFFFFF"};
        var text1 = game.add.text(game.world.centerX * 0.75, game.world.centerY * 0.5, "Ennen oli kaikki...", style);

        var startButton = game.add.button(game.world.centerX, game.world.centerY, 'button');
        startButton.anchor.set(0.5);
        var t1 = game.add.text(startButton.centerX, startButton.centerY, 'Aloita');
        t1.anchor.set(0.5);
        startButton.inputEnabled = true;
        startButton.events.onInputDown.add(startGame, this);

},

    update: function() {
    }
}

function startGame () {
    game.state.start('beginning');

}