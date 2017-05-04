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
        var infoText = "Huutolaisella tarkoitetaan koditonta tai orpoa, joka kunta huutokauppasi " +
        "vähiten korvausta vaativan ihmisen huollettavaksi. Uusi köyhäinhoitolaki astui voimaan " +
        "vuonna 1923, mutta osa kunnista jatkoi toimintaa Suomessa vielä 1930-luvulla." +
        "\n\nLähteet: 1) Tiesitkö tämän vaietun asian historiasta? Suomessa myytiin lapsia orjiksi. Artikkeli, studio55.fi " +
        "2) Kielitoimiston sanakirja";

        drawUItwoButtons(image, text, leftButtonLabel, rightButtonLabel, this, infoText);
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