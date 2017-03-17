var studies2_state = {

    create: function() {
        PLAYER.age = 16;

        var text = "Onneksi olkoon, tuore ylioppilas! Jatkatko opiskelemaan " +
                   "Helsingin yliopistoon vai otatko ohjat isäsi kaupassa?";
        
        var background = drawBackground('studies1background');
        var pictureInfo = drawPictureInfo("");
        
        var nameText = displayNameAndAge();
        var boxedText = drawBoxedText(text);
        var timeline = drawTimeline(PLAYER.age);
        
        var universityButton = createButton(CENTER.x * 0.5, CENTER.y * 1.4, 'Yliopistoon', continueFromStudies2University);
        var workButton = createButton(CENTER.x * 1.5, CENTER.y * 1.4, 'Töihin', continueFromStudies2Work);

        var tweenedElements = [nameText].concat(boxedText, universityButton, workButton);
        var UIelements = tweenedElements.concat(pictureInfo, timeline)
        var toggleUIbutton = drawToggleUIbutton(UIelements);
        tweenElements(background, tweenedElements);
    },

    update: function() {
    }
}

function continueFromStudies2University () {
    GAME.state.start('death');
}

function continueFromStudies2Work () {
    GAME.state.start('death');
}
