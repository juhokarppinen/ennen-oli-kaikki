var servant3_state = {

    create: function() {
        PLAYER.age = 14;

        var text = "Vaikka olet tottunut kovaan työhön pienestä pitäen, piikana " +
                   "oleminen on raskaampaa kuin olisit koskaan voinut kuvitellakaan. " +
                   "Paljoa et ehdi kovaa kohtaloasi surkutella, sillä iltaisin, kun " + 
                   "olet saanut päivän työt tehtyä, nukahdat samoin tein.";

        var background = drawBackground('youthworkcountrybackground');
        var pictureInfo = drawPictureInfo("");

        var nameText = displayNameAndAge();
        var boxedText = drawBoxedText(text);
        var timeline = drawTimeline(PLAYER.age);

        var continueButton = createButton(CENTER.x, CENTER.y * 1.4, 'Jatka', continueFromServant3, this);

        var tweenedElements = [nameText].concat(boxedText, continueButton);
        var UIelements = tweenedElements.concat(pictureInfo, timeline)
        var toggleUIbutton = drawToggleUIbutton(UIelements);
        tweenElements(background, tweenedElements);
    },

    update: function() {
    }
}

function continueFromServant3 () {
    GAME.state.start('barn1');
}