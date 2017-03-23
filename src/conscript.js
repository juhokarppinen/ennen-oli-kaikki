var conscript_state = {

    create: function() {
        PLAYER.age = 20;
        var text = "Saat valtiolta kirjeen: Sinun on ilmoittauduttava asepalvelukseen. 350-päiväinen varusmiespalveluksesi alkaa pian.";
        
        //todo: add army picture
        var image            = 'youthworkcountrybackground';
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('beginwar');
    }
}