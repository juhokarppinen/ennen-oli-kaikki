var citywork1_state = {

    create: function() {
        PLAYER.age = 16;

        var text = "Kävipä tuuri! Pääsit kauppa-apulaiseksi Osuusliike Mäki-Mattiin. Työhösi kuuluu kaikenlaista, mutta onneksi olet nopea oppimaan.";
        var background = drawBackground('citybackground');
        var pictureInfo = drawPictureInfo("");
            
        var nameText = displayNameAndAge();
        var boxedText = drawBoxedText(text);
        var timeline = drawTimeline(PLAYER.age);
        
        var continueButton = createButton(CENTER.x, CENTER.y * 1.4, 'Jatka', continueFromCitywork, this);

        var tweenedElements = [nameText].concat(boxedText, continueButton);
        var UIelements = tweenedElements.concat(pictureInfo, timeline);
        var toggleUIbutton = drawToggleUIbutton(UIelements);
        tweenElements(background, tweenedElements);
    },

    update: function() {
    }
}

function continueFromCitywork () {
    GAME.state.start('dance1');
}