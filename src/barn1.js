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

        var text = "Kauan odotetut tanssit saapuvat, ja kaikki seudun nuoret ovat paikalla. "
        +"Se tuttu " + servant + PLAYER.crush + " on silmäillyt sinua " +
        "merkitsevästi koko illan. Lähdetkö hänen kanssaan heinälatoon?";

        var image            = 'youthworkcountrybackground';
        var leftButtonLabel  = "Kyllä";
        var rightButtonLabel = "Ei";

        drawUItwoButtons(image, text, leftButtonLabel, rightButtonLabel, this);
    },

    leftButtonHandler: function () {
        GAME.state.start('barn2');
    },

    rightButtonHandler: function () {
        GAME.state.start('barn4');
    }
}