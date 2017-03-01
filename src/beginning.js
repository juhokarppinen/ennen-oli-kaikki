/* global player */

var beginning_state = {
    preload: function () {
    },
    create: function () {
        var style = {font: "32px verdana", fill: "#1e1711", wordWrap: true, wordWrapWidth: 700};
        var background;
        
        createPlayerStats();
        if(player.location.name === "Jyväskylä") {
            background = game.add.sprite(0, 0, 'beginningcitybackground');
        } else {
            background = game.add.sprite(0, 0, 'beginningcountrybackground');
        }
        background.alpha = 0;
        
        var text = "Tervetuloa maailmaan!";
        
        var box = game.add.sprite(game.world.centerX*0.3, game.world.centerY*0.2, 'box');
        box.alpha = 0;
        
        if(player.class === "poor") {
            text += " Synnyit vähävaraiseen perheeseen "+player.location.to+" Suomen itsenäisyyden alkumetreillä.";
        } else if(player.class === "middle") {
            text += " Synnyit keskiluokkaiseen perheeseen "+player.location.to+" Suomen itsenäisyyden alkumetreillä.";
        } else {
            text += " Synnyit porvarisperheeseen "+player.location.to+" Suomen itsenäisyyden alkumetreillä.";
        }
        
        if(player.sex === "male") {
            text += " Sinut kastettiin nimellä "+player.name+", joka oli suosittu pojannimi vuonna 1917.";
        } else {
            text += " Sinut kastettiin nimellä "+player.name+", joka oli suosittu tytönnimi vuonna 1917.";
        }

        var text1 = game.add.text(game.world.centerX * 0.4, game.world.centerY * 0.3, text, style);
        text1.alpha = 0;

        var continueButton = game.add.button(game.world.centerX, game.world.centerY * 1.4, 'button');
        continueButton.anchor.set(0.5);
        continueButton.alpha = 0;
        var t1 = game.add.text(continueButton.centerX, continueButton.centerY, 'Jatka');
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
    game.state.start('school');
}

function createPlayerStats() {
    //player.sex = calculateOdds([0.495, 0.515], ["female", "male"]); //todo: fix this
    var sexes = ["male", "female"];
    player.sex = sexes[Math.floor(Math.random()*sexes.length)];
    console.log(player.sex);
    player.name = pickName(player.sex);
    console.log(player.name);
    //player.location = calculateOdds([0.85, 0.15], ["country", "city"]); // <---these odds are not 100% certain yet
    var locations = [{name: "Jyväskylä", to: "Jyväskylään", at: "Jyväskylässä"}, {name: "Hankasalmi", to: "Hankasalmelle", at: "Hankasalmella"},
        {name: "Jämsä", to: "Jämsään", at: "Jämsässä"}, {name: "Saarijärvi", to: "Saarijärvelle", at: "Saarijärvellä"}];
    player.location = locations[Math.floor(Math.random()*locations.length)];
    console.log(player.location);
    //player.class = calculateOdds([0.75, 0.2, 0.05], ["poor", "middle", "rich"]); // <---these odds are not 100% certain yet
    var classes = ["poor", "middle", "rich"];
    player.class = classes[Math.floor(Math.random()*classes.length)];
    console.log(player.class);
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