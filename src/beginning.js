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

        if(PLAYER.sex === "male") {
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
        continueButton.events.onInputDown.add(goToSchool, this);

        //fade in
        tweenElements(background, [box, continueButton, text1, t1]);


    },
    update: function () {
    }
}

function goToSchool() {
    //18% die before going to school
    //country children receive 20% chance to not go to school
    GAME.state.start('school');
}

function createPlayerStats() {
    //PLAYER.sex = calculateOdds([0.495, 0.515], ["female", "male"]); //todo: fix this
    var sexes = ["male", "female"];
    PLAYER.sex = sexes[Math.floor(Math.random()*sexes.length)];
    console.log(PLAYER.sex);
    PLAYER.name = pickName(PLAYER.sex);
    console.log(PLAYER.name);
    //PLAYER.location = calculateOdds([0.85, 0.15], ["country", "city"]); // <---these odds are not 100% certain yet
    var locations = [{name: "Jyväskylä", to: "Jyväskylään", at: "Jyväskylässä"}, {name: "Hankasalmi", to: "Hankasalmelle", at: "Hankasalmella"},
        {name: "Jämsä", to: "Jämsään", at: "Jämsässä"}, {name: "Saarijärvi", to: "Saarijärvelle", at: "Saarijärvellä"}];
    PLAYER.location = locations[Math.floor(Math.random()*locations.length)];
    console.log(PLAYER.location);
    //PLAYER.class = calculateOdds([0.75, 0.2, 0.05], ["poor", "middle", "rich"]); // <---these odds are not 100% certain yet
    var classes = ["poor", "middle", "rich"];
    PLAYER.class = classes[Math.floor(Math.random()*classes.length)];
    console.log(PLAYER.class);
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

function pickName(sex) {
    if(sex === "male") {
        var maleNames = ["Eino", "Toivo", "Veikko", "Väinö", "Tauno", "Erkki"];
        return maleNames[Math.floor(Math.random()*maleNames.length)];
    }
    if(sex === "female") {
        var femaleNames = ["Anna", "Aino", "Aili", "Tyyne", "Aune", "Helvi"];
        return femaleNames[Math.floor(Math.random()*femaleNames.length)];
    }
}
