var gender_state = {

    preload: function() {
    },

    create: function() {
        showPreviousBackground();
        var background = drawBackground('genderbackground');
        var pictureInfo = drawPictureInfo("");

        var girlButton = createButton(CENTER.x * 0.5, CENTER.y * 0.2, "Valitse", startGameAsGirl, this);
        var boyButton = createButton(CENTER.x * 1.5, CENTER.y * 0.2, "Valitse", startGameAsBoy, this);

        var tweenedElements = girlButton.concat(boyButton);
        var UIelements = tweenedElements.concat(pictureInfo);

        drawToggleUIbutton(UIelements);
        drawToggleSoundButton();

        tweenElements(background, tweenedElements);
    }
};

function startGameAsGirl () {
    PLAYER.gender = "female";
    GAME.state.start('beginning');
}

function startGameAsBoy () {
    PLAYER.gender = "male";
    GAME.state.start('beginning');
}