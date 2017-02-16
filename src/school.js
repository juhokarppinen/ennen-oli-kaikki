var leftText;
var rightText;

var school_state = {

    create: function() {
        game.add.sprite(0, 0, 'schoolbackground');
        
        var style = {font: "25px verdana", fill: "#FFFFFF"};
        var text1 = game.add.text(game.world.centerX * 0.2, game.world.centerY * 0.5, "Kävit kansakoulun.", style);
        var text2 = game.add.text(game.world.centerX * 0.2, game.world.centerY * 0.6, "Se meni vähän heikosti, koska perheestä ei ollut apua.", style);

        var buttonLeft = game.add.button(game.world.centerX * 0.5, game.world.centerY * 1.75, 'button');
        buttonLeft.anchor.set(0.5);

        var buttonRight = game.add.button(game.world.centerX * 1.5, game.world.centerY * 1.75, 'button');
        buttonRight.anchor.set(0.5);

        buttonLeft.inputEnabled = true;
        buttonRight.inputEnabled = true;

        buttonLeft.events.onInputDown.add(HandleLeftClick, this);
        buttonRight.events.onInputDown.add(HandleRightClick, this);

        var t1 = game.add.text(buttonLeft.centerX, buttonLeft.centerY, 'Vasen');
        t1.anchor.set(0.5);

        var t2 = game.add.text(buttonRight.centerX, buttonRight.centerY, 'Oikea');
        t2.anchor.set(0.5);

            leftText = game.add.text(buttonLeft.centerX, 32, 'Painoit vasenta nappia!', { fontSize: '32px', fill: '#000' });
            leftText.anchor.set(0.5);
            leftText.alpha = 0;

            rightText = game.add.text(buttonRight.centerX, 32, 'Painoit oikeaa nappia!', { fontSize: '32px', fill: '#000' });
            rightText.anchor.set(0.5);
            rightText.alpha = 0;

    },
    
    update: function() {
            leftText.alpha -= 0.01;
            rightText.alpha -= 0.01;

            leftText.alpha = this.math.clamp(leftText.alpha, 0.0, 1.0);
            rightText.alpha = this.math.clamp(rightText.alpha, 0.0, 1.0);
    }
}

function HandleLeftClick() {
            leftText.alpha = 1;
}

function HandleRightClick() {
        rightText.alpha = 1;
}