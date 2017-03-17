var death_state = {

    preload: function() {
    },

    create: function() {
        var background = drawBackground('deathbackground');
        var pictureInfo = drawPictureInfo("");

        // Default description.
        var causeOfDeathText = "";

        // Childhood death
        if (PLAYER.causeofdeath === "keuhkokuume") {
            causeOfDeathText = "Keuhkotuberkuloosi oli 1900-luvun alkupuolella "
            + "yksi yleisimmistä kuolinsyistä muiden kulkutautien lisäksi. "
            + "Vielä 1920-luvun lopulla se tappoi tuhansia ihmisiä joka vuosi. "
            + "Keuhkotuberkuloosi koitui sinunkin kohtalokseksi. Lepää "
            + "rauhassa, " + PLAYER.name + "!";
            PLAYER.age = Math.floor(Math.random() * 6); // Is there any data showing actual ages of deceased children? 
        }

        var numberTexts = ["yksi","kaksi","kolme","neljä","viisi","kuusi",
                           "seitsemän","kahdeksan","yhdeksän","kymmenen"];
        var ageOfDeathText;
        if (PLAYER.age === 0) {
            ageOfDeathText = "vain muutaman kuukauden ikäinen.";
        } else if (PLAYER.age <= 10) {
            ageOfDeathText = numberTexts[PLAYER.age - 1] + "vuotias.";
        } else {
            ageOfDeathText = PLAYER.age + "-vuotias.";
        }

        var deathText = "Kuolit... " + causeOfDeathText + " Olit kuollessasi " + ageOfDeathText;

        var genderText;
        if(PLAYER.gender === "female") {
            genderText = "Pelaa poikana";
        } else {
            genderText = "Pelaa tyttönä";
        }

        var nameText = displayNameAndAge();
        var boxedText = drawBoxedText(deathText);
        var timeline = drawTimeline(PLAYER.age);
        
        var startGameButton = createButton(CENTER.x * 0.5, CENTER.y * 1.4, genderText, startGame, this);
        var goToMenuButton = createButton(CENTER.x * 1.5, CENTER.y * 1.4, "Valikkoon", goToMenu, this);

        var tweenedElements = [nameText].concat(boxedText, startGameButton, goToMenuButton);
        var UIelements = tweenedElements.concat(pictureInfo, timeline);
        var toggleUIbutton = drawToggleUIbutton(UIelements);
        tweenElements(background, tweenedElements);

},

    update: function() {
    }
}

function startGame () {
    if(PLAYER.gender === "female") {
        PLAYER.gender = "male";
    } else {
        PLAYER.gender = "female";
    }
    GAME.state.start('beginning');
}

function goToMenu () {
    GAME.state.start('menu');
}