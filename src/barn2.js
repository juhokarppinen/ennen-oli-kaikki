var barn2_state = {

    create: function() {
        if(PLAYER.gender === "male") {
            var text = "Talon emäntä pyytää sinut puheilleen kesken työpäivän. "
            +"Kun saavut talolle hattu kourassa, kohtaat heilasi, jota et ole tavannut sitten tanssien. "
            +"Käy ilmi, että hän on raskaana. Talon emäntä on tiukkana. Sinun on kannettava vastuu. "
            + "Pyydätkö häntä vaimoksesi?";
        } else {
            var text = "Yö ladossa kaduttaa ja olet vältellyt renkiä sen jälkeen. "
            +"Muutaman kuukauden kuluttua huomaat kauhuksesi olevasi raskaana. "
            +"Et voi piilotella raskauttasi enää kauaa, ja huhut tilastasi kantautuvat talon emännän korviin. "
            +"Hän pyytää sinut puheilleen ja haluaa tietää, kuka on isä. Kerrotko?";
        }

        var image            = 'barnbackground';
        var leftButtonLabel  = "Kyllä";
        var rightButtonLabel = "Ei";

        drawUItwoButtons(image, text, leftButtonLabel, rightButtonLabel, this);
    },

    leftButtonHandler: function () {
        GAME.state.start('barn3');
    },

    rightButtonHandler: function () {
        if(PLAYER.gender === "male") {
            GAME.state.start('workaway');
        } else {
            GAME.state.start('child1');
        }
    }
}