var war1_state = {

    create: function() {
        if(PLAYER.noconscript === true) {
            var text = "Lokakuussa 1939 alkaa liikekannallepano. Yllättäen sinutkin kutsutaan mukaan rintamalle.";
        } else {
            var text = "Lokakuussa 1939 alkaa liikekannallepano. Lähdet suoraan suurharjoituksista valmistautumaan sotaan. ";
        }
        
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