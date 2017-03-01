/*
 * This file includes functions that are commonly needed in every state
 */
function tweenElements(background, otherElements) {
    game.add.tween(background).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true);
    otherElements.forEach(function(element) {
        game.add.tween(element).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.None, true, 2000);
    });
}