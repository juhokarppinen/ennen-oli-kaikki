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