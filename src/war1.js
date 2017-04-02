var war1_state = {

    create: function() {
        var text = "Lokakuussa 1939 alkaa liikekannallepano. Lähdet suoraan suurharjoituksista valmistautumaan sotaan. " 
        
        if("undefined" !== typeof PLAYER.spouse) {
            text += "Samalla perheeltäsi otetaan hevoset pois Puolustusvoimien käyttöön ";
        }
                
        //todo: add army picture
        var image            = 'youthworkcountrybackground';
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('death');
    }
}