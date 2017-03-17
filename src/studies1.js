var studies1_state = {

    create: function() {
        PLAYER.age = 12;

        var text = "Aloitat oppikoulun Jyväskylän lyseossa. Opiskelu osoittautuu " +
                   "paljon vaikeammaksi kuin olit odottanut ja pian kadut kouluun tuloa. " +
                   "Jatkatko opintoja vai lähdetkö mieluummin leskeksi jääneen " + 
                   "apteekkarienosi apupojaksi kaupunkiin?";

        var background = drawBackground('studies1background');
        var pictureInfo = drawPictureInfo("");
        
        var nameText = displayNameAndAge();
        var boxedText = drawBoxedText(text);
        var timeline = drawTimeline(PLAYER.age);
        
        var studyButton = createButton(CENTER.x * 0.5, CENTER.y * 1.4, 'Opintoja', continueFromStudies1Study);
        var workButton = createButton(CENTER.x * 1.5, CENTER.y * 1.4, 'Apupojaksi', continueFromStudies1Work);

        var tweenedElements = [nameText].concat(boxedText, studyButton, workButton);
        var UIelements = tweenedElements.concat(pictureInfo, timeline)
        var toggleUIbutton = drawToggleUIbutton(UIelements);
        tweenElements(background, tweenedElements);
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