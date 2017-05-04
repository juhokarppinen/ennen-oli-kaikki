var map1_state = {

    create: function() {
        //PLACEHOLDER! TODO: Add map with animation
        // Actually we probably need to have two map animations: one for 1940
        // and another for 1944.
        var images = [GAME.add.sprite(0, 0, 'peace1940_01'),
                      GAME.add.sprite(0, 0, 'peace1940_02'),
                      GAME.add.sprite(0, 0, 'peace1944_01'),
                      GAME.add.sprite(0, 0, 'peace1944_02')];
        var image = 'empty';

        var tweenLength = 3000;
        var tweenDelayScalar = 0;
        var tweenDelayConst = 0;

        images.forEach(img => { 
            img.alpha = 0; 
            GAME.add.tween(img).to(
                {alpha: 1}, 
                tweenLength, 
                Phaser.Easing.Linear.None, 
                true, 
                tweenDelayConst + tweenLength * tweenDelayScalar++);
        });


        var text = "Suomi menetti sodassa Karjalan.";
                
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
        PREVIOUS_BACKGROUND = 'peace1944_02';
    },

    centerButtonHandler: function () {
        if(PLAYER.gender === "female") {
            GAME.state.start('peacetime2');
        } else {
            if(PLAYER.noconscript === true) {
                GAME.state.start('peacetime2');
            } else {
                GAME.state.start('peacesoldier2');
            }
        }
    }
}