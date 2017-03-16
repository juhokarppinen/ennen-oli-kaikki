var death_state = {

    preload: function() {
    },

    create: function() {
        var background = GAME.add.sprite(0, 0, 'deathbackground');
        background.alpha = 0;

        var box = GAME.add.sprite(GAME.world.centerX*0.3, GAME.world.centerY*0.2, 'box');
        box.alpha = 0;

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
        var text1 = GAME.add.text(GAME.world.centerX * 0.4, GAME.world.centerY * 0.3, deathText, STYLE);
        text1.alpha = 0;

        var startButton = GAME.add.button(GAME.world.centerX * 0.7, GAME.world.centerY * 1.4, 'button');
        startButton.anchor.set(0.5);
        var gendertext;
        if(PLAYER.gender === "female") {
            gendertext = "Pelaa poikana";
        } else {
            gendertext = "Pelaa tyttönä";
        }
        var t1 = GAME.add.text(startButton.centerX, startButton.centerY, gendertext);
        t1.anchor.set(0.5);
        t1.alpha = 0;
        startButton.inputEnabled = true;
        startButton.events.onInputDown.add(startGame, this);
        startButton.alpha = 0;
        
        var menuButton = GAME.add.button(GAME.world.centerX * 1.3, GAME.world.centerY * 1.4, 'button');
        menuButton.anchor.set(0.5);
        var t2 = GAME.add.text(menuButton.centerX, menuButton.centerY, "Palaa valikkoon");
        t2.anchor.set(0.5);
        t2.alpha = 0;
        menuButton.inputEnabled = true;
        menuButton.events.onInputDown.add(goToMenu, this);
        menuButton.alpha = 0;

        tweenElements(background, [box, startButton, menuButton, text1, t1, t2]);
        displayTimeline(PLAYER.age);

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