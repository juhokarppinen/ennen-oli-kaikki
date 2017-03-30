var youthwork1_state = {

    create: function() {
        PLAYER.age = 12;

        if(PLAYER.location.name === "Jyväskylä") {
            var image = 'youthworkcitybackground';
            var text = "Saat töitä apurina verstaalla. Päivät ovat pitkiä mutta olet " +
                   "nopea oppimaan. Pian sinulle tarjotaan oppipojan paikkaa. " +
                   "Otatko sen vastaan?";
        var leftButtonLabel  = "Kyllä";
        var rightButtonLabel = "Ei";
        } else if(PLAYER.noschool === true) {
            var image = 'youthworkcountrybackground';
            if(PLAYER.gender === "female") {
                    var gendertext = "pikkupiiaksi";
                } else {
                    var gendertext = "pikkurengiksi";
            }
            var text = "Sinulle on syntynyt lisää pikkusisaruksia eikä vanhemmillasi ole varaa elättää teitä kaikkia. "
                    +"Keskimmäiset lähetetään huutolaisiksi ja sinut pannaan työnhakuun. "
                    + "Hankkiudutko "+gendertext+" naapuritilalle vai lähdetkö kaupunkiin etsimään töitä?";
            var leftButtonLabel  = "Tilalle";
            var rightButtonLabel = "Kaupunkiin";
        } else {
            var image = 'youthworkcountrybackground';
            var text = "Vaikka perheesi tyrmäsi koulunkäynnin, vapaapaikka oppikoulusta " +
                   "on vielä hetken avoinna. Otatko sen salaa vastaan?";
           var leftButtonLabel  = "Kyllä";
           var rightButtonLabel = "Ei";
        }

        drawUItwoButtons(image, text, leftButtonLabel, rightButtonLabel, this);
    },

    leftButtonHandler: function () {
        if(PLAYER.location.name === "Jyväskylä") {
            GAME.state.start('apprentice');
        } else if(PLAYER.noschool === true) {
            GAME.state.start('servant2');
        } else {
            GAME.state.start('servant1');
        }
    },

    rightButtonHandler: function () {
        if(PLAYER.location.name === "Jyväskylä") {
            GAME.state.start('youthwork2');
        } else if(PLAYER.noschool === true) {
            GAME.state.start('citywork0');
        } else {
            GAME.state.start('homechores2');
        }
    }
}