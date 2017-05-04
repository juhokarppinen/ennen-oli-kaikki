var map1_state = {

    create: function() {
        //PLACEHOLDER! TODO: Add map with animation
        var images = [GAME.add.sprite(0, 0, 'peace1940_01'),
                      GAME.add.sprite(0, 0, 'peace1940_02'),
                      GAME.add.sprite(0, 0, 'peace1940_03'),
                      GAME.add.sprite(0, 0, 'peace1944_01'),
                      GAME.add.sprite(0, 0, 'peace1944_02'),
                      GAME.add.sprite(0, 0, 'peace1944_03')];
        var image = 'empty';

        var tweenLength = 2000;
        var tweenDelayScalar = 0;
        var tweenDelayConst = 1000;

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