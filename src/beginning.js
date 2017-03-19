var beginning_state = {
    preload: function () {
    },

    create: function () {
        createPlayerStats();

        var classText;
        if (PLAYER.class === "poor")        classText = "vähävaraiseen ";
        else if (PLAYER.class === "middle") classText = "keskiluokkaiseen ";
        else                                classText = "porvaris";

        var genderText;
        if (PLAYER.gender === "male") genderText = "pojan";
        else                          genderText = "tytön";

        var text = "Tervetuloa maailmaan! Synnyit " + classText + "perheeseen " + 
                   PLAYER.location.to + " Suomen itsenäisyyden alkumetreillä. " +
                   "Sinut kastettiin nimellä " + PLAYER.name + ", joka oli suosittu " +
                   genderText + "nimi vuonna 1917.";
        
        if(PLAYER.location.name === "Jyväskylä") {
            var image     = 'beginningcitybackground';
            var imageInfo = "";
        } else {
            var image     = 'beginningcountrybackground';
            var imageInfo = "";
        }

        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, imageInfo, text, centerButtonLabel, this);
    },

    update: function () {
    }
}


function centerButtonHandler() {
    if (Math.random() <= 0.18) {     // 18% die before going to school
        PLAYER.causeofdeath = "keuhkokuume";
        GAME.state.start('death');
    } else if (PLAYER.location.name !== "Jyväskylä" && Math.random() <= 0.20) {
        if(PLAYER.class === "rich") {
            GAME.state.start('school1');
        } else {
            PLAYER.noschool = true;
            GAME.state.start('school0'); // 20% of non-rich rural children didn't go to school.
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