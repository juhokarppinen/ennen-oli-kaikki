var death_state = {
    
    preload: function() {
    },
    
    create: function() {
        var background = game.add.sprite(0, 0, 'deathbackground');
        background.alpha = 0;
        
        var style = {font: "32px verdana", fill: "#1e1711", wordWrap: true, wordWrapWidth: 700};
        
        var box = game.add.sprite(game.world.centerX*0.3, game.world.centerY*0.2, 'box');
        box.alpha = 0;
        
        var text1 = game.add.text(game.world.centerX * 0.4, game.world.centerY * 0.3, "Kuolit...", style);
        text1.alpha = 0;

        var startButton = game.add.button(game.world.centerX, game.world.centerY * 1.4, 'button');
        startButton.anchor.set(0.5);
        var t1 = game.add.text(startButton.centerX, startButton.centerY, 'Pelaa uudestaan');
        t1.anchor.set(0.5);
        t1.alpha = 0;
        
        startButton.inputEnabled = true;
        startButton.events.onInputDown.add(startGame, this);
        
        startButton.alpha = 0;
        
        tweenElements(background, [box, startButton, text1, t1]);
},

    update: function() {
    }
}

function startGame () {
    game.state.start('beginning');

}