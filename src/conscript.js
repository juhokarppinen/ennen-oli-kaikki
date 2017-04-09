var conscript_state = {

    create: function() {
        PLAYER.age = 20;
        var text = "Saat valtiolta kirjeen: Sinun on ilmoittauduttava asepalvelukseen.";
        if(PLAYER.university === true) {
            text += " Opintosi keskeytyvät.";
        }
        
        var image            = 'conscriptbackground';
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('conscript2');
    }
}