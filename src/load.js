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
authors["childworkcountrybackground"]  = "N. Verronen";
authors["youthworkcountrybackground"]  = "Juhani Ahola";
authors["deathbackground"]             = "Väinö Kannisto";
authors["citybackground"]              = "Tuntematon (Keski-Suomen Museo)";
authors["countrybackground"]           = "Antti Pänkäläinen (Keski-Suomen Museo)";
authors["apprenticebackground"]        = "Tuntematon";
authors["barnbackground"]              = "Väinö Kannisto";
authors["dancebackground"]             = "Väinö Kannisto";
authors["weddingbackground"]           = "Väinö Kannisto";
authors["familybackground"]            = "Tuntematon";
authors["childbackground"]             = "Pekka Kyytinen";
authors["conscriptbackground"]         = "Tuntematon";
authors["warbackground"]               = "K. Borg";

/*load.js contains a state-object called load_state
 All assets are loaded in load.js so that there is no need to load them later.
 */
var load_state = {
    preload: function() {
        this.addLoadingScreen();
        //common
        GAME.load.image('arrowLeft', 'assets/img/arrow-left.png');
        GAME.load.image('arrowRight', 'assets/img/arrow-right.png');
        GAME.load.image('button', 'assets/img/button.png');
        GAME.load.image('toggleUIbutton', 'assets/img/looking-glass-button.png');
        GAME.load.image('soundOnButton', 'assets/img/sound-on-button.png');
        GAME.load.image('soundOffButton', 'assets/img/sound-off-button.png');
        GAME.load.image('box', 'assets/img/box.png');
        //backgrounds
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
        GAME.load.image('childworkcountrybackground', 'assets/img/childworkcountry.jpg');
        GAME.load.image('youthworkcountrybackground', 'assets/img/youthworkcountry.jpg');
        GAME.load.image('deathbackground', 'assets/img/death.jpg');
        GAME.load.image('citybackground', 'assets/img/jyvaskyla_city.jpg');
        GAME.load.image('countrybackground', 'assets/img/jyvaskyla_country.jpg');
        GAME.load.image('apprenticebackground', 'assets/img/apprentice.jpg');
        GAME.load.image('barnbackground', 'assets/img/barn.jpg');
        GAME.load.image('dancebackground', 'assets/img/dance.jpg');
        GAME.load.image('weddingbackground', 'assets/img/wedding.jpg');
        GAME.load.image('familybackground', 'assets/img/family.jpg');
        GAME.load.image('childbackground', 'assets/img/child.jpg');
        GAME.load.image('conscriptbackground', 'assets/img/conscript.jpg');
        GAME.load.image('warbackground', 'assets/img/war.jpg');
        //articles
        GAME.load.image('articlewinterwar', 'assets/img/articlewinterwar.png');
        //music
        GAME.load.audio('music-Bittersweet', 'assets/music/Bittersweet.mp3');

        /*  This needs to be mentioned in the credits if it remains in the final
            game.

            Bittersweet Kevin MacLeod (incompetech.com)
            Licensed under Creative Commons: By Attribution 3.0 License
            http://creativecommons.org/licenses/by/3.0/ */
    },

    create: function() {
        BACKGROUND_MUSIC = GAME.add.audio('music-Bittersweet');
        BACKGROUND_MUSIC.loop = true;
        BACKGROUND_MUSIC.play();
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