var barn2_state = {

    create: function() {
        if(PLAYER.gender === "male") {
            var text = "Kuhertelu heinäladossa oli ikimuistoista, mutta pian " + 
                       PLAYER.crush + " kertoo olevansa raskaana! Pyydätkö " +
                       "häntä vaimoksesi?";
        } else {
            var text = "Kuhertelu heinäladossa oli ikimuistoista, mutta pian " +
                       "huomaat olevasi raskaana! " + PLAYER.crush + " tulee " +
                       "vastaan ladon edustalla, kerrotko raskaudesta?";
        }

        var image            = 'youthworkcountrybackground';
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