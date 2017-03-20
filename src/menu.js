var menu_state = {

    preload: function() {
    },

    create: function() {
        var background = drawBackground('menubackground');
        var pictureInfo = drawPictureInfo("Hugo Simberg: Poika");
        
        var titleText = drawTitle(CENTER.x, CENTER.y * 0.5, "Ennen oli kaikki...");
        
        var startButton = createButton(CENTER_BUTTON.x, CENTER_BUTTON.y, 'Aloita', pickGender, this);
        
        var tweenedElements = [titleText].concat(startButton);
        var UIelements = tweenedElements.concat(pictureInfo);
        var toggleUIbutton = drawToggleUIbutton(UIelements);
        tweenElements(background, tweenedElements);
    },

    update: function() {
    }
}

function pickGender () {
    GAME.state.start('gender');
}
