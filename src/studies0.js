var studies0_state = {

    create: function() {
        var text = "Vanhempasi kieltävät sinulta kaikki vapaa-ajan huvitukset ja palkkaavat sinulle yksityisopettajan iltojesi ratoksi. "
        +"Parannatko tuloksiasi pääsykokeessa?";

        var leftButtonLabel = "Kyllä";
        var rightButtonLabel = "Ei";
        var image           = 'schoolbackground';

        drawUItwoButtons(image, text, leftButtonLabel, rightButtonLabel, this);
    },

    leftButtonHandler: function () {
        GAME.state.start('studies1');
    },

    rightButtonHandler: function () {
        if(PLAYER.gender === "female" && PLAYER.location.name !== "Jyväskylä") {
            GAME.state.start('homechores0');
        } else {
            GAME.state.start('apprentice0');
        }
    }
}