var homechores1_state = {

    create: function() {
        PLAYER.age = 12;

        if (PLAYER.class === "poor") {
            //todo: add city/country split
            var image     = 'homechorescountrybackground';
            var imageInfo = "";
            var text = "Olet hyvä apu kotona, mutta perheeseen syntyy uusi vauva. "
                        +"Perheesi rahatilanne on niin tiukka, että joudut etsimään työtä muualta. "
                        +"Hankkiudutko piiaksi naapuritilalle vai lähdetkö kaupunkiin?";
            var leftButtonLabel  = "Kaupunkiin";
            var rightButtonLabel = "Naapuritilalle";
        } else if(PLAYER.noschool === false) {
            var image     = 'homechores1background';
            var imageInfo = "";
            var text      = "Vaikka perheesi tyrmäsi koulunkäynnin, sinulle tarjottiin vapaapaikkaa oppikoulusta. "
                            +"Sairaanhoitajaunelmasi voisi sittenkin toteutua! Yritätkö vakuuttaa isäsi opinnoistasi?";
            var leftButtonLabel  = "Kyllä";
            var rightButtonLabel = "Ei";
        } else {
            var image     = 'homechores1background';
            var imageInfo = "";
            var text      = "Veljesi teki tihutöitä naapurissa, ja nyt naapuri tuli vihaisena käymään. "
            + "Äitisi ei tiedä ketä uskoa, mutta sinä näit mitä tapahtui. Ilmiannatko veljesi?";
            var leftButtonLabel  = "Kyllä";
            var rightButtonLabel = "Ei";
        }

        drawUItwoButtons(image, imageInfo, text, leftButtonLabel, rightButtonLabel, this);
    },

    leftButtonHandler: function () {
        if(PLAYER.class === "poor") {
            GAME.state.start('citywork1');
        } else if(PLAYER.noschool === true) {
            GAME.state.start('death');
        } else {
            GAME.state.start('studies1');
        }
    },

    rightButtonHandler: function () {
        if(PLAYER.class === "poor") {
            GAME.state.start('servant3');
        } else if(PLAYER.noschool === true) {
            GAME.state.start('death');
        } else {
            GAME.state.start('homechores2');
        }
    }
}
