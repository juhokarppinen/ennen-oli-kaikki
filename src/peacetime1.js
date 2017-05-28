var peacetime1_state = {

    create: function() {
        PLAYER.age = 23;
        if(PLAYER.gender === "male") {
          var image = 'youthworkcountrybackground';
          var text = "Olet kärräämässä polttopuita saunalle, kun pikkurenki käskee sinut kiireesti talolle. Jätät halot niille sijoilleen, "
          +"ja kun kompuroit sisään kaikki seisovat hiiskumatta radion ääressä. Talvisota on päättynyt.";
        } else if(PLAYER.location.name !== "Jyväskylä" && PLAYER.movedtocity !== true && PLAYER.class === "poor") {
            var image = 'homechorescountrybackground';
            if("undefined" !== typeof PLAYER.spouse) {
                var text = "Olet paikkaamassa palvelusväen vaatteita, kun sinut kutsutaan kiireesti ruokasaliin, jossa "
                +"talon muu väki on kuuntelemassa radiota. Ehdit paikalle juuri ennen kuin ulkoministeri Väinö Tanner aloittaa "
                +"puheensa rauhan ehdoista. Talvisota on päättynyt. Saat miehesi kotiin!";
            } else {
                var text = "Olet viimeistelemässä navetan siivousta, kun keittiöpiika käskee sinut kiireesti talolle. "
                +"Kun kompuroit sisään, kaikki seisovat hiiskumatta radion ääressä. Talvisota on päättynyt.";
            }
        } else if(PLAYER.location.name !== "Jyväskylä" && PLAYER.class === "middle") {
            var image = 'homechorescountrybackground';
            var text = "Sodan päätyttyä kotiin palaa vain toinen veljistäsi. Heistä nuorempi kaatui Taipaleella "
            +"puna-armeijan suurhyökkäyksessä helmikuussa. Olette kuitenkin onnellisia saadessanne edes toisen pojista kotiin.";
        } else if(PLAYER.widowboss === true) {
            var image = 'homeassistantbackground';
            var text = "Olet pesemässä pyykkiä saunan padassa, kun kuulet pihalta melua. Ohi juokseva pikkupoika kertoo sodan päättyneen. "
            +"Sisällä leskirouva on juuri avannut radion. Olette onnellisia rauhasta, mutta sen hinta eli Karjalankannaksen menettäminen tuntuu kohtuuttomalta.";
        } else if(PLAYER.lotta === true) {
            var image = 'lottawarbackground';
            var text = "Kenttäsairaala sijaitsee niin lähellä rintamalinjaa, että olet jo tottunut tykkitulen pauhuun. "
            +"Havahdut hiljaisuuteen 13.3.1940 klo 11, kun tuli yhtäkkiä taukoaa. Hetkeä myöhemmin kuulet uutiset: "
            +"sota on loppunut. Alat valmistella potilaita siirtoa varten välittömästi.";
        } else {
            var image = 'candyfactorybackground';
            var text = "Vuoromestari keskeyttää työt. Kaikki kokoontuvat tehtaan edustalle, "
            +"missä johtaja kertoo uutiset. Sota on päättynyt. Ilon kiljahdukset vaimenevat pian, kun johtaja kertoo rauhan ehdoista. "
            +"Uusi työtoverisi, joka on tullut Jyväskylään evakkona Karjalasta, purskahtaa itkuun. Hänen kotinsa jäi rajan taakse.";
        }
                
        var centerButtonLabel = "Jatka";
        var infoText = "Suurin osa keskisuomalaisista kuului Talvisodassa 10. divisioonaan " +
        "(myöhemmin 7. divisioona), joka keskitettiin Taipaleen lohkolle, Itä-Kannakselle. " +
        "Talvisodan aikana 10. divisioonan miehistöstä kaatui 1038, haavoittui 2751 ja katosi " +
        "201 miestä.\n\nLähde: Talvisodan historia 4, talvisota.fi";

        drawUIsingleButton(image, text, centerButtonLabel, this, infoText);
    },

    centerButtonHandler: function () {
        GAME.state.start('endwar');
    }
};