var apprentice0_state = {

    create: function() {
        PLAYER.age = 14;

        var text = "Kun opiskelu ei vaan tunnu sujuvan, vanhempasi lähettävät sinut apteekkarienosi apulaiseksi.";
        
        var image = 'youthworkcitybackground';
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('death');
    }
}