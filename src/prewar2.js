var prewar2_state = {

    create: function() {
        if(PLAYER.location.name !== "Jyväskylä" && PLAYER.movedtocity !== true && PLAYER.class === "poor") {
            var image = "youthworkcountrybackground";
            var text = "Kirjeen luettuaan miehesi ei sano koko iltana sanaakaan. Hän ottaa esiin piirongin ylälaatikkoon piilottamansa viinapullon "
            +"ja juo sen tyhjäksi yhdeltä istumalta. Seuraavana päivänä hän pakkaa reppunsa ja lähtee.";
        } else {
            image = "countrybackground";
            var text = "Suunnitelmiin tulee muutos, kun sinut määrätään ylimääräisiin kertausharjoituksiin vain muutamaa päivää ennen juhannusta.";
        }
                
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('beginwar2');
    }
}