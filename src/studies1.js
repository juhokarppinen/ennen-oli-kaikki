var studies1_state = {

    create: function() {
        var background = GAME.add.sprite(0, 0, 'studies1background');
        background.alpha = 0;
        
        PLAYER.age = 12;
        var nameText = displayNameAndAge();

        var box = GAME.add.sprite(GAME.world.centerX*0.3, GAME.world.centerY*0.2, 'box');
        box.alpha = 0;

        var text = "Aloitat oppikoulun Jyväskylän lyseossa. Opiskelu osoittautuu paljon vaikeammaksi kuin olit odottanut ja pian kadut kouluun tuloa. "
        + "Jatkatko opintoja vai lähdetkö mieluummin leskeksi jääneen apteekkarienosi apupojaksi kaupunkiin?";

        var text1 = GAME.add.text(GAME.world.centerX * 0.4, GAME.world.centerY * 0.3, text, STYLE);
        text1.alpha = 0;

        var studyButton = GAME.add.button(GAME.world.centerX * 0.5, GAME.world.centerY * 1.4, 'button');
        studyButton.anchor.set(0.5);
        studyButton.alpha = 0;
        var t1 = GAME.add.text(studyButton.centerX, studyButton.centerY, "Opintoja");
        t1.anchor.set(0.5);
        t1.alpha = 0;
        studyButton.inputEnabled = true;
        studyButton.events.onInputDown.add(continueFromStudies1Study, this);
        var workButton = GAME.add.button(GAME.world.centerX * 1.5, GAME.world.centerY * 1.4, 'button');
        workButton.anchor.set(0.5);
        workButton.alpha = 0;
        var t2 = GAME.add.text(workButton.centerX, workButton.centerY, "Apupojaksi");
        t2.anchor.set(0.5);
        t2.alpha = 0;
        workButton.inputEnabled = true;
        workButton.events.onInputDown.add(continueFromStudies1Work, this);

        //fade in
        tweenElements(background, [box, studyButton, workButton, text1, t1, t2]);
        var timeline = drawTimeline(PLAYER.age);
        var pictureInfo = drawPictureInfo("", {fill: "#FFFFFF"});
        var UIelements = [nameText, box, text1, studyButton, t1, workButton, t2, pictureInfo.text, pictureInfo.background, timeline.timeline, timeline.text];
        var toggleUIbutton = drawToggleUIbutton(UIelements);

    },

    update: function() {
    }
}

function continueFromStudies1Study () {
    GAME.state.start('studies2');
}
function continueFromStudies1Work () {
    GAME.state.start('apprentice');
}