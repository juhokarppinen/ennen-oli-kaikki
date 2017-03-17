var menu_state = {

    preload: function() {
    },

    create: function() {
        var background = GAME.add.sprite(0, 0, 'menubackground');
        background.alpha = 0;
        var titleStyle = {font: "25px verdana", fill: "#FFFFFF"};
        var titleText = GAME.add.text(GAME.world.centerX * 0.825, GAME.world.centerY * 0.2, "Ennen oli kaikki...", titleStyle);
        titleText.alpha = 0;
        var startButton = createButton(GAME.world.centerX, GAME.world.centerY * 0.6, 'Aloita', {}, pickGender, this);
        var pictureInfo = drawPictureInfo("Hugo Simberg: Poika", {fill: "#FFFFFF"});
        var UIelements = [titleText, startButton.button, startButton.text, pictureInfo.text, pictureInfo.background];
        var toggleUIbutton = drawToggleUIbutton(UIelements);
        tweenElements(background, [titleText, startButton.button, startButton.text]);
    },

    update: function() {
    }
}

function pickGender () {
    GAME.state.start('gender');
}
