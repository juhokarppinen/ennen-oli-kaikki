var dance1_state = {

    create: function() {
        PLAYER.crush = pickName("male");
        var text = "Livahdat tansseihin, joissa tapaatkin erään vakioasiakkaan. Tanssien päätteeksi " + PLAYER.crush + " haluaa saattaa sinut kotiin, suostutko ehdotukseen?";
        var background = GAME.add.sprite(0, 0, 'citybackground');
        background.alpha = 0;
        
        PLAYER.age = 19;
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
        yesButton.events.onInputDown.add(continueFromDance1Y, this);
        var noButton = GAME.add.button(GAME.world.centerX * 1.5, GAME.world.centerY * 1.4, 'button');
        noButton.anchor.set(0.5);
        noButton.alpha = 0;
        var t2 = GAME.add.text(noButton.centerX, noButton.centerY, "Ei");
        t2.anchor.set(0.5);
        t2.alpha = 0;
        noButton.inputEnabled = true;
        noButton.events.onInputDown.add(continueFromDance1N, this);

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

function continueFromDance1Y () {
    GAME.state.start('death');
}

function continueFromDance1N () {
    GAME.state.start('death');
}