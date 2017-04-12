var torppa4_state = {

    create: function() {
        PLAYER.age = 21;
        PLAYER.movedtocity = true;

        var text = "Kosijoista ei ole pulaa, muttet oikein lämpene kenenkään suhteen. "
        +"Äitisi tuskailu tulevaisuutesi suhteen käy sietämättömäksi, joten päätät "
        +"sittenkin lähteä kaupunkiin kotiapulaisen paikkoja etsimään.";
        
        var image = "youthworkcountrybackground";
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('beforewar');
    }
}