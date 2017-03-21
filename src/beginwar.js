var beginwar_state = {

    create: function() {
        PLAYER.age = 22;
        var text = "Keski-Suomalainen: SOTA ALKAA!";
        PLAYER.causeofdeath = "sota";
        
        // todo: pick war picture
        var image            = 'youthworkcountrybackground';
        var imageInfo        = "Juhani Ahola";
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, imageInfo, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('death');
    }
}