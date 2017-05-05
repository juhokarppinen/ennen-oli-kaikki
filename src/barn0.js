var barn0_state = {

    create: function() {
        PLAYER.age = 19;
        PLAYER.crush = pickName("female");
        var text = "Naapurin keittiöapulainen "+PLAYER.crush+" on herättänyt kiinnostuksesi. Olet tanssittanut häntä pariin otteeseen iltamissa "
        +"ja olet päässyt saatillekin. Pyydätkö häntä vaimoksesi?";
        var image            = 'barn2background';
        var leftButtonLabel  = "Kyllä";
        var rightButtonLabel = "Ei";

        drawUItwoButtons(image, text, leftButtonLabel, rightButtonLabel, this);
    },

    leftButtonHandler: function () {
        GAME.state.start('weddingcountry');
    },

    rightButtonHandler: function () {
        GAME.state.start('workhome');
    }
};