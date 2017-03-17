var citywork2_state = {

    create: function() {
        PLAYER.age = 16;

        var text;
        if(PLAYER.class === "rich") {
            text = "Pääsit isäsi suhteilla myyjäksi vaateliikkeeseen. Vaikka tehtävää riittää, olet oikein tyytyväinen työhösi.";
        } else {
            text = "Ompelutaidoillasi pääsit töihin ompeluliikkeeseen. Vaikka tehtävää riittää, olet oikein tyytyväinen työhösi.";
        }
        var background = drawBackground('homechores1background');
        var pictureInfo = drawPictureInfo("");        
        
        var nameText = displayNameAndAge();
        var boxedText = drawBoxedText(text);
        var timeline = drawTimeline(PLAYER.age);  
        
        var continueButton = createButton(CENTER.x, CENTER.y * 1.4, 'Jatka', continueFromCitywork, this);

        var tweenedElements = [nameText].concat(boxedText, continueButton);
        var UIelements = tweenedElements.concat(pictureInfo, timeline);
        var toggleUIbutton = drawToggleUIbutton(UIelements);
        tweenElements(background, tweenedElements);
    },

    update: function() {
    }
}

function continueFromCitywork () {
    if(PLAYER.class !== "rich") {
        GAME.state.start('dance1');
    } else {
        GAME.state.start('death');
    }
}