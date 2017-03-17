var school0_state = {

    create: function() {
        PLAYER.age = 7;

        var text = "Vuonna 1921 Suomessa säädettiin laki yleisestä "
                 + "oppivelvollisuudesta, mutta osa maalaiskylien lapsista ei päässyt "
                 + "aloittamaan kansakoulua. Jäit kotiin auttamaan vanhempiasi töissä. " 
                 + "Vuosi on 1924.";

        var background = drawBackground('beginningcountrybackground');
        var pictureInfo = drawPictureInfo("");
        
        var nameText = displayNameAndAge();
        var boxedText = drawBoxedText(text);
        var timeline = drawTimeline(PLAYER.age);
        
        var continueButton = createButton(CENTER.x, CENTER.y * 1.4, 'Jatka', continueFromSchool0, this);

        var tweenedElements = [nameText].concat(boxedText, continueButton);
        var UIelements = tweenedElements.concat(pictureInfo, timeline)
        var toggleUIbutton = drawToggleUIbutton(UIelements);
        tweenElements(background, tweenedElements);
    },

    update: function() {
    }
}

function continueFromSchool0 () {
    if (PLAYER.gender === "male")
        GAME.state.start('youthwork1');
    else
        GAME.state.start('homechores1');
}