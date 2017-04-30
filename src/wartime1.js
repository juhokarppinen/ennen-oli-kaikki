var wartime1_state = {

    create: function() {
        
        if(PLAYER.gender === "male") {
          var image = 'youthworkcountrybackground';
          var text = "Olet kysyttyä työvoimaa kotikylälläsi. Sinua pyydetään avuksi milloin puunkaatoon, "
          +"milloin sian teurastukseen. Saat lisää itseluottamusta, kun saat tuntea itsesi tarpeelliseksi.";
        } else if(PLAYER.location.name !== "Jyväskylä" && PLAYER.movedtocity !== true && PLAYER.class === "poor") {
            var image = 'homechorescountrybackground';
            var text = "Arkinen aherrus jatkuu kuten ennenkin, mutta työtä on paljon enemmän, sillä suurin osa tilan "
            +"työikäisistä miehistä on rintamalla. Polttopuiden teko jäi talon miesväeltä lokakuussa kesken, joten saat työn vastuullesi.";
            if("undefined" !== typeof PLAYER.spouse) {
                text += "Päiviä varjostaa huoli miehestäsi, sillä uutisia saman kylän poikien kaatumisista "
                +"on saapunut viime viikkoina useampia. Et ole saanut vastausta viimeiseen kirjeeseesi ja pelkäät pahinta.";
            }
        } else if(PLAYER.location.name !== "Jyväskylä" && PLAYER.class === "middle") {
            var image = 'homechorescountrybackground';
            var text = "Veljesi ovat rintamalla ja vanheneva isäsi kärsii rintakivuista. Äitisi tarvitsee apuasi "
            +"kotitilan töissä, joten hyvästelet työnantajasi ja palaat maaseudulle.";
        } else if(PLAYER.widowboss === true) {
            var image = 'homeassistantbackground';
            var text = "Huoli rintamalla olevasta pojasta saa leskirouvan suunniltaan, eikä hän enää välitä ruoan laadusta eikä valita solmussa olevista maton hapsuista. "
            +"Uusi iltarutiinisi on lukea hänelle raamattua iltaisin. Se rauhoittaa sinua itseäsikin.";
        } else if(PLAYER.lotta === true) {
            var image = 'lottawarbackground';
            var text = "Koska olet käynyt lääkintäkurssin ja tottunut jo työskentelemään leiriolosuhteissa, saat komennuksen "
            +"kenttäsairaalaan Karjalankannakselle. Suojeluskuntalaisten paikkailu rauhan ajan leireillä ei ollut "
            +"mitään verrattuna todellisuuteen, jossa sairaalaan tuodaan vakavasti haavoittuneita sotilaita päivittäin.";
        } else if(PLAYER.nurse === true) {
            var image = 'lottawarbackground';
            var text = "Työsi Jyväskylän yleisessä sairaalassa jatkuu kuten ennenkin, mutta apuasi tarvitaan myös Cygnaeuksen koululle perustetussa sotasairaalassa. "
            +"Teet käytännössä kahta työtä, mutta et valita, sillä haluat tehdä kaiken voitavasi isänmaasi hyväksi.";
        } else {
            var image = 'candyfactorybackground';
            var text = "Arki tehtaalla jatkuu sodasta huolimatta melkein kuten ennenkin. Suurin osa miehistä tosin puuttuu, ja paras työkaverisi Martta on saanut lisää vastuuta harteilleen entisen työnjohtajan jouduttua rintamalle.";
        }
                
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        if(PLAYER.gender === "male") {
            GAME.state.start('peacetime1');
        } else if(PLAYER.location.name !== "Jyväskylä" && PLAYER.movedtocity !== true && PLAYER.class === "poor") {
            GAME.state.start('peacetime1');
        } else if(PLAYER.location.name !== "Jyväskylä" && PLAYER.class === "middle") {
            GAME.state.start('peacetime1');
        } else if(PLAYER.widowboss === true) {
            GAME.state.start('wartime2');
        } else if(PLAYER.lotta === true) {
            GAME.state.start('peacetime1');
        } else if(PLAYER.nurse === true) {
            PLAYER.causeofdeath = "sota1";
            GAME.state.start('death');
        } else {
            GAME.state.start('wartime2');
        }
    }
}