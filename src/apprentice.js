var apprentice_state = {

    create: function() {
        var text = "";
        if(PLAYER.class === "rich") {
            var background = GAME.add.sprite(0, 0, 'youthworkcitybackground');
            text = "Apteekkarin apupoikana toimiminen on kiinnostavaa. Koulutustaustasi vuoksi olet erittäin pätevä työssäsi.";
        } else {
            var background = GAME.add.sprite(0, 0, 'youthworkcitybackground');
            text = "Kätevyytesi huomataan. Pääset eräälle verstaalle oppipojaksi. Kuulet kehuja, että muutaman vuoden päästä sinulla voisi hyvinkin olla oma verstas.";
        }
        background.alpha = 0;
        
        PLAYER.age = 16;
        var nameText = displayNameAndAge();

        var box = GAME.add.sprite(GAME.world.centerX*0.3, GAME.world.centerY*0.2, 'box');
        box.alpha = 0;

        var text1 = GAME.add.text(GAME.world.centerX * 0.4, GAME.world.centerY * 0.3, text, STYLE);
        text1.alpha = 0;

        var continueButton = GAME.add.button(GAME.world.centerX, GAME.world.centerY * 1.4, 'button');
        continueButton.anchor.set(0.5);
        continueButton.alpha = 0;
        var t1 = GAME.add.text(continueButton.centerX, continueButton.centerY, "Jatka");
        t1.anchor.set(0.5);
        t1.alpha = 0;
        continueButton.inputEnabled = true;
        continueButton.events.onInputDown.add(continueFromYouthwork1, this);

        //fade in
        tweenElements(background, [box, continueButton, text1, t1]);
        var timeline = drawTimeline(PLAYER.age);
        var pictureInfo = drawPictureInfo("", {fill: "#FFFFFF"});
        var UIelements = [nameText, box, text1, continueButton, buttonText, t1, pictureInfo.text, pictureInfo.background, timeline.timeline, timeline.text];
        var toggleUIbutton = drawToggleUIbutton(UIelements);
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
