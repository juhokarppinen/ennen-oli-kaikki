var homechores1choice_state = {

    create: function() {
        PLAYER.age = 13;

        var text = "Vaihtoehtoja näyttäisi olevan kaksi: hankkiudutko piiaksi naapuritilalle vai lähdetkö kaupunkiin töihin?";
        
        var background = drawBackground('youthworkcountrybackground');
        var pictureInfo = drawPictureInfo("");
        
        var nameText = displayNameAndAge();
        var boxedText = drawBoxedText(text);
        var timeline = drawTimeline(PLAYER.age);
        
        var yesButton = createButton(CENTER.x * 0.5, CENTER.y * 1.4, "Kaupunkiin", continueFromServant1City, this);
        var noButton = createButton(CENTER.x * 1.5, CENTER.y * 1.4, "Naapuritilalle", continueFromServant1Country, this);

        var tweenedElements = [nameText].concat(boxedText, yesButton, noButton);
        var UIelements = tweenedElements.concat(pictureInfo, timeline);
        var toggleUIbutton = drawToggleUIbutton(UIelements);
        tweenElements(background, tweenedElements);
    },

    update: function() {
    }
}

function continueFromServant1City () {
    GAME.state.start('citywork1');
}

function continueFromServant1Country () {
    GAME.state.start('servant3');
}