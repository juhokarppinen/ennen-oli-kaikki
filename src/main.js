var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

/*
 * Phaser many-state tutorials for possible reference:
 * http://www.emanueleferonato.com/2014/08/28/phaser-tutorial-understanding-phaser-states/
 * http://perplexingtech.weebly.com/game-dev-blog/using-states-in-phaserjs-javascript-game-developement
 */


function preload() {
    // Define all the states
    game.state.add('load', load_state);  
    game.state.add('menu', menu_state);  
    game.state.add('beginning', beginning_state);
    // Start with the 'load' state
    game.state.start('load');
}

function create() {
}

function update() {
}