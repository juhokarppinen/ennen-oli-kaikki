var beginning_state = {
    preload: function () {
    },
    create: function () {
        createPlayerStats();

        var text = "Tervetuloa maailmaan!";
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
        
        var background;
        var pictureInfo;
        if(PLAYER.location.name === "Jyväskylä") {
            background = GAME.add.sprite(0, 0, 'beginningcitybackground');
            pictureInfo = drawPictureInfo("", {fill: "#FFFFFF"});
        } else {
            background = GAME.add.sprite(0, 0, 'beginningcountrybackground');
            pictureInfo = drawPictureInfo("", {fill: "#FFFFFF"});
        }
        background.alpha = 0;
        
        var nameText = displayNameAndAge();
        var box = GAME.add.sprite(GAME.world.centerX*0.3, GAME.world.centerY*0.2, 'box');
        box.alpha = 0;
        var boxedText = GAME.add.text(GAME.world.centerX * 0.4, GAME.world.centerY * 0.3, text, STYLE);
        boxedText.alpha = 0;
        var continueButton = createButton(GAME.world.centerX, GAME.world.centerY * 1.4, 'Jatka', {}, continueFromBeginning, this);
        var timeline = drawTimeline(PLAYER.age);
        timeline.text.alpha = 0;      // This is the only time when the timeline is tweened in.
        timeline.timeline.alpha = 0;
        var UIelements = [boxedText, box, nameText, continueButton.button, continueButton.text, pictureInfo.text, pictureInfo.background, timeline.timeline, timeline.text];
        var toggleUIbutton = drawToggleUIbutton(UIelements);
        tweenElements(background, [box, continueButton.button, continueButton.text, boxedText, timeline.timeline, timeline.text]);
    },
    update: function () {
    }
}

function continueFromBeginning() {
    // 18% die before going to school
    if (Math.random() <= 0.18) {
        PLAYER.causeofdeath = "keuhkokuume";
        GAME.state.start('death');
    } else if (PLAYER.location.name !== "Jyväskylä" && Math.random() <= 0.20) {
        if(PLAYER.class === "rich") {
            GAME.state.start('school1');
        } else {
            PLAYER.noschool = true;
            GAME.state.start('school0'); // 20% of rural children didn't go to school.
        }
    } else {
        PLAYER.noschool = false;
        GAME.state.start('school1');
    }
}

function createPlayerStats() {
    PLAYER.name = pickName(PLAYER.gender);
    PLAYER.age = 0;
    PLAYER.causeofdeath = "";
    var locations = [{name: "Hankasalmi", to: "Hankasalmelle", at: "Hankasalmella"},
        {name: "Jämsä", to: "Jämsään", at: "Jämsässä"}, {name: "Saarijärvi", to: "Saarijärvelle", at: "Saarijärvellä"}];
    if (Math.random() <= 0.20) { 
        PLAYER.location = {name: "Jyväskylä", to: "Jyväskylään", at: "Jyväskylässä"};
    } else {
        PLAYER.location = locations[Math.floor(Math.random()*locations.length)];
    }
    var classes = ["poor", "middle"];
    if (Math.random() <= 0.10) { 
        PLAYER.class = "rich";
    } else {
        PLAYER.class = classes[Math.floor(Math.random()*classes.length)];
    }
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