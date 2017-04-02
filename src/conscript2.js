var conscript2_state = {

    create: function() {
        PLAYER.age = 21;
        var text = "Viimein 350-päiväinen asepalveluksesi päättyy ja pääset "
        +"kotiutumaan. ";
        if ("undefined" !== typeof PLAYER.spouse) {
            text += PLAYER.spouse + " toivottaa sinut tervetulleeksi kotiin "
            +"helpottunut hymy kasvoillaan.";
        }
        
        //todo: add army picture
        var image            = 'youthworkcountrybackground';
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('conscript3');
    }
}