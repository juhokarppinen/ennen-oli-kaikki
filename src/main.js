var GAME = new Phaser.Game(1280, 720, Phaser.AUTO, '', { preload: preload, create: create, update: update });
var player = {};

/*
 * Phaser many-state tutorials for possible reference:
 * http://www.emanueleferonato.com/2014/08/28/phaser-tutorial-understanding-phaser-states/
 * http://perplexingtech.weebly.com/GAME-dev-blog/using-states-in-phaserjs-javascript-GAME-developement
 */


function preload() {
    // Define all the states
    GAME.state.add('load', load_state);
    GAME.state.add('menu', menu_state);
    GAME.state.add('beginning', beginning_state);
    GAME.state.add('school', school_state);
    GAME.state.add('death', death_state);
    // Start with the 'load' state
    GAME.state.start('load');
}

function create() {
}

function update() {
}
