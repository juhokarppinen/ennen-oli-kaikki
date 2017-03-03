var school1_state = {

    create: function() {
        var background = GAME.add.sprite(0, 0, 'schoolbackground');
        background.alpha = 0;
        
        PLAYER.age = 7;
        displayNameAndAge();

        var box = GAME.add.sprite(GAME.world.centerX*0.3, GAME.world.centerY*0.2, 'box');
        box.alpha = 0;

        var text = "Vuonna 1921 Suomessa säädettiin laki yleisestä oppivelvollisuudesta, joten aloitat koulutiesi sinä syksynä, kun täytät seitsemän vuotta. Vuosi on 1924.";

        var text1 = GAME.add.text(GAME.world.centerX * 0.4, GAME.world.centerY * 0.3, text, STYLE);
        text1.alpha = 0;

        var continueButton = GAME.add.button(GAME.world.centerX, GAME.world.centerY * 1.4, 'button');
        continueButton.anchor.set(0.5);
        continueButton.alpha = 0;
        var t1 = GAME.add.text(continueButton.centerX, continueButton.centerY, 'Jatka');
        t1.anchor.set(0.5);
        t1.alpha = 0;
        continueButton.inputEnabled = true;
        continueButton.events.onInputDown.add(continueFromSchool1, this);

        //fade in
        tweenElements(background, [box, continueButton, text1, t1]);

    },

    update: function() {
    }
}

function continueFromSchool1 () {
    GAME.state.start('school2');
}