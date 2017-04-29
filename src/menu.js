var menu_state = {
    create: function () {
        var bg = showPreviousBackground();
        bg.alpha = 0.15;
        var background = drawBackground('menubackground');
        var pictureInfo = drawPictureInfo(authors['menubackground']);
        var startButton = createButton(CENTER.x, CENTER.y, 'Aloita', this.pickGender, this);
        var helpButton = createButton(CENTER.x, CENTER.y * 1.3, 'Lue ohjeet', this.readHelp, this);
        var creditsButton = createButton(CENTER.x, CENTER.y * 1.6, 'Tekijätiedot', this.readCredits, this);
        var titleText = drawTitle(CENTER.x, CENTER.y * 0.4, "Ennen oli kaikki...");
        var tweenedElements = [titleText].concat(startButton, helpButton, creditsButton);
        var UIelements = tweenedElements.concat(pictureInfo);
        drawToggleUIbutton(UIelements);
        drawToggleSoundButton();
        tweenElements(background, tweenedElements);
    },

    pickGender: function () {
        // this.debugJump();
        GAME.state.start('gender');
    },

    readHelp: function () {
        GAME.state.start('help');
    },

    readCredits: function () {
        GAME.state.start('credits');
    },

    /** 
     * Jump straight to the state to be tested. Populate PLAYER with desired 
     * testing properties. 
     */
    debugJump: function () {
        var jumpToState = '';

        PLAYER = { 
            // Beginning properties
            gender: 'male',
            age: 0, 
            name: 'Debug',
            class: 'middle',
            location: {
                name: 'Jyväskylä', 
                to: 'Jyväskylään', 
                at: 'Jyväskylässä'
            },

            // Properties during the game
            noschool: false,
            crush: 'DebugCrush',
            spouse: 'DebugSpouse',
            children: ['DebugChild1','DebugChild2'],
            friend: 'DebugFriend',
            causeOfDeath: 'DebugCauseOfDeath',
            university: true,
            improvement: true,
            movedtocity: true,
            noconscript: true,
            lotta: false,
            nurse: false
        };

        GAME.state.start(jumpToState);
    }
};


