var homechores1_state = {

    create: function() {
        PLAYER.age = 12;

        var text;
        var background;
        var pictureInfo;
        if(PLAYER.class === "poor") {
            background = drawBackground('homechorescountrybackground');
            pictureInfo = drawPictureInfo("");
            text = "Olet hyvä apu kotona, mutta perheeseen syntyy uusi vauva. Perheesi rahatilanne on niin tiukka, että joudut pian etsimään työtä muualta.";
        } else if(PLAYER.class === "middle") {
            background = drawBackground('homechores1background');
            pictureInfo = drawPictureInfo("");
            text = "Opit kotona kaiken kotiaskareista. Äitisi opettaa sinut laittamaan ruokaa ja ompelemaan vaatteita.";
        } else if(PLAYER.class === "rich") {
            background = drawBackground('homechores1background');
            pictureInfo = drawPictureInfo("");
            text = "Äitisi opettaa sinut laittamaan ruokaa ja ompelemaan vaatteita. Lisäksi isäsi harjoittaa lukutaitoasi lukemalla sanomalehteä ja kirjoja kanssasi.";
        }
        
        var nameText = displayNameAndAge();
        var boxedText = drawBoxedText(text);
        var timeline = drawTimeline(PLAYER.age);  
        
        var continueButton = createButton(CENTER.x, CENTER.y * 1.4, 'Jatka', continueFromHomechores, this);

        var tweenedElements = [nameText].concat(boxedText, continueButton);
        var UIelements = tweenedElements.concat(pictureInfo, timeline);
        var toggleUIbutton = drawToggleUIbutton(UIelements);
        tweenElements(background, tweenedElements);
    },

    update: function() {
    }
}

function continueFromHomechores () {
    if(PLAYER.location.name !== "Jyväskylä") {
        if(PLAYER.class === "poor") {
            GAME.state.start('homechores1choice');
        } else if(PLAYER.class === "middle") {
            GAME.state.start('homechores2');
        } else {
            GAME.state.start('death');
        }
    } else {
        if(PLAYER.class === "poor") {
            GAME.state.start('citywork1');
        } else {
            GAME.state.start('citywork2');
        }
    }
    
}
