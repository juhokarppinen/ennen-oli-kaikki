var death_state = {

    preload: function() {
    },

    create: function() {
        var background = GAME.add.sprite(0, 0, 'deathbackground');
        background.alpha = 0;

        var box = GAME.add.sprite(GAME.world.centerX*0.3, GAME.world.centerY*0.2, 'box');
        box.alpha = 0;

        var causeOfDeathText = "Kuolit...";

        if (PLAYER.causeofdeath === "keuhkokuume") {
            causeOfDeathText = "Kuolit keuhkokuumeeseen. Suomen itsenäisyyden alkutaipaleella noin joka viides lapsi kuoli ennen kouluikää.";
            PLAYER.age = Math.floor(Math.random() * 6); // Is there any data showing actual ages of deceased children? 
        }

        var deathText = causeOfDeathText + " Olit kuollessasi "+PLAYER.age+"-vuotias.";
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