var barn2_state = {

    create: function() {
        if(PLAYER.gender === "male") {
            var text = "Talon emäntä pyytää sinut puheilleen kesken työpäivän. "
            +"Kun saavut talolle hattu kourassa, kohtaat heilasi, jota et ole tavannut sitten kuutamouinnin. "
            +"Käy ilmi, että hän on raskaana. Talon emäntä on tiukkana. Sinun on kannettava vastuu. "
            +"Häät sovitaan seuraavalle viikolle.";
        } else {
            var text = "Ladossa vietetty hetki kaduttaa, ja olet vältellyt heilaasi sen jälkeen. "
                +"Muutaman kuukauden kuluttua huomaat kauhuksesi olevasi raskaana. "
                +"Huhut tilastasi kantautuvat talon emännän korviin. Hän uhkaa potkia teidät molemmat pellolle, "
                +"jos ette mene naimisiin, joten sinun on suostuttava rengin kosintaan.";
        }

        var image            = 'barnbackground';
        var centerButtonLabel  = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        if(PLAYER.gender === "male") {
            GAME.state.start('weddingcountry');
        } else {
            GAME.state.start('barn3');
        }
    }
}