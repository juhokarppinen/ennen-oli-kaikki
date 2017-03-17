var servant2_state = {

    create: function() {
        PLAYER.age = 17;

        var text = "Olet tyytyväinen valintaasi. Elämä tuntuu hymyilevän ja saat lähetettyä kotiinkin muutaman lantin.";
        
        var background = drawBackground('youthworkcountrybackground');
        var pictureInfo = drawPictureInfo("");
        
        var nameText = displayNameAndAge();
        var boxedText = drawBoxedText(text);
        var timeline = drawTimeline(PLAYER.age);
        
        var continueButton = createButton(CENTER.x, CENTER.y * 1.4, 'Jatka', continueFromServant2, this);

        var tweenedElements = [nameText].concat(boxedText, continueButton);
        var UIelements = tweenedElements.concat(pictureInfo, timeline)
        var toggleUIbutton = drawToggleUIbutton(UIelements);
        tweenElements(background, tweenedElements);
    },

    update: function() {
    }
}

function continueFromServant2 () {
    GAME.state.start('barn1');
}