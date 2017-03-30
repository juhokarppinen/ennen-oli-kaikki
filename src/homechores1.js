var homechores1_state = {

    create: function() {
        PLAYER.age = 12;

        if (PLAYER.class === "poor") {
            var image     = 'homechores1background';
            var text = "Olet hyvä apu kotona, mutta perheeseen syntyy uusi vauva. "
                    +"Perheesi rahatilanne on niin tiukka, että joudut etsimään työtä. "
                    +"Lähdetkö töihin vaneritehtaalle vai kivääritehtaalle?";
            var leftButtonLabel  = "Vaneri";
            var rightButtonLabel = "Kivääri";
        } else if(PLAYER.noschool === false) {
            var image     = 'homechores1background';
            var text      = "Vaikka perheesi tyrmäsi koulunkäynnin, haluaisit ottaa vapaapaikan vastaan. "
                            +"Sairaanhoitajaunelmasi voisi sittenkin toteutua! Yritätkö vakuuttaa isäsi opinnoistasi?";
            var leftButtonLabel  = "Kyllä";
            var rightButtonLabel = "Ei";
        }

        drawUItwoButtons(image, text, leftButtonLabel, rightButtonLabel, this);
    },

    leftButtonHandler: function () {
        if(PLAYER.class === "poor") {
            GAME.state.start('death');
        } else {
            GAME.state.start('studies1');
        }
    },

    rightButtonHandler: function () {
        if(PLAYER.class === "poor") {
            GAME.state.start('death');
        } else {
            GAME.state.start('homechores2');
        }
    }
}
