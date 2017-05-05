var barn2_state = {

    create: function() {
        if(PLAYER.gender === "male") {
            var text = "Talon emäntä pyytää sinut puheilleen kesken työpäivän. "
            +"Kun saavut talolle hattu kourassa, kohtaat heilasi, jota et ole tavannut sitten kuutamouinnin. "
            +"Käy ilmi, että hän on raskaana. Talon emäntä on tiukkana - sinun on kannettava vastuu. "
            +"Häät sovitaan seuraavalle viikolle.";
        } else {
            var text = "Ladossa vietetty hetki kaduttaa, ja olet vältellyt heilaasi sen jälkeen. "
            +"Muutaman kuukauden kuluttua huomaat kauhuksesi olevasi raskaana ja "
            +"huhut tilastasi kantautuvat talon emännän korviin. Hän uhkaa potkia teidät molemmat pellolle, "
            +"jos ette mene naimisiin. Sinun on suostuttava rengin kosintaan.";
        }

        var image            = 'barnbackground';
        var centerButtonLabel  = "Jatka";
        var infoText = "Aviottomien lasten asema parani vuonna 1922, kun eduskunta vahvisti " +
        "lain avioliiton ulkopuolella syntyneistä lapsista. Sen mukaan kuntien oli perustettava " +
        "lastenvalvojan virka, jonka tehtävänä oli valvoa muun muassa elatusmaksujen suorittamista " +
        "17-vuotiaaksi asti.\n\nLähde: Arkistojen portti. Lapsuuteen liittyvät asiakirjat. wiki.narc.fi";

        drawUIsingleButton(image, text, centerButtonLabel, this, infoText);
    },

    centerButtonHandler: function () {
        if(PLAYER.gender === "male") {
            GAME.state.start('weddingcountry');
        } else {
            GAME.state.start('weddingcountry');
        }
    }
};