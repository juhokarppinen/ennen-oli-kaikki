var conscriptwife_state = {

    create: function() {
        PLAYER.age = 20;
        var text = "Puolisosi saa valtiolta kirjeen: Hänen on ilmoittauduttava asepalvelukseen. Miehen ollessa 350-päiväisessä asepalveluksessaan "
        +"yrität tehdä kovasti töitä ja odotat hänen paluutaan.";
        
        var image            = 'conscriptbackground';
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('conscriptwife2');
    }
};