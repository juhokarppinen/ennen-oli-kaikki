var studies0_state = {

    create: function() {
        var text = "Vanhempasi kieltävät sinulta kaikki vapaa-ajan huvitukset ja palkkaavat sinulle yksityisopettajan iltojesi ratoksi. "
        +"Parannatko tapasi, jotta pärjäisit pääsykokeissa paremmin?";

        var leftButtonLabel = "Kyllä";
        var rightButtonLabel = "Ei";
        var image           = 'schoolbackground';

        drawUItwoButtons(image, text, leftButtonLabel, rightButtonLabel, this);
    },

    leftButtonHandler: function () {
        GAME.state.start('studies5');
    },

    rightButtonHandler: function () {
        GAME.state.start('homechores0');
    }
};