var school2_state = {

    create: function() {
        PLAYER.age = 11;

        var text = "Vuonna 1928 pääset kansakoulusta.";
        var buttonText;

        if(PLAYER.class === "rich") {
            text += " Olet terävä oppilas, ja opettajasi kannustaa sinua jatkamaan oppikouluun. Pääsykokeista selvittyäsi vanhempasi ovat ylpeitä ja lähettävät sinut oppikouluun mielellään.";
            buttonText = "Oppikouluun";
        } else if(PLAYER.gender === "female") {
            text += " Olet terävä oppilas, mutta tuohon aikaan harvat tytöt menivät kouluun kansakoulun jälkeen. Jäät kotiin auttamaan askareissa.";
            buttonText = "Kotitöihin";
        } else if(PLAYER.class === "poor") {
            text += " Olet terävä oppilas, mutta perheelläsi ei ole varaa oppikouluun ja kotona tarvitaan apuasi, joten koulutiesi päättyy tähän.";
            buttonText = "Töihin";
        } else if(PLAYER.class === "middle") {
            text += " Olet terävä oppilas, ja opettajasi kannustaa sinua jatkamaan oppikouluun. Perheesi ei kuitenkaan syty idealle, vaan haluaa sinut töihin.";
            buttonText = "Töihin";
        }

        var background = drawBackground('schoolbackground');
        var pictureInfo = drawPictureInfo("");

        var nameText = displayNameAndAge();
        var boxedText = drawBoxedText(text);
        var timeline = drawTimeline(PLAYER.age);
        
        var continueButton = createButton(CENTER.x, CENTER.y * 1.4, buttonText, continueFromSchool2, this);

        var tweenedElements = [nameText].concat(boxedText, continueButton);
        var UIelements = tweenedElements.concat(pictureInfo, timeline)
        var toggleUIbutton = drawToggleUIbutton(UIelements);
        tweenElements(background, tweenedElements);
    },

    update: function() {
    }
}

function continueFromSchool2 () {
    
    if(PLAYER.class === "rich") {
        GAME.state.start('studies1');
    } else if(PLAYER.gender === "female") {
        GAME.state.start('homechores1');
    } else {
        GAME.state.start('youthwork1');
    }
}
