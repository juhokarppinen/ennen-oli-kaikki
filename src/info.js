var info_state = {
    preload: function () {
    },

    create: function () {
        GAME.time.events.add(1000, function() {});

        var background = drawBackground('menubackground');
        background.alpha = 1;

        var graphics = GAME.add.graphics(0, 0);
        graphics.beginFill(0x000000, 0.85);
        graphics.drawRect(0, 0, GAME.world.width, GAME.world.height);
        graphics.endFill();

        var magnifyingString = "Tarkastele taustakuvaa";
        var muteString = "Mykistä äänet";
        var helpString = "Jokainen pelikerta on hieman erilainen, joten muista pelata useita kertoja! " +
            "Pelin kulku riippuu sekä valinnoistasti että tilastoihin perustuvasta satunnaisuudesta."

        var leftArrow = GAME.add.sprite(100, 0, 'arrowLeft');
        var rightArrow = GAME.add.sprite(GAME.world.width - 100, 0, 'arrowRight');
        rightArrow.anchor.setTo(1, 0);

        var magnifyingText = GAME.add.text(0, 0, magnifyingString, INFO_STYLE);
        var muteText = GAME.add.text(0, 100, muteString, INFO_STYLE);
        var helpText = GAME.add.text(0, 200, helpString, INFO_STYLE);

        button = createButton(CENTER.x, CENTER.y, 'OK', function() {GAME.state.start('menu'), this});
        button.alpha = 1;
        drawToggleUIbutton([]);
        drawToggleSoundButton();
    }
};