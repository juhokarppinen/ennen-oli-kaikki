var homechores2_state = {

    create: function() {
        PLAYER.age = 16;

        var text;
        if(PLAYER.gender === "male") {
            text = "Raadat isäsi rinnalla kotitilalla, muttet voi lakata jossittelemasta, millaiseksi elämäsi olisi muuttunut, jos olisit jatkanut opintoja.";
        } else {
            text = "Vuosien kuluessa saat lisää vastuuta ja pääset auttamaan tilan hoitamiseen liittyvissä tehtävissä.";
        }
        
        var background = drawBackground('homechorescountrybackground');
        var pictureInfo = drawPictureInfo("");

        var nameText = displayNameAndAge();
        var boxedText = drawBoxedText(text);
        var timeline = drawTimeline(PLAYER.age);
        
        var continueButton = createButton(CENTER.x, CENTER.y * 1.4, 'Jatka', continueFromHomechores2, this);

        var tweenedElements = [nameText].concat(boxedText, continueButton);
        var UIelements = tweenedElements.concat(pictureInfo, timeline);
        var toggleUIbutton = drawToggleUIbutton(UIelements);
        tweenElements(background, tweenedElements);

    },

    update: function() {
    }
}

function continueFromHomechores2 () {
    GAME.state.start('barn1');
}
