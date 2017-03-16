/*
 * This file includes functions that are commonly needed in every state
 */
function tweenElements(background, otherElements) {
    GAME.add.tween(background).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true);
    otherElements.forEach(function(element) {
        GAME.add.tween(element).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.None, true, 2000);
    });
}

function displayNameAndAge() {
    var nameStyle = {font: "25px verdana", fill: "#FFFFFF"};
    var nameText = GAME.add.text(GAME.world.centerX*1.75, GAME.world.centerY * 0.075, PLAYER.name+" "+PLAYER.age+"v.", nameStyle);
    nameText.alpha=0;
    GAME.add.tween(nameText).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.None, true, 2000);
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

function displayTimeline(age) {
    var lineWidth = 2;
    var lineAlpha = 1;
    var lineColor = 0xffffff;

    var circleLineWidth = 2;
    var circleDiameter  = 20;
    var circleLineAlpha = 1;
    var circleLineColor = 0xffffff;
    var circleFillColor = 0xaaaaaa;

    var horizontalMargin = 45;
    var verticalMargin   = 25;
    var width            = GAME.width;
    var height           = GAME.height;
    var leftEndpoint     = horizontalMargin;
    var rightEndpoint    = width - horizontalMargin;
    var timelineY        = height - verticalMargin;
    var endpointOffset   = 4 * lineWidth;
    var midpointOffset   = 3 * lineWidth;

    var intervalCount = 20;
    var timelineWidth = width - 2 * horizontalMargin;
    var intervalWidth = timelineWidth / intervalCount;

    var circleX = leftEndpoint + timelineWidth / 100 * age;

    var graphics = GAME.add.graphics(0,0);

    graphics.lineStyle(0, 0x000000, 0.25);
    graphics.beginFill(0x000000, 0.25);
    graphics.drawRect(0, timelineY - 60, width, 85);
    graphics.endFill();

    graphics.lineStyle(lineWidth, lineColor, lineAlpha);
    // Horizontal line
    graphics.moveTo(leftEndpoint, timelineY);
    graphics.lineTo(rightEndpoint, timelineY);
    // Left vertical bar
    graphics.moveTo(leftEndpoint, timelineY - endpointOffset);
    graphics.lineTo(leftEndpoint, timelineY + endpointOffset);
    // Right vertical bar
    graphics.moveTo(width - horizontalMargin, timelineY - endpointOffset);
    graphics.lineTo(width - horizontalMargin, timelineY + endpointOffset);

    for (i = 1; i < intervalCount; i++) {
        var x = leftEndpoint + i * intervalWidth;
        graphics.moveTo(x, timelineY - midpointOffset);
        graphics.lineTo(x, timelineY + midpointOffset);
    }

    graphics.lineStyle(circleLineWidth, circleLineColor, circleLineAlpha);
    graphics.beginFill(circleFillColor);
    graphics.drawCircle(circleX, timelineY, circleDiameter);
    graphics.endFill();

    // graphics.alpha = 0;
    // GAME.add.tween(graphics).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.None, true, 1000);

    var textStyle = {font: "30px verdana", fill: "#FFFFFF"};
    var yearText = GAME.add.text(circleX, timelineY - 33, age + 1917, textStyle);
    yearText.anchor.setTo(0.5);
    
    // yearText.alpha=0;
    // GAME.add.tween(yearText).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.None, true, 1000);
}
