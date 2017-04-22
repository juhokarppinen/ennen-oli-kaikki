var youthwork1_state = {

    create: function() {
        PLAYER.age = 12;

        var image = 'childworkcountrybackground';
        if(PLAYER.gender === "female") {
                var gendertext = "pikkupiiaksi";
            } else {
                var gendertext = "pikkurengiksi";
        }
        var text = "Sinulle on syntynyt lisää pikkusisaruksia, eikä vanhemmillasi ole varaa elättää teitä kaikkia. "
                +"Keskimmäiset lähetetään huutolaisiksi ja sinut pannaan työnhakuun. "
                + "Hankkiudutko "+gendertext+" naapuritilalle vai lähdetkö kaupunkiin etsimään töitä?";
        var leftButtonLabel  = "Tilalle";
        var rightButtonLabel = "Kaupunkiin";

        drawUItwoButtons(image, text, leftButtonLabel, rightButtonLabel, this);
    },

    leftButtonHandler: function () {
        GAME.state.start('servant2');
    },

    rightButtonHandler: function () {
        if(PLAYER.gender === "female") {
            GAME.state.start('citywork0');
        } else {
            GAME.state.start('citywork3');
        }
    }
}