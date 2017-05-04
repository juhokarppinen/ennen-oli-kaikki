var warend1_state = {

    create: function() {
        //just in case someone's age is still younger than this
        PLAYER.age = 27;
        var images = [GAME.add.sprite(0, 0, 'peace1940_01'),
              GAME.add.sprite(0, 0, 'peace1940_02'),
              GAME.add.sprite(0, 0, 'peace1944_01'),
              GAME.add.sprite(0, 0, 'peace1944_02')];

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

        var image = 'empty';
        // var image = 'conscriptbackground';
        
        var text = "Taistelut Suomen ja Neuvostoliiton välillä lakkaavat 4. syyskuuta 1944. Aselevon ehtoihin kuuluu alueluovutusten lisäksi, "
        +"että Suomi katkaisee suhteensa Saksaan ja ajaa saksalaiset sotilaat pois maasta. Sota jatkuu nyt entisiä aseveljiä vastaan.";
                
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
        PREVIOUS_BACKGROUND = 'peace1944_02';
    },

    centerButtonHandler: function () {
        GAME.state.start('warend2');
    }
}