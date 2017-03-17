var youthwork1_state = {

    create: function() {
        var text = "";
        if(PLAYER.location.name === "Jyväskylä") {
            var background = GAME.add.sprite(0, 0, 'youthworkcitybackground');
            text = "Saat töitä apurina verstaalla. Päivät ovat pitkiä mutta olet nopea oppimaan. Pian sinulle tarjotaan oppipojan paikkaa, otatko sen vastaan?";
        } else if(PLAYER.location.name !== "Jyväskylä" && (PLAYER.class === "poor" || PLAYER.noschool === true)) {
            var background = GAME.add.sprite(0, 0, 'youthworkcountrybackground');
            text = "Perheesi rahatilanne on niin tiukka, että joudut etsimään työtä muualta. Sinulle tarjotaan rengin paikkaa naapuripitäjästä. Otatko sen vastaan?";
        } else {
            var background = GAME.add.sprite(0, 0, 'youthworkcountrybackground');
            text = "Vaikka perheesi tyrmäsi koulunkäynnin, vapaapaikka oppikoulusta on vielä hetken avoinna. Otatko sen salaa vastaan?";
        }
        background.alpha = 0;
        
        PLAYER.age = 12;
        var nameText = displayNameAndAge();

        var box = GAME.add.sprite(GAME.world.centerX*0.3, GAME.world.centerY*0.2, 'box');
        box.alpha = 0;

        var text1 = GAME.add.text(GAME.world.centerX * 0.4, GAME.world.centerY * 0.3, text, STYLE);
        text1.alpha = 0;

        var yesButton = GAME.add.button(GAME.world.centerX * 0.5, GAME.world.centerY * 1.4, 'button');
        yesButton.anchor.set(0.5);
        yesButton.alpha = 0;
        var t1 = GAME.add.text(yesButton.centerX, yesButton.centerY, "Kyllä");
        t1.anchor.set(0.5);
        t1.alpha = 0;
        yesButton.inputEnabled = true;
        yesButton.events.onInputDown.add(continueFromYouthwork1Y, this);
        var noButton = GAME.add.button(GAME.world.centerX * 1.5, GAME.world.centerY * 1.4, 'button');
        noButton.anchor.set(0.5);
        noButton.alpha = 0;
        var t2 = GAME.add.text(noButton.centerX, noButton.centerY, "Ei");
        t2.anchor.set(0.5);
        t2.alpha = 0;
        noButton.inputEnabled = true;
        noButton.events.onInputDown.add(continueFromYouthwork1N, this);

        //fade in
        tweenElements(background, [box, yesButton, noButton, text1, t1, t2]);
        var timeline = drawTimeline(PLAYER.age);
        var pictureInfo = drawPictureInfo("", {fill: "#FFFFFF"});
        var UIelements = [nameText, box, text1, yesButton, t1, noButton, t2, pictureInfo.text, pictureInfo.background, timeline.timeline, timeline.text];
        var toggleUIbutton = drawToggleUIbutton(UIelements);

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