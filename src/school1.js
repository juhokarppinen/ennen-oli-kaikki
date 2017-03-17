var school1_state = {

    create: function() {
        PLAYER.age = 7;

        var text = "Vuonna 1921 Suomessa säädettiin laki yleisestä " + 
                   "oppivelvollisuudesta, joten aloitat koulutiesi sinä " + 
                   "syksynä, kun täytät seitsemän vuotta. Vuosi on 1924.";

        var background = drawBackground('schoolbackground');
        var pictureInfo = drawPictureInfo("");
        
        var nameText = displayNameAndAge();
        var boxedText = drawBoxedText(text);
        var timeline = drawTimeline(PLAYER.age);
        
        var continueButton = createButton(CENTER.x, CENTER.y * 1.4, 'Jatka', continueFromSchool1, this);

        var tweenedElements = [nameText].concat(boxedText, continueButton);
        var UIelements = tweenedElements.concat(pictureInfo, timeline)
        var toggleUIbutton = drawToggleUIbutton(UIelements);
        tweenElements(background, tweenedElements);
    },

    update: function() {
    }
}

function continueFromSchool1 () {
    GAME.state.start('school2');
}