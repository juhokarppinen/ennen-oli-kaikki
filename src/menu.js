var menu_state = {

    preload: function() {
    },

    create: function() {
        var background = drawBackground('menubackground');
        var titleText = drawTitle(CENTER.x, CENTER.y * 0.25, "Ennen oli kaikki...");
        var startButton = createButton(CENTER.x, CENTER.y * 0.6, 'Aloita', pickGender, this);
        var pictureInfo = drawPictureInfo("Hugo Simberg: Poika");
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
