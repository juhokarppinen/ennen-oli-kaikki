/* global player */

var beginning_state = {
    preload: function () {
    },
    create: function () {
        var style = {font: "25px verdana", fill: "#1e1711"};
        
        createPlayerStats();
        if(player.location === "country") {
            game.add.sprite(0, 0, 'beginningcountrybackground');
        } else {
            game.add.sprite(0, 0, 'beginningcitybackground');
        }
        
        var continueButton = game.add.sprite(game.world.centerX*0.2, game.world.centerY*0.2, 'box');
        
        if(player.sex === "male") {
            var text1 = game.add.text(game.world.centerX * 0.3, game.world.centerY * 0.3, "Synnyit poikavauvaksi vuoteen 1917.", style);
        } else {
            var text1 = game.add.text(game.world.centerX * 0.3, game.world.centerY * 0.3, "Synnyit tyttövauvaksi vuoteen 1917.", style);
        }
        var text2 = game.add.text(game.world.centerX * 0.3, game.world.centerY * 0.4, "Nimesi on "+player.name+".", style);
        if(player.location == "city") {
            var text3 = game.add.text(game.world.centerX * 0.3, game.world.centerY * 0.5, "Elät kaupungissa.", style);
        } else {
            var text3 = game.add.text(game.world.centerX * 0.3, game.world.centerY * 0.5, "Elät maalla.", style);
        }

        var continueButton = game.add.button(game.world.centerX, game.world.centerY * 1.2, 'button');
        continueButton.anchor.set(0.5);
        var t1 = game.add.text(continueButton.centerX, continueButton.centerY, 'Jatka');
        t1.anchor.set(0.5);
        continueButton.inputEnabled = true;
        continueButton.events.onInputDown.add(goToSchool, this);

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
    var locations = ["country", "city"];
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