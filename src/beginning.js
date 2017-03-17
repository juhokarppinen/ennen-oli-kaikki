var beginning_state = {
    preload: function () {
    },

    create: function () {
        createPlayerStats();

        var text = createText();
        var background;
        var pictureInfo;
        
        if(PLAYER.location.name === "Jyväskylä") {
            background = drawBackground('beginningcitybackground');
            pictureInfo = drawPictureInfo("");
        } else {
            background = drawBackground('beginningcountrybackground');
            pictureInfo = drawPictureInfo("");
        }
        
        var nameText = displayNameAndAge();
        var boxedText = drawBoxedText(text);
        var timeline = drawTimeline(PLAYER.age); timeline[0].alpha = 0; timeline[1].alpha = 0;
        
        var continueButton = createButton(CENTER.x, CENTER.y * 1.4, 'Jatka', continueFromBeginning, this);
      
        var tweenedElements = [nameText].concat(boxedText, continueButton, timeline);
        var UIelements = tweenedElements.concat(pictureInfo, timeline);
        var toggleUIbutton = drawToggleUIbutton(UIelements);
        tweenElements(background, tweenedElements);
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


function createText() {
    var text = "Tervetuloa maailmaan! Synnyit ";
    if (PLAYER.class === "poor") {
        text += "vähävaraiseen ";
    } else if (PLAYER.class === "middle") {
        text += "keskiluokkaiseen ";
    } else {
        text += "porvaris";
    }
    text += "perheeseen " + PLAYER.location.to + " Suomen itsenäisyyden alkumetreillä. " +
            "Sinut kastettiin nimellä " + PLAYER.name + ", joka oli suosittu ";
    if (PLAYER.gender === "male") {
        text += "pojan";
    } else {
        text += "tytön";
    }
    text += "nimi vuonna 1917.";
    return text;
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