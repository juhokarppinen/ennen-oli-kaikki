var dance1_state = {

    create: function() {
        PLAYER.age = 19;

        PLAYER.crush = pickName("male");
        var text = "Livahdat tansseihin, joissa tapaatkin erään vakioasiakkaan. Tanssien päätteeksi " + PLAYER.crush + " haluaa saattaa sinut kotiin, suostutko ehdotukseen?";
        
        var background = drawBackground('citybackground');
        var pictureInfo = drawPictureInfo("");

        var nameText = displayNameAndAge();
        var boxedText = drawBoxedText(text);
        var timeline = drawTimeline(PLAYER.age);
        
        var yesButton = createButton(CENTER.x * 0.5, CENTER.y * 1.4, "Kyllä", continueFromDance1Y, this);
        var noButton = createButton(CENTER.x * 1.5, CENTER.y * 1.4, "Ei", continueFromDance1N, this);

        var tweenedElements = [nameText].concat(boxedText, yesButton, noButton);
        var UIelements = tweenedElements.concat(pictureInfo, timeline);
        var toggleUIbutton = drawToggleUIbutton(UIelements);
        tweenElements(background, tweenedElements);
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