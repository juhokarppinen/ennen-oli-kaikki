var barn1_state = {

    create: function() {
        PLAYER.age = 19;

        var text;
        var background = drawBackground('youthworkcountrybackground');
        var pictureInfo = drawPictureInfo("");
        
        if(PLAYER.gender === "male") {
            PLAYER.crush = pickName("female");
            text = "Talon piika " + PLAYER.crush + " on silmäillyt sinua vihjailevasti. Kutsutko hänet kanssasi heinälatoon?";
        } else {
            PLAYER.crush = pickName("male");
            text = "Talon renki " + PLAYER.crush + " on silmäillyt sinua vihjailevasti. Lähdetkö hänen kanssaan heinälatoon?";
        }
        
        var nameText = displayNameAndAge();
        var boxedText = drawBoxedText(text);
        var timeline = drawTimeline(PLAYER.age);
        
        var yesButton = createButton(CENTER.x * 0.5, CENTER.y * 1.4, "Kyllä", continueFromBarn1Y, this);
        var noButton = createButton(CENTER.x * 1.5, CENTER.y * 1.4, "Ei", continueFromBarn1N, this);

        var tweenedElements = [nameText].concat(boxedText, yesButton, noButton);
        var UIelements = tweenedElements.concat(pictureInfo, timeline);
        var toggleUIbutton = drawToggleUIbutton(UIelements);
        tweenElements(background, tweenedElements);
    },

    update: function() {
    }
}

function continueFromBarn1Y () {
    GAME.state.start('barn2');
}

function continueFromBarn1N () {
    GAME.state.start('death');
}