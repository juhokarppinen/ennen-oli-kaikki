var newpath1_state = {

    create: function() {
        if(PLAYER.widowboss === true) {
            PLAYER.age = 28;
            var image = "citybackground";
            var text = "Vaikka olet viimeisilläsi raskaana, käyt siivoamassa tehtaanjohtajan taloa. Miehesi haluaa sinun jäävän kotiin, "
            +"sillä hän on saanut ylennyksen, ja pärjäätte kyllä hänen palkallaan.";
        } else {
            var image = "helsinkiunibackground";
            var text = "Rauhanehtojen mukaan niin suojeluskunnat kuin lottajärjestökin tuli lakkauttaa. Yhtäkkiä teitä lottia, joita ennen ylistettiin työstänne "
            +"isänmaan puolesta, hyljeksitään. Pahat kielet vihjailevat kaikenlaista lottien ja saksalaissotilaiden suhteista. Poltat lottapukusi ja kaikki paperit, "
            +"jotka kertovat kuuluneesi lottajärjestöön. Viisi vuotta historiaasi palaa papereiden mukana.";
        }
                
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('death');
    }
}