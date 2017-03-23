var homechores1_state = {

    create: function() {
        PLAYER.age = 12;

        if (PLAYER.class === "poor") {
            //todo: add city/country split
            if(PLAYER.location.name === "Jyväskylä") {
                var image     = 'homechores1background';
                var text = "Olet hyvä apu kotona, mutta perheeseen syntyy uusi vauva. "
                        +"Perheesi rahatilanne on niin tiukka, että joudut etsimään työtä. "
                        +"Lähdetkö töihin vaneritehtaalle vai kivääritehtaalle?";
                var leftButtonLabel  = "Vaneri";
                var rightButtonLabel = "Kivääri";
            } else {
                var image     = 'homechorescountrybackground';
                var text = "Olet hyvä apu kotona, mutta perheeseen syntyy uusi vauva. "
                        +"Perheesi rahatilanne on niin tiukka, että joudut etsimään työtä muualta. "
                        +"Hankkiudutko piiaksi naapuritilalle vai lähdetkö kaupunkiin?";
                var leftButtonLabel  = "Kaupunkiin";
                var rightButtonLabel = "Naapuritilalle";
            }
        } else if(PLAYER.noschool === false) {
            var image     = 'homechores1background';
            var text      = "Vaikka perheesi tyrmäsi koulunkäynnin, sinulle tarjottiin vapaapaikkaa oppikoulusta. "
                            +"Sairaanhoitajaunelmasi voisi sittenkin toteutua! Yritätkö vakuuttaa isäsi opinnoistasi?";
            var leftButtonLabel  = "Kyllä";
            var rightButtonLabel = "Ei";
        } else {
            var image     = 'homechores1background';
            var text      = "Veljesi teki tihutöitä naapurissa, ja nyt naapuri tuli vihaisena käymään. "
            + "Äitisi ei tiedä ketä uskoa, mutta sinä näit mitä tapahtui. Ilmiannatko veljesi?";
            var leftButtonLabel  = "Kyllä";
            var rightButtonLabel = "Ei";
        }

        drawUItwoButtons(image, text, leftButtonLabel, rightButtonLabel, this);
    },

    leftButtonHandler: function () {
        if(PLAYER.class === "poor") {
            if(PLAYER.location.name === "Jyväskylä") {
                GAME.state.start('death');
            } else {
                GAME.state.start('citywork1');
            }
        } else if(PLAYER.noschool === true) {
            GAME.state.start('death');
        } else {
            GAME.state.start('studies1');
        }
    },

    rightButtonHandler: function () {
        if(PLAYER.class === "poor") {
            if(PLAYER.location.name === "Jyväskylä") {
                GAME.state.start('death');
            } else {
                GAME.state.start('servant3');
            }
        } else if(PLAYER.noschool === true) {
            GAME.state.start('death');
        } else {
            GAME.state.start('homechores2');
        }
    }
}
