var sixties_state = {
    create: function() {
        PLAYER.age = 43;
        if(PLAYER.gender === "male") {
            if(PLAYER.location.name !== "Jyväskylä" && PLAYER.class === "poor" && PLAYER.movedtocity !== true) {
                var image = 'citybackground';
                var text = "Olette saaneet taas lisää neliöitä ympärillenne. Nykyisessä asunnossanne on myös lämminvesiboileri, mutta suihkua ei vieläkään ole, "
                +"ja pesulla on käytävä talon yhteisessä saunassa. Olet innostunut ammattiyhdistyspolitiikasta ja vähästä vapaa-ajastasi kuluu leijonanosa "
                +"paikallisten sosiaalidemokraattien kokouksissa.";
            } else if (PLAYER.location.name !== "Jyväskylä" && PLAYER.class === "middle") {
                var image = 'youthworkcountrybackground';
                var text = "Toivoisit metsätaloustiedettä opiskelevan esikoisesi ottavan enemmän vastuuta tilasta, mutta hänellä on muita suunnitelmia. "
                +"Paasaat hänelle sukusi historiaa. Sitä, kuinka oma isäsi on raivannut suon pelloksi ja raatanut niska limassa tarjotakseen jälkipolvilleen "
                +"paremman elintason. Välinne viilenevät, sillä et voi ymmärtää, miksei hän halua jatkaa isänsä ja isoisänsä työtä.";
            } else if(PLAYER.helsinki === true) {
                var image = 'youthworkcountrybackground';
                var text = "Jäljet vuosikymmenien tauottomasta raatamisesta alkavat näkyä kehossasi. Et ole sitä tyyppiä, joka kieltäytyisi etenemismahdollisuuksista "
                +"ja ylitöistä. Tärkeintä on, että pystyt tarjoamaan lapsillesi paremmat lähtökohdat elämälle kuin mitä itse sait.";
            } else {
                var image = 'plywoodfactorybackground';
                var text = "Kieltäytyminen Helsingin-paikasta ei ollut helppoa, mutta päätös ei kaduta. Parempipalkkaisia töitä löytyi Jyväskylästäkin, "
                +"ja onnistuit rakennuttamaan perheellesi talon Lohikoskelle. Sait pitää työkaverisi ja tutut maisemasi. "
                +"Olet ylpeä korkeasti koulutetuista lapsistasi - sukusi ensimmäiset ylioppilaat ja maisterit.";
            }
        } else {
            if(PLAYER.divorced === true) {
                var text = "Et oikein koskaan ole päässyt irti avioerosi aiheuttamasta häpeästä, vaikka maailma onkin jo paljon suvaitsevampi kuin heti sotien jälkeen. "
                +"Vietät melko eristäytynyttä elämää siskosi perheen maille rakennetussa tuvassa.";
                var image = "countrybackground";
            } else if(PLAYER.location.name !== "Jyväskylä" && PLAYER.class === "middle") {
                var image = "shopbackground";
                var text = "Miehesi menehtyy auto-onnettomuudessa, ja joudut ottamaan kaupan kokonaan vastuullesi. Kauppatieteitä Helsingin yliopistossa opiskeleva esikoisesi "
                +"tarjoutuu ottamaan osan taakasta harteilleen, mutta kieltäydyt ehdottomasti avusta. Haluat, että lapsesi saa paremman koulutuksen kuin mihin itselläsi oli mahdollisuus.";
            } else if(PLAYER.location.name !== "Jyväskylä" && PLAYER.class === "poor" && PLAYER.movedtocity !== true) {
                var image = "citybackground";
                var text = "Olette saaneet taas lisää neliöitä ympärillenne. Nykyisessä asunnossanne on lämminvesiboileri, joka riittää tiskiveden "
                +"lämmittämiseen, mutta pesulla ja pyykkäämässä on edelleen käytävä talon yhteistiloissa.";
            } else if(PLAYER.lotta === true) {
                if(PLAYER.university === true) {
                    var image = "countrybackground";
                    var text = "Olet kärsinyt jo jonkin aikaa omituisista alavatsankivuista, mutta et ole tottunut valittamaan pienistä etkä viitsi "
                    +"vaivata lääkäriä moisella asialla. Miehesi patistaa sinut kuitenkin vastaanotolle, koska hän on sitä mieltä, että olet laihtunut liikaa. "
                    +"Saat huonoja uutisia. Sinulla on kohdunkaulansyöpä, joka on ehtinyt jo levitä.";
                } else {
                    var image = "lottawarbackground";
                    var text = "Olet opiskellut venäjää omaksi iloksesi Jyväskylän kansalaisopistossa. Se osoittautuu hyödylliseksi myös töissä, "
                    +"ja sinusta tulee olennainen osa matkaseuruetta, joka käy Neuvostoliitossa hieromassa puutavarakauppaa. Et osallistu virallisiin "
                    +"neuvotteluihin, mutta seurustelutaitojasi tarvitaan niiden ulkopuolella. Suolakurkut ja vodkaryypyt tulevat vuosien mittaan tutuiksi.";
                }
            } else if(PLAYER.widowboss === true) {
                if("undefined" !== typeof PLAYER.spouse) {
                    var image = "citybackground";
                    var text = "Miestäsi ei juuri kotona näy, ja hän hyvittää poissaoloaan hemmottelemalla sinua ja lapsianne tavaroilla. "
                    +"Vaatteenne ovat kuin muotilehtien sivuilta ja keittiönne on Pohjois-Haagan parhaiten varusteltu. Olet huolissasi miehesi jatkuvasta stressistä. "
                    +"Hän on valitellut hengenahdistusta muutamaan kertaan, muttei ole suostunut lääkäriin patisteluistasi huolimatta.";
                } else {
                    var image = "citybackground";
                    var text = "Terveyden lisäksi tanssilavalta löytyi lopulta puolisokin. Sinua muutaman vuoden vanhempi "+pickName("male")+" menetti edellisen vaimonsa jatkosodan aikana "
                    +"tuberkuloosille ja oli jo valmistautunut viettämään loppuelämänsä yksin, kunnes hurmasit hänet hymylläsi Ainolan tanssilavalla.";
                }
            } else {
                var image = "candyfactorybackground";
                var text = "Terveyden lisäksi tanssilavalta löytyi lopulta puolisokin. Sinua muutaman vuoden vanhempi "+pickName("male")+" menetti edellisen vaimonsa jatkosodan aikana "
                +"tuberkuloosille ja oli jo valmistautunut viettämään loppuelämänsä yksin, kunnes hurmasit hänet hymylläsi Ainolan tanssilavalla.";
            }
        }
                
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        if(PLAYER.lotta === true) {
                if(PLAYER.university === true) {
                    PLAYER.causeofdeath = "syopa";
                    GAME.state.start('death');
                } else {
                    GAME.state.start('oldyears1');
                }
        } else {
            GAME.state.start('oldyears1');
        }
    }
};