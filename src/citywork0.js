var citywork0_state = {

    create: function() {
        PLAYER.age = 13;
        var text = "Luku- ja laskutaidottoman tytön ei ole helppoa löytää töitä kaupungista. Rahasi ja voimasi ovat lopussa. "
        +"Kuulet, että SOK:n makeistehtaalla Vaajakoskella saattaisi kuitenkin olla töitä. "
        +"Lähdetkö kokeilemaan onneasi vai palaatko jo kotipitäjääsi varmempien piianpaikkojen perään?";
        
        this.backgroundSound = GAME.add.audio('ambience-city');
        this.backgroundSound.loop = true;
        this.backgroundSound.volume = 0.15;
        this.backgroundSound.play();
        
        var image = 'citybackground';
        var leftButtonLabel = "Kotiin";
        var rightButtonLabel = "Makeistehtaalle";

        drawUItwoButtons(image, text, leftButtonLabel, rightButtonLabel, this);
    },

    leftButtonHandler: function () {
        this.backgroundSound.stop();
        GAME.state.start('servant5');
    },

    rightButtonHandler: function () {
        this.backgroundSound.stop();
        GAME.state.start('citywork2');
    }
}