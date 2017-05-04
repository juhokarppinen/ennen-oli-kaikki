var prewar1_state = {

    create: function() {
        if(PLAYER.location.name !== "Jyväskylä" && PLAYER.movedtocity !== true && PLAYER.class === "poor") {
            var image = "youthworkcountrybackground";
            if(PLAYER.gender === "female") {
                var text = "Olet kitkemässä perunamaata, kun olallesi koputetaan. Sotilasunivormuun pukeutunut mies etsii puolisoasi. "
                +"Kerrot, että hän on metsätöissä muutaman kilometrin päässä. Kysyt, mitä asia koskee, ja vaitonainen univormumies "
                +"ojentaa sinulle kirjeen ja vannottaa toimittamaan sen perille.";
            } else {
                var text = "Kun palaat kotiin päivän töistä, sinua odottaa kirje. Näet vaimosi ilmeestä, että odotettavissa on huonoja uutisia. "
                +"Kirje on puolustusvoimilta. Sinut määrätään ylimääräisiin kertausharjoituksiin. Tiedät käskyn enteilevän sotaa.";
            }
        } else if(PLAYER.location.name !== "Jyväskylä" && PLAYER.class === "rich" && PLAYER.gender === "male") {
            if(PLAYER.university === true) {
                image = "countrybackground";
                var text = "Vaikka et ole vielä saanut teologian opintojasi päätökseen, sinut nimitetään isällesi apupapiksi, "
                +"sillä hän on ollut sairaalloinen eikä pysty suoriutumaan kaikista tehtävistään. Odotat tulevaa juhannusta "
                +"innolla, sillä pääset silloin vihkimään ensimmäiset avioparisi.";
            } else {
                image = "countrybackground";
                var text = "Huhut uuden sodan syttymisestä ovat vahvistuneet kevään ja kesän mittaan, muttet halua kuunnella niitä. "
                +"Joudut kuitenkin kohtaamaan todellisuuden, kun pitäjän poliisi toimittaa sinulle henkilökohtaisesti kirjeen, "
                +"joka sisältää kutsun kertausharjoituksiin.";
            }
        }  else if(PLAYER.location.name === "Jyväskylä" && PLAYER.class === "rich" && PLAYER.gender === "male") {
            if("undefined" !== typeof PLAYER.spouse) {
                image = "weddingbackground";
                var text = PLAYER.spouse+" suostui kosintaasi ja olet onnesi kukkuloilla uutta sotaa enteilevistä huhuista huolimatta. "
                +"Sinut ja morsiamesi vihitään Taulumäen kirkossa kesäkuun alussa. Avioelämää on takana vain kaksi viikkoa, kun sinut "
                +"kutsutaan jälleen ylimääräisiin kertausharjoituksiin.";
            } else {
                image = "teacherschoolbackground";
                var text = "Huhut uuden sodan syttymisestä ovat vahvistuneet kevään ja kesän mittaan, muttet halua kuunnella niitä. "
                +"Joudut kuitenkin kohtaamaan todellisuuden, kun saat kirjeen, joka sisältää kutsun kertausharjoituksiin.";
            }
        } else if(PLAYER.job === "plywoodfactory") {
            var image = "plywoodfactorybackground";
            var text = "Juhannus on aivan nurkan takana ja odotat hyvin ansaittua vapaapäivääsi jo innolla. Kun palaat työvuorosta, "
            +"huoneessasi sinua odottaa tutunnäköinen kirje. Kuten pelkäsitkin, se on kutsu ylimääräisiin kertausharjoituksiin. "
            +"Sinun pitää ilmoittautua palvelukseen huomenna.";
        } else {
            var image = "riflefactorybackground";
            var text = "Juhannus on aivan nurkan takana ja odotat hyvin ansaittua vapaapäivääsi jo innolla. Kun palaat työvuorosta, "
            +"huoneessasi sinua odottaa tutunnäköinen kirje. Kuten pelkäsitkin, se on kutsu ylimääräisiin kertausharjoituksiin. "
            +"Sinun pitää ilmoittautua palvelukseen huomenna.";
        }
                
        var centerButtonLabel = "Jatka";
        var infoText = "Ylimääräinen kertausharjoitus tarkoitti sitä, että palvelukseen kutsuttiin lähes kaikki " +
        "reserviin kuuluvat alle 60-vuotiaat upseerit ja alle 40-vuotiaat aliupseerit sekä miehistö. " +
        "Yli kuukauden kestäneissä harjoituksissa suomalaisten puolustuskyky -ja tahto lujittuivat " +
        "ennen kuin toinen maailmansota Suomessa alkoi.\n\nLähde: Ylimääräinen harjoitus kokoaa armeijan rajalle. Artikkeli. yle.fi";

        drawUIsingleButton(image, text, centerButtonLabel, this, infoText);
    },

    centerButtonHandler: function () {
        if(PLAYER.location.name !== "Jyväskylä" && PLAYER.movedtocity !== true && PLAYER.class === "poor") {
            if(PLAYER.gender === "female") {
                GAME.state.start('prewar2');
            } else {
                GAME.state.start('beginwar2');
            }
        } else if(PLAYER.location.name !== "Jyväskylä" && PLAYER.class === "rich" && PLAYER.gender === "male") {
            if(PLAYER.university === true) {
                GAME.state.start('prewar2');
            } else {
                GAME.state.start('beginwar2');
            }
        } else {
            GAME.state.start('beginwar2');
        }
    }
}