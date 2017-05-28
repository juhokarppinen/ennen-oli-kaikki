var wartime1_state = {

    create: function() {
        var image;
        var text;
        if(PLAYER.gender === "male") {
          image = 'youthworkcountrybackground';
          text = "Olet kysyttyä työvoimaa kotikylälläsi. Sinua pyydetään avuksi milloin puunkaatoon, "
          +"milloin sian teurastukseen. Saat lisää itseluottamusta, kun saat tuntea itsesi tarpeelliseksi.";
        } else if(PLAYER.location.name !== "Jyväskylä" && PLAYER.movedtocity !== true && PLAYER.class === "poor") {
            image = 'homechorescountrybackground';
            text = "Arkinen aherrus jatkuu kuten ennenkin, mutta työtä on paljon enemmän, sillä suurin osa tilan "
            +"työikäisistä miehistä on rintamalla. ";
            if("undefined" !== typeof PLAYER.spouse) {
                text += "Päiviä varjostaa huoli miehestäsi, sillä uutisia saman kylän poikien kaatumisista "
                +"on saapunut viime viikkoina useampia. Et ole saanut vastausta viimeiseen kirjeeseesi ja pelkäät pahinta.";
            } else {
                text += "Polttopuiden teko jäi talon miesväeltä lokakuussa kesken, joten saat työn vastuullesi.";
            }
        } else if(PLAYER.location.name !== "Jyväskylä" && PLAYER.class === "middle") {
            image = 'homechorescountrybackground';
            text = "Veljesi ovat rintamalla, ja vanheneva isäsi kärsii rintakivuista. Äitisi tarvitsee apuasi "
            +"kotitilan töissä, joten hyvästelet työnantajasi ja palaat maaseudulle.";
            PLAYER.movedtocity = false;
            PLAYER.widowboss = false;
        } else if(PLAYER.widowboss === true) {
            image = 'homeassistantbackground';
            text = "Huoli rintamalla olevasta pojasta saa leskirouvan suunniltaan. Rouva ei enää valita ruoan laadusta tai solmussa olevista maton hapsuista. "
            +"Uusi iltarutiinisi on lukea hänelle raamattua iltaisin. Se rauhoittaa sinua itseäsikin.";
        } else if(PLAYER.lotta === true) {
            image = 'lottawarbackground';
            text = "Koska olet käynyt lääkintäkurssin ja tottunut jo työskentelemään leiriolosuhteissa, saat komennuksen "
            +"kenttäsairaalaan Karjalankannakselle. Suojeluskuntalaisten paikkailu rauhan ajan leireillä ei ollut "
            +"mitään verrattuna todellisuuteen, jossa sairaalaan tuodaan vakavasti haavoittuneita sotilaita päivittäin.";
        } else if(PLAYER.nurse === true) {
            image = 'lottawarbackground';
            text = "Työsi Jyväskylän yleisessä sairaalassa jatkuu kuten ennenkin, mutta apuasi tarvitaan myös Cygnaeuksen koululle perustetussa sotasairaalassa. "
            +"Teet käytännössä kahta työtä, mutta et valita, sillä haluat tehdä kaiken voitavasi isänmaasi hyväksi.";
        } else {
            image = 'candyfactorybackground';
            text = "Arki tehtaalla jatkuu sodasta huolimatta melkein kuten ennenkin. Suurin osa miehistä tosin puuttuu, ja työkaverisi Martta on saanut lisää vastuuta harteilleen entisen työnjohtajan jouduttua rintamalle.";
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
};