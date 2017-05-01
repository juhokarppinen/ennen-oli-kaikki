var warcrush1_state = {

    create: function() {

        var image = 'barnbackground';
        PLAYER.crush = pickName("male");
        var text = name+" on vaihtanut kirjeitä kanssasi tiiviisti loppukesästä asti. Hän "
        +"raportoi sinulle paitsi rintaman tapahtumista, myös tulevaisuuden suunnitelmistaan, "
        +"joihin vihjaa sinun liittyvän. Joulukuussa "+name+" pääsee viimein lomalle ja pyytää päästä tapaamaan sinua. Suostutko?";
        var leftButtonLabel  = "Kyllä";
        var rightButtonLabel  = "Ei";

        drawUItwoButtons(image, text, leftButtonLabel, rightButtonLabel, this);
    },

    leftButtonHandler: function () {
        GAME.state.start('warcrush2');
    },

    rightButtonHandler: function () {
        GAME.state.start('warcrush3');
    }
}