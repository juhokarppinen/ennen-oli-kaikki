var youthwork1_state = {

    create: function() {
        PLAYER.age = 12;
        
        var text;
        var background;
        var pictureInfo;

        if(PLAYER.location.name === "Jyväskylä") {
            background = drawBackground('youthworkcitybackground');
            pictureInfo = drawPictureInfo("");
            text = "Saat töitä apurina verstaalla. Päivät ovat pitkiä mutta olet " +
                   "nopea oppimaan. Pian sinulle tarjotaan oppipojan paikkaa; " +
                   "otatko sen vastaan?";
        } else if(PLAYER.location.name !== "Jyväskylä" && (PLAYER.class === "poor" || PLAYER.noschool === true)) {
            background = drawBackground('youthworkcountrybackground');
            pictureInfo = drawPictureInfo("");
            text = "Perheesi rahatilanne on niin tiukka, että joudut etsimään työtä " +
                   "muualta. Sinulle tarjotaan rengin paikkaa naapuripitäjästä. " +
                   "Otatko sen vastaan?";
        } else {
            background = drawBackground('youthworkcountrybackground');
            pictureInfo = drawPictureInfo("");
            text = "Vaikka perheesi tyrmäsi koulunkäynnin, vapaapaikka oppikoulusta " +
                   "on vielä hetken avoinna. Otatko sen salaa vastaan?";
        }
        
        var nameText = displayNameAndAge();
        var boxedText = drawBoxedText(text);
        var timeline = drawTimeline(PLAYER.age);
        
        var yesButton = createButton(CENTER.x * 0.5, CENTER.y * 1.4, "Kyllä", continueFromYouthwork1Y, this);
        var noButton = createButton(CENTER.x * 1.5, CENTER.y * 1.4, "Ei", continueFromYouthwork1N, this);

        var tweenedElements = [nameText].concat(boxedText, yesButton, noButton);
        var UIelements = tweenedElements.concat(pictureInfo, timeline)
        var toggleUIbutton = drawToggleUIbutton(UIelements);
        tweenElements(background, tweenedElements);
    },

    update: function() {
    }
}

function continueFromYouthwork1Y () {
    if(PLAYER.location.name === "Jyväskylä") {
        GAME.state.start('apprentice');
    } else if(PLAYER.location.name !== "Jyväskylä" && PLAYER.class === "poor") {
        GAME.state.start('servant2');
    } else {
        GAME.state.start('servant1');
    }
}

function continueFromYouthwork1N () {
    if(PLAYER.location.name === "Jyväskylä") {
        GAME.state.start('youthwork2');
    } else if(PLAYER.location.name !== "Jyväskylä" && PLAYER.class === "poor") {
        GAME.state.start('youthwork2');
    } else {
        GAME.state.start('homechores2');
    }
}