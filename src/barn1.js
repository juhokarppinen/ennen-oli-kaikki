var barn1_state = {

    create: function() {
        PLAYER.age = 19;

        if (PLAYER.gender === "male") {
            PLAYER.crush = pickName("female");
            var servant = "piika ";
        } else {
            PLAYER.crush = pickName("male");
            var servant = "renki ";
        }

        var text = "Vuodet ovat kuluneet nopeasti ja lähiympäristöön on alkanut muodostunut nuoria pareja. "
        +"Viime aikoina talon " + servant + PLAYER.crush + " on silmäillyt sinuakin " +
                   "vihjailevasti. Kutsutko hänet kanssasi heinälatoon?";

        var image            = 'youthworkcountrybackground';
        var imageInfo        = "Juhani Ahola";
        var leftButtonLabel  = "Kyllä";
        var rightButtonLabel = "Ei";

        drawUItwoButtons(image, imageInfo, text, leftButtonLabel, rightButtonLabel, this);
    },

    leftButtonHandler: function () {
        GAME.state.start('barn2');
    },

    rightButtonHandler: function () {
        GAME.state.start('barn4');
    }
}