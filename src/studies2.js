var studies2_state = {

    create: function() {
        var background = GAME.add.sprite(0, 0, 'studies1background');
        background.alpha = 0;
        
        PLAYER.age = 16;
        displayNameAndAge();

        var box = GAME.add.sprite(GAME.world.centerX*0.3, GAME.world.centerY*0.2, 'box');
        box.alpha = 0;

        var text = "Onneksi olkoon, tuore ylioppilas! Jatkatko opiskelemaan Helsingin yliopistoon vai otatko ohjat isäsi kaupassa?";

        var text1 = GAME.add.text(GAME.world.centerX * 0.4, GAME.world.centerY * 0.3, text, STYLE);
        text1.alpha = 0;

        var universityButton = GAME.add.button(GAME.world.centerX * 0.5, GAME.world.centerY * 1.4, 'button');
        universityButton.anchor.set(0.5);
        universityButton.alpha = 0;
        var t1 = GAME.add.text(universityButton.centerX, universityButton.centerY, "Yliopistoon");
        t1.anchor.set(0.5);
        t1.alpha = 0;
        universityButton.inputEnabled = true;
        universityButton.events.onInputDown.add(continueFromStudies2University, this);
        var workButton = GAME.add.button(GAME.world.centerX * 1.5, GAME.world.centerY * 1.4, 'button');
        workButton.anchor.set(0.5);
        workButton.alpha = 0;
        var t2 = GAME.add.text(workButton.centerX, workButton.centerY, "Töihin");
        t2.anchor.set(0.5);
        t2.alpha = 0;
        workButton.inputEnabled = true;
        workButton.events.onInputDown.add(continueFromStudies2Work, this);

        //fade in
        tweenElements(background, [box, universityButton, workButton, text1, t1, t2]);

    },

    update: function() {
    }
}

function continueFromStudies2University () {
    GAME.state.start('death');
}

function continueFromStudies2Work () {
    GAME.state.start('death');
}
