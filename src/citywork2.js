var citywork2_state = {

    create: function() {
        PLAYER.age = 14;
        PLAYER.movedtocity = true;
        var text = "Mikä onni, sait kuin saitkin paikan makeistehtaalta. Tehtaalle on juuri hankittu uusi lakritsikone, "
        +"jonka välittömässä läheisyydessä tulet viettämään vielä monta vuotta.";

        var image               = 'candyfactorybackground';
        var centerButtonLabel   = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('beginwar');
    }
}
