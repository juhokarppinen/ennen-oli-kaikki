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
        var infoText = "Ylimääräinen kertausharjoitus tarkoitti sitä, että palvelukseen kutsuttiin lähes kaikki " +
        "reserviin kuuluvat alle 60-vuotiaat upseerit ja alle 40-vuotiaat aliupseerit sekä miehistö. " +
        "Yli kuukauden kestäneissä harjoituksissa suomalaisten puolustuskyky -ja tahto lujittuivat " +
        "ennen kuin toinen maailmansota Suomessa alkoi.\n\nLähde: Ylimääräinen harjoitus kokoaa armeijan rajalle. Artikkeli. yle.fi";

        drawUIsingleButton(image, text, centerButtonLabel, this, infoText);
    },

    centerButtonHandler: function () {
        GAME.state.start('beginwar2');
    }
}