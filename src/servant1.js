var servant1_state = {

    create: function() {
        PLAYER.age = 16;

        var text = "Koska et totellut isääsi, hän heittää sinut ulos talostaan. Haaveet opinnoista kaatuvat "
        + "vapaaoppilaan paikasta huolimatta, sillä joudut henkesi pitimiksi etsimään töitä. Päädyt rengiksi naapuripitäjään.";
        
        var background = drawBackground('youthworkcountrybackground');        
        var pictureInfo = drawPictureInfo("");

        var nameText = displayNameAndAge();
        var boxedText = drawBoxedText(text);
        var timeline = drawTimeline(PLAYER.age);
        
        var continueButton = createButton(CENTER.x, CENTER.y * 1.4, 'Jatka', continueFromServant1, this);

        var tweenedElements = [nameText].concat(boxedText, continueButton);
        var UIelements = tweenedElements.concat(pictureInfo, timeline)
        var toggleUIbutton = drawToggleUIbutton(UIelements);
        tweenElements(background, tweenedElements);
    },

    update: function() {
    }
}

function continueFromServant1 () {
    GAME.state.start('barn1');
}