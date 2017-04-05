/*
 * This file contains global functions that are commonly needed in most states.
 */


function tweenElements(background, otherElements) {
    GAME.add.tween(background).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.None, true);
    otherElements.forEach(function(element) {
        GAME.add.tween(element).to( { alpha: 1 }, 500, Phaser.Easing.Linear.None, true, 1000);
    });
}


function displayNameAndAge() {
    var nameAgeString = PLAYER.name + ", " + PLAYER.age + " vuotta";

    // Get the text's dimensions.
    var tempText = GAME.add.text(0,0, nameAgeString, NAME_STYLE);
    var backgroundWidth = tempText.width * 1.2;
    var backgroundHeight = tempText.height * 1.2;
    tempText.destroy();

    var background = GAME.add.graphics(0, 0);
    background.lineStyle(0,0x000000, 0);
    background.beginFill(0x000000, 0.5);
    background.drawRect(CENTER.x - backgroundWidth / 2, 0, backgroundWidth, backgroundHeight);
    background.endFill();

    var nameText = GAME.add.text(CENTER.x, backgroundHeight / 2, nameAgeString, NAME_STYLE);
    nameText.anchor.setTo(0.5);

    return [nameText, background];
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


function toggleUI(UIelements) {
    UIelements.forEach(switchAlpha);

    function switchAlpha(item) {
        if (item.alpha) {
            GAME.add.tween(item).to( { alpha: 0 }, 200, Phaser.Easing.Linear.None, true, 0);
        } else {
            GAME.add.tween(item).to( { alpha: 1 }, 200, Phaser.Easing.Linear.None, true, 0);
        }
    }
}


function drawTimeline(age) {
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

    var intervalCount = 10;
    var timelineWidth = width - 2 * horizontalMargin;
    var intervalWidth = timelineWidth / intervalCount;

    var circleX = leftEndpoint + timelineWidth / 100 * age;

    var graphics = GAME.add.graphics(0,0);

    graphics.lineStyle(0, 0x000000, 0.25);
    graphics.beginFill(0x000000, 0.25);
    graphics.drawRect(0, timelineY - 60, width, 85);
    graphics.endFill();

    graphics.lineStyle(lineWidth, lineColor, lineAlpha);
    graphics.moveTo(leftEndpoint, timelineY);                               // Horizontal line
    graphics.lineTo(rightEndpoint, timelineY);
    graphics.moveTo(leftEndpoint, timelineY - endpointOffset);              // Left vertical bar
    graphics.lineTo(leftEndpoint, timelineY + endpointOffset);
    graphics.moveTo(width - horizontalMargin, timelineY - endpointOffset);  // Right vertical bar
    graphics.lineTo(width - horizontalMargin, timelineY + endpointOffset);

    for (var i = 1; i < intervalCount; i++) {
        var x = leftEndpoint + i * intervalWidth;
        graphics.moveTo(x, timelineY - midpointOffset);
        graphics.lineTo(x, timelineY + midpointOffset);
    }

    graphics.lineStyle(circleLineWidth, circleLineColor, circleLineAlpha);
    graphics.beginFill(circleFillColor);
    graphics.drawCircle(circleX, timelineY, circleDiameter);
    graphics.endFill();

    var yearText = GAME.add.text(circleX, timelineY - 33, age + 1917, YEAR_STYLE);
    yearText.anchor.setTo(0.5);

    return [yearText, graphics];    
}


function drawPictureInfo(infoText) {
    var background = GAME.add.graphics(0, 0);
    background.lineStyle(0,0x000000, 0);
    background.beginFill(0x000000, 0.5);
    background.drawRect(0, GAME.world.height - 85, GAME.world.width, 85);
    background.endFill();
    background.alpha = 0;

    if (!infoText) infoText = "Tuntematon";
    var text = GAME.add.text(GAME.world.centerX, GAME.world.height - 42, infoText, INFO_STYLE);
    text.anchor.setTo(0.5, 0.5);
    text.alpha = 0;
    return [background, text];
}


function drawToggleUIbutton(UIelements) {
    var gfx = GAME.add.graphics(0, 0);
    gfx.beginFill(0xffffff, 0.25);
    gfx.drawCircle(50, 50, 80);
    gfx.endFill();

    var toggleUIbutton = GAME.add.button(50, 50, 'toggleUIbutton');
    toggleUIbutton.scale.setTo(0.1);
    toggleUIbutton.anchor.setTo(0.5);
    toggleUIbutton.tint = 0x000000;
    toggleUIbutton.alpha = 0.66;
    toggleUIbutton.inputEnabled = true;

    toggleUIbutton.events.onInputDown.add(function() { toggleUI(UIelements); });

    return toggleUIbutton;
}


function drawToggleSoundButton() {
    var gfx = GAME.add.graphics(CENTER.x * 2 - 100, 0);
    gfx.beginFill(0xffffff, 0.25);
    gfx.drawCircle(50, 50, 80);
    gfx.endFill();

    var soundOnButton = drawSoundButtonOverlay('soundOnButton');
    var soundOffButton = drawSoundButtonOverlay('soundOffButton');
    setButtonVisibility(soundOnButton, soundOffButton);

    soundOnButton.events.onInputDown.add(function() { toggleSound(soundOnButton, soundOffButton); });
    soundOffButton.events.onInputDown.add(function() { toggleSound(soundOnButton, soundOffButton); });

    return [soundOnButton, soundOffButton];
}


function drawSoundButtonOverlay(button) {
    var soundButton = GAME.add.button(CENTER.x * 2 - 50, 50, button);
    soundButton.scale.setTo(0.1);
    soundButton.anchor.setTo(0.5);
    soundButton.tint = 0x000000;
    soundButton.alpha = 0.66;
    soundButton.inputEnabled = true;
    return soundButton;
}


function toggleSound(soundOnButton, soundOffButton) {
    GAME.sound.mute = !GAME.sound.mute;
    setButtonVisibility(soundOnButton, soundOffButton);
}


function setButtonVisibility(soundOnButton, soundOffButton) {
    soundOnButton.visible = !GAME.sound.mute;
    soundOffButton.visible = GAME.sound.mute;
}


function drawBoxedText(text) {
    var box = GAME.add.sprite(GAME.world.centerX*0.3, GAME.world.centerY*0.2, 'box');
    box.alpha = 0;

    var boxedText = GAME.add.text(GAME.world.centerX * 0.4, GAME.world.centerY * 0.3, text, STYLE);
    boxedText.alpha = 0;

    var n = text.indexOf(" ");                  // Ekan välin indeksi
    var m = text.slice(n+1).indexOf(" ") + n;   // Tokan välin indeksi
    boxedText.addColor(HIGHLIGHT_COLOR, 0);
    boxedText.addColor(STYLE.fill, m + 1);      // Väritetään kaksi ekaa sanaa

    return [box, boxedText];
}


function drawArticle(img) {
    var article = GAME.add.sprite(GAME.world.centerX*0.3, GAME.world.centerY*0.2, img);
    article.alpha = 0;

    return [article];
}


function drawBackground(image) {
    var background = GAME.add.sprite(0, 0, image);
    PREVIOUS_BACKGROUND = image;
    background.alpha = 0;
    return background;
}


function showPreviousBackground() {
    GAME.add.sprite(0, 0, PREVIOUS_BACKGROUND);
}


/**
 * Luo napin keskitettynä koordinaatteihin (x,y).
 * buttonText ja style määrittävät tekstin ja sen tyylin.
 * handler on funktio, joka napista laukeaa, ja context on aina this.
 */
function createButton(x, y, buttonText, handler, context) {
    var button = GAME.add.button(x, y, 'button');
    button.anchor.set(0.5);
    button.inputEnabled = true;
    button.events.onInputDown.add(depressButton, {btn: button});
    button.events.onInputUp.add(handler, context);
    button.alpha = 0;

    var text = GAME.add.text(button.centerX, button.centerY, buttonText, BUTTON_STYLE);
    text.anchor.set(0.5);
    text.alpha = 0;
    button.label = text;

    return [button, text];
}


function depressButton() {
    this.btn.tint = 0xCCCCCC;
    this.btn.label.fill = BUTTON_CLICK.fill;
}


function drawTitle(x, y, text) {
    var titleText = GAME.add.text(x, y, text, TITLE_STYLE);
    titleText.alpha = 0;
    titleText.anchor.setTo(0.5);
    return titleText;
}


function drawUIsingleButton(bg, txt, label, context) {
    showPreviousBackground();

    var background   = drawBackground(bg);
    var pictureInfo  = drawPictureInfo(authors[bg]);
    var nameText     = displayNameAndAge();
    var boxedText    = drawBoxedText(txt);
    var timeline     = drawTimeline(PLAYER.age); 
    var centerButton = createButton(CENTER_BUTTON.x, CENTER_BUTTON.y, label, context.centerButtonHandler, context);
      
    var tweenedElements = nameText.concat(boxedText, centerButton, timeline);
    var UIelements      = tweenedElements.concat(pictureInfo, timeline);
    drawToggleUIbutton(UIelements);
    drawToggleSoundButton();
    tweenElements(background, tweenedElements);
}


function drawUIsingleButtonArticle(bg, img, txt, label, context) {
    showPreviousBackground();

    var background   = drawBackground(bg);
    var pictureInfo  = drawPictureInfo(authors[bg]);
    var nameText     = displayNameAndAge();
    var article      = drawArticle(img);
    var timeline     = drawTimeline(PLAYER.age); 
    var centerButton = createButton(CENTER_BUTTON.x, CENTER_BUTTON.y, label, context.centerButtonHandler, context);
      
    var tweenedElements = nameText.concat(article, centerButton, timeline);
    var UIelements      = tweenedElements.concat(pictureInfo, timeline);
    drawToggleUIbutton(UIelements);
    drawToggleSoundButton();

    tweenElements(background, tweenedElements);
}


function drawUItwoButtons(bg, txt, label1, label2, context) {
    showPreviousBackground();

    var background   = drawBackground(bg);
    var pictureInfo  = drawPictureInfo(authors[bg]);
    var nameText     = displayNameAndAge();
    var boxedText    = drawBoxedText(txt);
    var timeline     = drawTimeline(PLAYER.age); 
    var leftButton   = createButton(LEFT_BUTTON.x, LEFT_BUTTON.y, label1, context.leftButtonHandler, context);
    var rightButton  = createButton(RIGHT_BUTTON.x, RIGHT_BUTTON.y, label2, context.rightButtonHandler, context);
      
    var tweenedElements = nameText.concat(boxedText, leftButton, rightButton, timeline);
    var UIelements      = tweenedElements.concat(pictureInfo, timeline);
    drawToggleUIbutton(UIelements);
    drawToggleSoundButton();

    tweenElements(background, tweenedElements);
}
