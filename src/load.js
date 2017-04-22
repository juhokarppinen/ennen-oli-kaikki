// Add photo authors here as you add more background photographs.
var authors = {};
authors["menubackground"]              = "Hugo Simberg";
authors["genderbackground"]            = "";
authors["schoolbackground"]            = "Signe Brander";
authors["homechorescountrybackground"] = "Hugo Simberg";
authors["homechores1background"]       = "Väinö Kannisto";
authors["studies1background"]          = "Tuntematon";
authors["studieswomenbackground"]      = "Pietinen";
authors["youthworkcitybackground"]     = "P. Jänis";
authors["childworkcountrybackground"]  = "N. Verronen";
authors["youthworkcountrybackground"]  = "Juhani Ahola";
authors["deathbackground"]             = "Väinö Kannisto";
authors["citybackground"]              = "Tuntematon (Keski-Suomen Museo)";
authors["countrybackground"]           = "Antti Pänkäläinen (Keski-Suomen Museo)";
authors["candyfactorybackground"]      = "Valokuvaamo Päijänne (Keski-Suomen Museo)";
authors["plywoodfactorybackground"]    = "Keski-Suomen Museo";
authors["riflefactorybackground"]      = "Keski-Suomen Museo";
authors["bakerybackground"]            = "Tuntematon";
authors["homeassistantbackground"]     = "Pietinen";
authors["barnbackground"]              = "Väinö Kannisto";
authors["weddingbackground"]           = "Väinö Kannisto";
authors["familybackground"]            = "Tuntematon";
authors["teacherschoolbackground"]     = "Pietinen";
authors["nurseschoolbackground"]       = "Pietinen";
authors["helsinkiunibackground"]       = "Pietinen";
authors["conscriptbackground"]         = "Tuntematon";
authors["warbackground"]               = "K. Borg";
authors["warworkbackground"]           = "Väinö Kannisto";
authors["lottawarbackground"]          = "Väinö Kannisto";

/*load.js contains a state-object called load_state
 All assets are loaded in load.js so that there is no need to load them later.
 */
var load_state = {
    preload: function() {
        this.addLoadingScreen();
        //common
        GAME.load.image('infoButton', 'assets/img/info.png');
        GAME.load.image('button', 'assets/img/button.png');
        GAME.load.image('toggleUIbutton', 'assets/img/looking-glass-button.png');
        GAME.load.image('soundOnButton', 'assets/img/sound-on-button.png');
        GAME.load.image('soundOffButton', 'assets/img/sound-off-button.png');
        GAME.load.image('box', 'assets/img/box.png');
        //backgrounds
        GAME.load.image('background', 'assets/img/background.jpg');
        GAME.load.image('menubackground', 'assets/img/menu.jpg');
        GAME.load.image('genderbackground', 'assets/img/gender.jpg');
        GAME.load.image('schoolbackground', 'assets/img/school.jpg');
        GAME.load.image('homechorescountrybackground', 'assets/img/homechorescountry.jpg');
        GAME.load.image('homechores1background', 'assets/img/homechores1.jpg');
        GAME.load.image('studies1background', 'assets/img/studies1.jpg');
        GAME.load.image('studieswomenbackground', 'assets/img/studieswomen.jpg');
        GAME.load.image('youthworkcitybackground', 'assets/img/youthworkcity.jpg');
        GAME.load.image('childworkcountrybackground', 'assets/img/childworkcountry.jpg');
        GAME.load.image('youthworkcountrybackground', 'assets/img/youthworkcountry.jpg');
        GAME.load.image('deathbackground', 'assets/img/death.jpg');
        GAME.load.image('citybackground', 'assets/img/jyvaskyla_city.jpg');
        GAME.load.image('countrybackground', 'assets/img/jyvaskyla_country.jpg');
        GAME.load.image('candyfactorybackground', 'assets/img/candyfactory.jpg');
        GAME.load.image('plywoodfactorybackground', 'assets/img/plywoodfactory.jpg');
        GAME.load.image('riflefactorybackground', 'assets/img/riflefactory.jpg');
        GAME.load.image('bakerybackground', 'assets/img/bakery.jpg');
        GAME.load.image('homeassistantbackground', 'assets/img/homeassistant.jpg');
        GAME.load.image('barnbackground', 'assets/img/barn.jpg');
        GAME.load.image('weddingbackground', 'assets/img/wedding.jpg');
        GAME.load.image('familybackground', 'assets/img/family.jpg');
        GAME.load.image('teacherschoolbackground', 'assets/img/teacherschool.jpg');
        GAME.load.image('nurseschoolbackground', 'assets/img/nurseschool.jpg');
        GAME.load.image('helsinkiunibackground', 'assets/img/helsinkiuniversity.jpg');
        GAME.load.image('conscriptbackground', 'assets/img/conscript.jpg');
        GAME.load.image('warbackground', 'assets/img/war.jpg');
        GAME.load.image('warworkbackground', 'assets/img/warwork.jpg');
        GAME.load.image('lottawarbackground', 'assets/img/lottawar.jpg');
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
        GAME.state.start('info');
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