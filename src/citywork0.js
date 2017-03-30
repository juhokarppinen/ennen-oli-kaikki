var citywork1_state = {

    create: function() {
        if(PLAYER.gender === "female") {
            var gendertext = "tytön";
        } else {
            var gendertext = "pojan";
        }
        var text = "Luku- ja laskutaidottoman "+gendertext+" ei ole helppoa löytää töitä kaupungista. Rahasi ja voimasi ovat lopussa. "
        +"Kuulet, että SOK:n makeistehtaalla Vaajakoskella saattaisi kuitenkin olla töitä. "
        +"Lähdetkö kokeilemaan onneasi vai palaatko jo kotipitäjääsi varmempien piianpaikkojen perään?";
        
        var image     = 'citybackground';
            
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('dance1');
    }
}