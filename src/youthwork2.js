var youthwork2_state = {

    create: function() {
        PLAYER.age = 13;

        var text;
        var background;
        var pictureInfo;

        if(PLAYER.location.name === "Jyväskylä") {
            text = "Joku muu saa oppipojan paikan, ja joudut etsimään uutta työtä.";
            background = drawBackground('youthworkcitybackground');
            pictureInfo = drawPictureInfo("");
        } else {
            text = "Isäsi ei ole kovin tyytyväinen valintaasi, ja laittaa sinut " +
                   "rehkimään entistä kovempaa. Äitisi sen sijaan on tyytyväinen että pysyit kotona.";
            background = drawBackground('youthworkcountrybackground');
            pictureInfo = drawPictureInfo("");
        }
        
        var nameText = displayNameAndAge();
        var boxedText = drawBoxedText(text);
        var timeline = drawTimeline(PLAYER.age);
        
        var continueButton = createButton(CENTER.x, CENTER.y * 1.4, 'Jatka', continueFromYouthwork2, this);

        var tweenedElements = [nameText].concat(boxedText, continueButton);
        var UIelements = tweenedElements.concat(pictureInfo, timeline)
        var toggleUIbutton = drawToggleUIbutton(UIelements);
        tweenElements(background, tweenedElements);
    },

    update: function() {
    }
}

function continueFromYouthwork2 () {
    if(PLAYER.location.name === "Jyväskylä") {
        GAME.state.start('death');
    } else {
        GAME.state.start('barn1');
    }
}