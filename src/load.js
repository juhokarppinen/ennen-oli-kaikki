/*load.js contains a state-object called load_state
 All assets are loaded in load.js so that there is no need to load them later.
 */
var load_state = {
    preload: function() {
        GAME.load.image('button', 'assets/img/buttonsepia.png');
        GAME.load.image('box', 'assets/img/box.png');
        GAME.load.image('background', 'assets/img/background.jpg');
        GAME.load.image('menubackground', 'assets/img/menu.jpg');
        GAME.load.image('genderbackground', 'assets/img/gender.jpg');
        GAME.load.image('beginningcitybackground', 'assets/img/beginningcity.jpg');
        GAME.load.image('beginningcountrybackground', 'assets/img/beginningcountry.jpg');
        GAME.load.image('schoolbackground', 'assets/img/school.jpg');
        GAME.load.image('deathbackground', 'assets/img/death.jpg');
    },
    create: function() {
        GAME.state.start('menu');
    }
};