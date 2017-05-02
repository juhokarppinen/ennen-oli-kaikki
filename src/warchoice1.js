var warchoice1_state = {

    create: function() {

        var image = 'homechorescountrybackground';
        var text = "Pääset livahtamaan viljavarastoon kenenkään huomaamatta. "
        +"Mustassa pörssissä pienestäkin viljamäärästä voisi saada hyvät rahat. Varastatko?";
        var leftButtonLabel  = "Kyllä";
        var rightButtonLabel  = "Ei";

        drawUItwoButtons(image, text, leftButtonLabel, rightButtonLabel, this);
    },

    leftButtonHandler: function () {
        GAME.state.start('warchoice2');
    },

    rightButtonHandler: function () {
        GAME.state.start('warchoice3');
    }
}