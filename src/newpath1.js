var newpath1_state = {

    create: function() {
        if(PLAYER.widowboss === true) {
            PLAYER.age = 28;
            var image = "citybackground";
            var text = "Vaikka olet viimeisilläsi raskaana, käyt siivoamassa tehtaanjohtajan taloa. Miehesi haluaa sinun jäävän kotiin, "
            +"sillä hän on saanut ylennyksen. Pärjäätte kyllä hänen palkallaan.";
        } else {
            var image = "lottabackground";
            var text = "Rauhanehtojen mukaan niin suojeluskunnat kuin lottajärjestökin tuli lakkauttaa. Teistä ylistetyistä lotista" +
                "tuli hyljeksittyjä. Pahat kielet vihjailevat kaikenlaista lottien ja saksalaissotilaiden suhteista. Poltat lottapukusi " +
                "ja lottajärjestöön liittyvät paperit. Viisi vuotta historiaasi palaa papereiden mukana.";
        }
                
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('newpath2');
    }
};