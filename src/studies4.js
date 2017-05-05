var studies4_state = {

    create: function() {
        var text = "Vanhempasi kieltävät sinulta kaikki vapaa-ajan huvitukset ja "
        +"palkkaavat sinulle yksityisopettajan iltojesi ratoksi. Kotiopetus tuottaa "
        +"tuloksia ja pääset kuin pääsetkin jatkamaan opintiellä. Aloitat oppikoulun ";

        if(PLAYER.gender === "female") {
            text += "Jyväskylän tyttökoulussa.";
        } else {
            text += "Jyväskylän lyseossa.";
        }

        var centerButtonLabel = "Jatka";
        var image           = 'schoolbackground';

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function() {
        GAME.state.start('studies2');
    }
};
