var barn2_state = {

    create: function() {
        var text = "";
        if(PLAYER.gender === "male") {
            text = "Kuhertelu heinäladossa oli ikimuistoista, mutta pian " + 
                   PLAYER.crush + " kertoo olevansa raskaana! Pyydätkö häntä vaimoksesi?";
        } else {
            text = "Kuhertelu heinäladossa oli ikimuistoista, mutta pian huomaat " +
            "olevasi raskaana! " + PLAYER.crush + " tulee vastaan ladon edustalla, kerrotko raskaudesta?";
        }

        var background = drawBackground('youthworkcountrybackground');
        var pictureInfo = drawPictureInfo("");
        
        var nameText = displayNameAndAge();
        var boxedText = drawBoxedText(text);
        var timeline = drawTimeline(PLAYER.age);
        
        var yesButton = createButton(CENTER.x * 0.5, CENTER.y * 1.4, "Kyllä", continueFromBarn2Y, this);
        var noButton = createButton(CENTER.x * 1.5, CENTER.y * 1.4, "Ei", continueFromBarn2N, this);

        var tweenedElements = [nameText].concat(boxedText, yesButton, noButton);
        var UIelements = tweenedElements.concat(pictureInfo, timeline);
        var toggleUIbutton = drawToggleUIbutton(UIelements);
        tweenElements(background, tweenedElements);

    },

    update: function() {
    }
}

function continueFromBarn2Y () {
    GAME.state.start('death');
}

function continueFromBarn2N () {
    GAME.state.start('death');
}