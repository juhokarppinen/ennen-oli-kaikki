var citywork0_state = {

    create: function() {
        if(PLAYER.gender === "female") {
            var gendertext = "tytön";
            var gendertext2 = "piianpaikkojen";
        } else {
            var gendertext = "pojan";
            var gendertext2 = "renginpaikkojen";
        }
        var text = "Luku- ja laskutaidottoman "+gendertext+" ei ole helppoa löytää töitä kaupungista. Rahasi ja voimasi ovat lopussa. "
        +"Kuulet, että SOK:n makeistehtaalla Vaajakoskella saattaisi kuitenkin olla töitä. "
        +"Lähdetkö kokeilemaan onneasi vai palaatko jo kotipitäjääsi varmempien "+gendertext2+" perään?";
        
        var image     = 'citybackground';
            
        var leftButtonLabel = "Kotiin";
        var rightButtonLabel = "Makeistehtaalle";

        drawUItwoButtons(image, text, leftButtonLabel, rightButtonLabel, this);
    },

    leftButtonHandler: function () {
        GAME.state.start('death');
    },

    rightButtonHandler: function () {
        GAME.state.start('death');
    }
}