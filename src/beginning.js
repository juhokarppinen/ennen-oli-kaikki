var beginning_state = {
    preload: function () {
    },
    create: function () {
        var background;

        createPlayerStats();
        if(PLAYER.location.name === "Jyväskylä") {
            background = GAME.add.sprite(0, 0, 'beginningcitybackground');
        } else {
            background = GAME.add.sprite(0, 0, 'beginningcountrybackground');
        }
        background.alpha = 0;
        
        displayNameAndAge();

        var text = "Tervetuloa maailmaan!";

        var box = GAME.add.sprite(GAME.world.centerX*0.3, GAME.world.centerY*0.2, 'box');
        box.alpha = 0;

        if(PLAYER.class === "poor") {
            text += " Synnyit vähävaraiseen perheeseen "+PLAYER.location.to+" Suomen itsenäisyyden alkumetreillä.";
        } else if(PLAYER.class === "middle") {
            text += " Synnyit keskiluokkaiseen perheeseen "+PLAYER.location.to+" Suomen itsenäisyyden alkumetreillä.";
        } else {
            text += " Synnyit porvarisperheeseen "+PLAYER.location.to+" Suomen itsenäisyyden alkumetreillä.";
        }

        if(PLAYER.gender === "male") {
            text += " Sinut kastettiin nimellä "+PLAYER.name+", joka oli suosittu pojannimi vuonna 1917.";
        } else {
            text += " Sinut kastettiin nimellä "+PLAYER.name+", joka oli suosittu tytönnimi vuonna 1917.";
        }

        var text1 = GAME.add.text(GAME.world.centerX * 0.4, GAME.world.centerY * 0.3, text, STYLE);
        text1.alpha = 0;

        var continueButton = GAME.add.button(GAME.world.centerX, GAME.world.centerY * 1.4, 'button');
        continueButton.anchor.set(0.5);
        continueButton.alpha = 0;
        var t1 = GAME.add.text(continueButton.centerX, continueButton.centerY, 'Jatka');
        t1.anchor.set(0.5);
        t1.alpha = 0;
        continueButton.inputEnabled = true;
        continueButton.events.onInputDown.add(continueFromBeginning, this);

        //fade in
        tweenElements(background, [box, continueButton, text1, t1]);
    },
    update: function () {
    }
}

function continueFromBeginning() {
    //to do: add childhood death
    //18% die before going to school
    /*if(death) {
        PLAYER.causeofdeath = "keuhkokuume";
        GAME.state.start('death');
    }*/
    
    //have to check what percentage of children in Jyväskylä, Hankasalmi, Jämsä and Saarijärvi didn't go to school
    GAME.state.start('school');
}

function createPlayerStats() {
    PLAYER.name = pickName(PLAYER.gender);
    PLAYER.age = 0;
    var locations = [{name: "Jyväskylä", to: "Jyväskylään", at: "Jyväskylässä"}, {name: "Hankasalmi", to: "Hankasalmelle", at: "Hankasalmella"},
        {name: "Jämsä", to: "Jämsään", at: "Jämsässä"}, {name: "Saarijärvi", to: "Saarijärvelle", at: "Saarijärvellä"}];
    //todo: 20% in Jyväskylä, the remaining ones at equal chances
    PLAYER.location = locations[Math.floor(Math.random()*locations.length)];
    //PLAYER.class = calculateOdds([0.75, 0.2, 0.05], ["poor", "middle", "rich"]); // <---find out the odds for these; also, does Jyväskylä have more rich people?
    var classes = ["poor", "middle", "rich"];
    PLAYER.class = classes[Math.floor(Math.random()*classes.length)];
}

//todo: fix this; right now it sometimes gives undefined
function calculateOdds(weights, results) {
    var num = Math.random(),
    s = 0,
    lastIndex = weights.length - 1;

    for (var i = 0; i < lastIndex; ++i) {
        s += weights[i];
        if (num < s) {
            return results[i];
        }
    }
}

function pickName(gender) {
    if(gender === "male") {
        var maleNames = ["Eino", "Toivo", "Veikko", "Väinö", "Tauno", "Erkki", "Reino", "Lauri", "Viljo", "Martti"];
        return maleNames[Math.floor(Math.random()*maleNames.length)];
    }
    if(gender === "female") {
        var femaleNames = ["Anna", "Aino", "Aili", "Aune", "Helvi", "Tyyne", "Kerttu", "Helmi", "Martta", "Toini"];
        return femaleNames[Math.floor(Math.random()*femaleNames.length)];
    }
}
