var apprentice_state = {

    create: function() {
        PLAYER.age = 16;

        var text;
        var background;
        var pictureInfo = drawPictureInfo("");

        if(PLAYER.class === "rich") {
            background = drawBackground('youthworkcitybackground');
            text = "Apteekkarin apupoikana toimiminen on kiinnostavaa. Koulutustaustasi vuoksi olet erittäin pätevä työssäsi.";
        } else {
            background = drawBackground('youthworkcitybackground');
            text = "Kätevyytesi huomataan. Pääset eräälle verstaalle oppipojaksi. Kuulet kehuja, että muutaman vuoden päästä sinulla voisi hyvinkin olla oma verstas.";
        }
        
        var nameText = displayNameAndAge();
        var boxedText = drawBoxedText(text);
        var timeline = drawTimeline(PLAYER.age);
        
        var continueButton = createButton(CENTER.x, CENTER.y * 1.4, 'Jatka', continueFromYouthwork1, this);
        
        var tweenedElements = [nameText].concat(boxedText, continueButton);
        var UIelements = tweenedElements.concat(pictureInfo, timeline);
        var toggleUIbutton = drawToggleUIbutton(UIelements);
        tweenElements(background, tweenedElements);
    },

    update: function() {
    }
}

function continueFromYouthwork1 () {
    //todo: add different branches
    if(PLAYER.location.name !== "Jyväskylä" && PLAYER.class === "poor") {
        GAME.state.start('servant1');
    } else {
        GAME.state.start('death');
    }
}
