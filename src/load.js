/*load.js contains a state-object called load_state
 All assets are loaded in load.js so that there is no need to load them later.
 */
var load_state = {
    preload: function() {
        game.load.image('button', 'assets/img/button.png');
        game.load.image('background', 'assets/img/background.jpg');
    },
    create: function() {
        game.state.start('menu');
    }
};