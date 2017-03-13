var GAME = new Phaser.Game(1280, 720, Phaser.AUTO, '', { preload: preload, create: create, update: update });
var PLAYER = {};
var STYLE = {font: "32px verdana", fill: "#1e1711", wordWrap: true, wordWrapWidth: 750};

/*
 * Phaser many-state tutorials for possible reference:
 * http://www.emanueleferonato.com/2014/08/28/phaser-tutorial-understanding-phaser-states/
 * http://perplexingtech.weebly.com/GAME-dev-blog/using-states-in-phaserjs-javascript-GAME-developement
 */


function preload() {
    // Define all the states
    GAME.state.add('load', load_state);
    GAME.state.add('menu', menu_state);
    GAME.state.add('gender', gender_state);
    GAME.state.add('beginning', beginning_state);
    GAME.state.add('school0', school0_state);
    GAME.state.add('school1', school1_state);
    GAME.state.add('school2', school2_state);
    GAME.state.add('homechores1', homechores1_state);
    GAME.state.add('homechores1choice', homechores1choice_state);
    GAME.state.add('homechores2', homechores2_state);
    GAME.state.add('youthwork1', youthwork1_state);
    GAME.state.add('youthwork2', youthwork2_state);
    GAME.state.add('citywork1', citywork1_state);
    GAME.state.add('citywork2', citywork2_state);
    GAME.state.add('studies1', studies1_state);
    GAME.state.add('studies2', studies2_state);
    GAME.state.add('servant1', servant1_state);
    GAME.state.add('servant2', servant2_state);
    GAME.state.add('servant3', servant3_state);
    GAME.state.add('barn1', barn1_state);
    GAME.state.add('barn2', barn2_state);
    GAME.state.add('dance1', dance1_state);
    GAME.state.add('apprentice', apprentice_state);
    GAME.state.add('death', death_state);
    // Start with the 'load' state
    GAME.state.start('load');
}

function create() {
}

function update() {
}
