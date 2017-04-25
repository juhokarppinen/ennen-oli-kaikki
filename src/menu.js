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
        GAME.state.start('gender');
    },

    readHelp: function () {
        GAME.state.start('info');
    },

    readCredits: function () {

    }
};


