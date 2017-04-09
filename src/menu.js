var menu_state = {

    preload: function() {
    },

    create: function() {
        var background = drawBackground('menubackground');
        var pictureInfo = drawPictureInfo(authors['menubackground']);

        var startButton = createButton(CENTER_BUTTON.x, CENTER_BUTTON.y, 'Aloita', pickGender, this);
        
        var titleText = drawTitle(CENTER.x, CENTER.y * 0.4, "Ennen oli kaikki...");
        
        var tweenedElements = [titleText].concat(startButton);
        var UIelements = tweenedElements.concat(pictureInfo);
        drawToggleUIbutton(UIelements);
        drawToggleSoundButton();

        tweenElements(background, tweenedElements);

        this.createHelpOverlay();
    },

    update: function() {
    },

    createHelpOverlay: function() {
        var graphics = GAME.add.graphics (0,0);
        graphics.lineStyle = (0, 0x000000, 0);
        graphics.beginFill(0x000000, 0.95);
        graphics.drawRect(100, 0, GAME.world.width - 200, GAME.world.height);
        graphics.endFill();

        var magnifyingString = "Tarkastele taustakuvaa";
        var muteString = "Mykistä äänet";
        var helpString = "Jokainen pelikerta on hieman erilainen, joten muista pelata useita kertoja! " +
            "Pelin kulku riippuu sekä valinnoistasti että tilastoihin perustuvasta satunnaisuudesta."

        var leftArrow = GAME.add.sprite(100, 0, 'arrowLeft');
        var rightArrow = GAME.add.sprite(GAME.world.width - 100, 0, 'arrowRight');
        rightArrow.anchor.setTo(1, 0);

        var magnifyingText = GAME.add.text(0, 0, magnifyingString, {});
        var muteText = GAME.add.text(0, 100, muteString, {});
        var helpText = GAME.add.text(0, 200, helpString, {});

        graphics.inputEnabled = true;
        graphics.events.onInputDown.add(function() {this.destroyElements([
            graphics,
            magnifyingText,
            muteText,
            helpText,
            leftArrow,
            rightArrow])});
    },

    destroyElements: function (elements) {
        elements.forEach(function(element) {element.destroy()});
    }
}

function pickGender () {
    GAME.state.start('gender');
}
