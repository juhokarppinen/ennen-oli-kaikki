var menu_state = {
    create: function () {
        var bg = showPreviousBackground();
        bg.alpha = 0.15;
        var background = drawBackground('menubackground');
        var pictureInfo = drawPictureInfo(authors['menubackground']);
        var startButton = createButton(CENTER_BUTTON.x, CENTER_BUTTON.y, 'Aloita', this.pickGender, this);
        var titleText = drawTitle(CENTER.x, CENTER.y * 0.4, "Ennen oli kaikki...");
        var tweenedElements = [titleText].concat(startButton);
        var UIelements = tweenedElements.concat(pictureInfo);
        drawToggleUIbutton(UIelements);
        drawToggleSoundButton();
        tweenElements(background, tweenedElements);
    },

    pickGender: function () {
        GAME.state.start('gender');
    }
};


