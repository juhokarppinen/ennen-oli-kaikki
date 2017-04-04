var conscriptwife_state = {

    create: function() {
        PLAYER.age = 20;
        var text = "Puolisosi saa valtiolta kirjeen: Hänen on ilmoittauduttava asepalvelukseen. Miehen ollessa 350-päiväisessä asepalveluksessaan "
        +"jäät yksin kotiin lapsen kanssa ja odotat hänen paluutaan.";
        
        //todo: add army picture
        var image            = 'youthworkcountrybackground';
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('beginwar');
    }
}