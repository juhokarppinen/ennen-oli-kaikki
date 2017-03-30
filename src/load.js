// Add photo authors here as you add more background photographs.
var authors = {};
authors["menubackground"]              = "Hugo Simberg";
authors["genderbackground"]            = "";
authors["beginningcitybackground"]     = "Väinö Kannisto";
authors["beginningcountrybackground"]  = "Hugo Simberg";
authors["schoolbackground"]            = "Signe Brander";
authors["homechorescountrybackground"] = "Hugo Simberg";
authors["homechores1background"]       = "Väinö Kannisto";
authors["studies1background"]          = "Tuntematon";
authors["youthworkcitybackground"]     = "P.Jänis";
authors["youthworkcountrybackground"]  = "Juhani Ahola";
authors["deathbackground"]             = "Väinö Kannisto";
authors["citybackground"]              = "Sakari Pälsi";

/*load.js contains a state-object called load_state
 All assets are loaded in load.js so that there is no need to load them later.
 */
var load_state = {
    preload: function() {
        this.addLoadingScreen();

        GAME.load.image('button', 'assets/img/button.png');
        GAME.load.image('toggleUIbutton', 'assets/img/looking-glass-button.png');
        GAME.load.image('box', 'assets/img/box.png');
        GAME.load.image('background', 'assets/img/background.jpg');
        GAME.load.image('menubackground', 'assets/img/menu.jpg');
        GAME.load.image('genderbackground', 'assets/img/gender.jpg');
        GAME.load.image('beginningcitybackground', 'assets/img/beginningcity.jpg');
        GAME.load.image('beginningcountrybackground', 'assets/img/beginningcountry.jpg');
        GAME.load.image('schoolbackground', 'assets/img/school.jpg');
        GAME.load.image('homechorescountrybackground', 'assets/img/homechorescountry.jpg');
        GAME.load.image('homechores1background', 'assets/img/homechores1.jpg');
        GAME.load.image('studies1background', 'assets/img/studies1.jpg');
        GAME.load.image('youthworkcitybackground', 'assets/img/youthworkcity.jpg');
        GAME.load.image('youthworkcountrybackground', 'assets/img/youthworkcountry.jpg');
        GAME.load.image('deathbackground', 'assets/img/death.jpg');
        GAME.load.image('citybackground', 'assets/img/city.jpg');

        GAME.load.audio('music-Bittersweet', 'assets/music/Bittersweet.mp3');

        /*  This needs to be mentioned in the credits if it remains in the final
            game.

            Bittersweet Kevin MacLeod (incompetech.com)
            Licensed under Creative Commons: By Attribution 3.0 License
            http://creativecommons.org/licenses/by/3.0/ */
    },

    create: function() {
        GAME.add.audio('music-Bittersweet').play();
        GAME.state.start('menu');
    },

    // Could do better than this... :)
    addLoadingScreen: function () {
        var loadingText = GAME.add.text(CENTER.x, CENTER.y, "Peli latautuu...", TITLE_STYLE);
        loadingText.anchor.setTo(0.5);
        loadingText.alpha = 0.25;
        GAME.add.tween(loadingText).to({ alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 0, 0, true)
                                   .loop();
    }
};