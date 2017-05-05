var prefix = "Kuvaaja: ";
// Add photo authors here as you add more background photographs.
var authors = {};
authors["menubackground"]              = prefix+"Hugo Simberg (Kansallisgalleria)";
authors["genderbackground"]            = "";
authors["schoolbackground"]            = prefix+"Signe Brander (Helsingin kaupunginmuseo)";
authors["homechorescountrybackground"] = prefix+"Hugo Simberg (Kansallisgalleria)";
authors["homechores1background"]       = prefix+"Väinö Kannisto (Helsingin kaupunginmuseo)";
authors["studies1background"]          = prefix+"Tuntematon (Helsingin kaupunginmuseo)";
authors["studieswomenbackground"]      = prefix+"Pietinen (Museovirasto)";
authors["youthworkcitybackground"]     = prefix+"P. Jänis (SA-kuva-arkisto)";
authors["childworkcountrybackground"]  = prefix+"N. Verronen (Sotamuseon kuva-arkisto)";
authors["youthworkcountrybackground"]  = prefix+"Juhani Ahola (Museovirasto)";
authors["deathbackground"]             = prefix+"Väinö Kannisto (Helsingin kaupunginmuseo)";
authors["citybackground"]              = prefix+"Tuntematon (Keski-Suomen Museo)";
authors["countrybackground"]           = prefix+"Antti Pänkäläinen (Keski-Suomen Museo)";
authors["candyfactorybackground"]      = prefix+"Valokuvaamo Päijänne (Keski-Suomen Museo)";
authors["plywoodfactorybackground"]    = prefix+"Tuntematon (Keski-Suomen Museo)";
authors["riflefactorybackground"]      = prefix+"Tuntematon (Keski-Suomen Museo)";
authors["gunpowderfactorybackground"]  = prefix+"Pietinen (Museovirasto)";
authors["bakerybackground"]            = prefix+"Tuntematon (Helsingin kaupunginmuseo)";
authors["homeassistantbackground"]     = prefix+"Pietinen (Museovirasto)";
authors["barnbackground"]              = prefix+"Väinö Kannisto (Helsingin kaupunginmuseo)";
authors["weddingbackground"]           = prefix+"Väinö Kannisto (Helsingin kaupunginmuseo)";
authors["familybackground"]            = prefix+"Tuntematon (Museovirasto)";
authors["teacherschoolbackground"]     = prefix+"Pietinen (Museovirasto)";
authors["nurseschoolbackground"]       = prefix+"Pietinen (Museovirasto)";
authors["helsinkiunibackground"]       = prefix+"Pietinen (Museovirasto)";
authors["conscriptbackground"]         = prefix+"Tuntematon (Museovirasto)";
authors["warbackground"]               = prefix+"K. Borg (SA-kuva-arkisto)";
authors["warworkbackground"]           = prefix+"Väinö Kannisto (Helsingin kaupunginmuseo)";
authors["lottawarbackground"]          = prefix+"Väinö Kannisto (Helsingin kaupunginmuseo)";
authors["constructionbackground"]      = prefix+"Antti Pänkäläinen (Keski-Suomen Museo)";
authors["shopbackground"]              = prefix+"Tuntematon (Helsingin kaupunginmuseo)";
authors["empty"]                       = "Grafiikka: Pauliina Karjalainen";
authors["articlewinterwar2"]           = "Keskisuomalainen";
authors["articlepeace2"]               = "Keskisuomalainen";
authors["articlecontinuationwar2"]     = "Keskisuomalainen";


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
        GAME.load.image('arrowLeftButton', 'assets/img/arrow-left-button.png');
        //backgrounds
        GAME.load.image('empty', 'assets/img/empty.png');
        GAME.load.image('peace1940_01', 'assets/img/peace1940_01.jpg');
        GAME.load.image('peace1940_02', 'assets/img/peace1940_02.jpg');
        GAME.load.image('peace1944_01', 'assets/img/peace1944_01.jpg');
        GAME.load.image('peace1944_02', 'assets/img/peace1944_02.jpg');
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
        GAME.load.image('gunpowderfactorybackground', 'assets/img/gunpowderfactory.jpg');
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
        GAME.load.image('constructionbackground', 'assets/img/construction.jpg');
        GAME.load.image('shopbackground', 'assets/img/shop.jpg');
        //articles
        GAME.load.image('articlewinterwar', 'assets/img/articlewinterwar.jpg');
        GAME.load.image('articlepeace', 'assets/img/articlepeace.jpg');
        GAME.load.image('articlecontinuationwar', 'assets/img/articlecontinuationwar.jpg');
        GAME.load.image('articlewinterwar2', 'assets/img/articlewinterwar2.png');
        GAME.load.image('articlepeace2', 'assets/img/articlepeace2.png');
        GAME.load.image('articlecontinuationwar2', 'assets/img/articlecontinuationwar2.png');
        //music
        GAME.load.audio('music-Bittersweet', 'assets/music/Bittersweet.mp3');
        /*  Bittersweet Kevin MacLeod (incompetech.com)
            Licensed under Creative Commons: By Attribution 3.0 License
            http://creativecommons.org/licenses/by/3.0/ */
    },

    /** 
     * This function starts the actual game. Here you can specify in which state
     * the game begins; the default state is 'menu', but you can change it
     * to quickly jump to a specific state for testing. See main.js for a 
     * comprehensive list of state names.
     *
     * Note that most states will require the PLAYER to have certain properties
     * in order for them to work properly. Here you can set these properties
     * accordingly. These settings have no effect if the game is started 
     * from the default state, since they are overwritten in the beginning.
     */
    create: function() {
        var startState = 'menu'; // Default start state == 'menu'     
        PLAYER = { 
            // Beginning properties
            gender: 'male',
            age: 0,
            previousAge: 0, 
            name: 'Debug',
            class: 'middle',
            location: {
                name: 'Debugkylä', 
                to: 'Jyväskylään', 
                at: 'Jyväskylässä'
            },

            // Properties during the game
            noschool: false,
            crush: 'DebugCrush',
            spouse: 'DebugSpouse',
            children: ['DebugChild1','DebugChild2'],
            friend: 'DebugFriend',
            causeofdeath: 'DebugCauseOfDeath',
            job: 'plywoodfactory',
            university: true,
            improvement: true,
            movedtocity: false,
            noconscript: true,
            lotta: false,
            nurse: false
        };

        BACKGROUND_MUSIC = GAME.add.audio('music-Bittersweet');
        BACKGROUND_MUSIC.loop = true;
        BACKGROUND_MUSIC.play();
        GAME.state.start(startState);
    },

    addLoadingScreen: function () {
        var loadingText = GAME.add.text(CENTER.x, CENTER.y, "Peli latautuu...", TITLE_STYLE);
        loadingText.anchor.setTo(0.5);
        loadingText.alpha = 0.25;
        GAME.add.tween(loadingText).to({ alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 0, 0, true)
                                   .loop();
    }
};