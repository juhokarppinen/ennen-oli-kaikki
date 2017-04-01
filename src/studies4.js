var studies4_state = {

    create: function() {
        var text = "Vanhempasi kieltävät sinulta kaikki vapaa-ajan huvitukset ja "
        +"palkkaavat sinulle yksityisopettajan iltojesi ratoksi. Kotiopetus tuottaa "

        if(PLAYER.location.name === "Jämsä") {
        }else {
            if(PLAYER.gender === "female") {
            } else {
            }
        }

        var centerButtonLabel = "Jatka";
        var image           = 'schoolbackground';

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function() {
        GAME.state.start('studies2');
    }
}
