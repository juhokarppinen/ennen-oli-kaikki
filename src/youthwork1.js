var youthwork1_state = {

    create: function() {
        PLAYER.age = 12;

        if(PLAYER.location.name === "Jyväskylä") {
            var image = 'youthworkcitybackground';
            text = "Saat töitä apurina verstaalla. Päivät ovat pitkiä mutta olet " +
                   "nopea oppimaan. Pian sinulle tarjotaan oppipojan paikkaa. " +
                   "Otatko sen vastaan?";
        } else if(PLAYER.noschool === true) {
            var image = 'youthworkcountrybackground';
            text = "Perheesi rahatilanne on niin tiukka, että joudut etsimään työtä " +
                   "muualta. Sinulle tarjotaan rengin paikkaa naapuripitäjästä. " +
                   "Otatko sen vastaan?";
        } else {
            var image = 'youthworkcitybackground';
            text = "Vaikka perheesi tyrmäsi koulunkäynnin, vapaapaikka oppikoulusta " +
                   "on vielä hetken avoinna. Otatko sen salaa vastaan?";
        }
        
        var leftButtonLabel  = "Kyllä";
        var rightButtonLabel = "Ei";

        drawUItwoButtons(image, text, leftButtonLabel, rightButtonLabel, this);
    },

    leftButtonHandler: function () {
        if(PLAYER.location.name === "Jyväskylä") {
            GAME.state.start('apprentice');
        } else if(PLAYER.location.name !== "Jyväskylä" && PLAYER.class === "poor") {
            GAME.state.start('servant2');
        } else {
            GAME.state.start('servant1');
        }
    },

    rightButtonHandler: function () {
        if(PLAYER.location.name === "Jyväskylä") {
            GAME.state.start('youthwork2');
        } else if(PLAYER.location.name !== "Jyväskylä" && PLAYER.class === "poor") {
            GAME.state.start('youthwork2');
        } else {
            GAME.state.start('homechores2');
        }
    }
}