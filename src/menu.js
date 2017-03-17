var menu_state = {

    preload: function() {
    },

    create: function() {
        var background = drawBackground('menubackground');
        var pictureInfo = drawPictureInfo("Hugo Simberg: Poika");
        
        var titleText = drawTitle(CENTER.x, CENTER.y * 0.25, "Ennen oli kaikki...");
        
        var startButton = createButton(CENTER.x, CENTER.y * 0.6, 'Aloita', pickGender, this);
        
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
