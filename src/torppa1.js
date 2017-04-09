var torppa1_state = {

    create: function() {
        PLAYER.age = 12;

        var text = "Sisällissodan jälkeen, toukokuussa 1918 astui voimaan torpparilaki, jonka myötä perheellesi "
        +"tarjoutui mahdollisuus lunastaa torppa siihen kuuluvine maineen omakseen. Koko perheesi "
        +"tekee kovasti töitä ja säästää kaiken ylimääräisen, jotta haave omasta tuvasta ilman taksvärkkipäiviä toteutuisi.";
        
        var image = "youthworkcountrybackground";
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('torppa2');
    }
}