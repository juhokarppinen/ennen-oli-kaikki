var beginning_state = {
    preload: function () {
    },
    create: function () {
        game.add.sprite(0, 0, 'background');
        var style = {font: "25px verdana", fill: "#FFFFFF"};
        var text1 = game.add.text(game.world.centerX * 0.3, game.world.centerY * 0.5, "Synnyit poikavauvaksi vuoteen 1917.", style);
        var text2 = game.add.text(game.world.centerX * 0.3, game.world.centerY * 0.6, "Nimesi on Vilho.", style);
        var text3 = game.add.text(game.world.centerX * 0.3, game.world.centerY * 0.7, "Elät köyhässä perheessä.", style);

        var continueButton = game.add.button(game.world.centerX, game.world.centerY, 'button');
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
    game.state.start('school');

}