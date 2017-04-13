var war1_state = {

    create: function() {
        var text = "Lähdet suoraan suurharjoituksista valmistautumaan sotaan. ";
        
        if("undefined" !== typeof PLAYER.spouse) {
            text += "Samalla taloltasi otetaan hevoset Puolustusvoimien käyttöön. ";
        }
                
        var image            = 'warbackground';
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('war2');
    }
}