var newchoice3_state = {

    create: function() {
        if(PLAYER.gender === "male") {
            if(PLAYER.location.name !== "Jyväskylä" && PLAYER.class === "poor" && PLAYER.movedtocity !== true) {
                PLAYER.age = 29;
                var image = 'constructionbackground';
                var text = "Maaseudulla tarjolla olevat työt vähenevät vuosi vuodelta. Vaikka elintarvikesäännöstely on jo loppunut, "
                +"perheenne kärsii edelleen pulasta. Pakkaatte vaimosi kanssa lapsenne ja pienen omaisuutenne ja Jyväskylään paremman elämän toivossa.";
            } else if (PLAYER.location.name !== "Jyväskylä" && PLAYER.class === "middle") {
                PLAYER.age = 33;
                var image = 'youthworkcountrybackground';
                var text = "Maatalouteen keskittyminen takaa ehkä sittenkin varmemman toimeentulon. Haluaisit hankkia lisää maata peltotilkkunne vierestä, "
                +"mutta se luvataan nenäsi edestä siirtokarjalaisille. Olet raivoissasi, kun muukalaiset pilaavat suunnitelmasi.";
                var infoText = "Keski-Suomeen sijoitettiin enemmän Karjalasta evakuoitua siirtoväkeä kuin muille alueille keskimäärin. " +
                "Suurin osa heistä asettui Jyväskylän maalaiskuntaan, Jyväskylään ja Laukaaseen. Vuoden 1950 väestölaskennan mukaan " +
                "siirtoväen osuus Jyväskylän maalaiskunnan asukkaista oli lähes 17 prosenttia. Yli puolet heistä oli kotoisin Sortavalan " +
                "maalaiskunnasta.\n\nLähteet: 1) Jokipii, Mauno. Keski-Suomen historia 3. Keski-Suomen maakuntaliitto. 1993. 2) " +
                "Jyväskylän maalaiskunnan historia 1945 - 2008. Jyväskylän kaupunki. 2011.";
            } else {
                PLAYER.age = 30;
                var image = 'plywoodfactorybackground';
                var text = "Raataminen työmiehen haalareissa tehtaalla jatkuu. Vapaa-ajallasi saat kuitenkin opiskeltua työväenopistossa.";
            }
        } else {
            var image = "youthworkcountrybackground";
            if(PLAYER.location.name !== "Jyväskylä" && PLAYER.class === "middle") {
                PLAYER.age = 30;
                var text = "Miehesi on rakennuttanut teille uuden kodin. Talo on suorastaan hulppea verrattuna torppaan, jossa asuitte "
                +"avioliittonne ensimmäiset vuodet. Siellä on kaikki modernit mukavuudet, kuten juokseva vesi, sisävessa, sähköhella ja jääkaappi. "
                +"Haluaisit ajokortin, jotta voisit käydä asioilla miehesi uudella Mossella, mutta hän vastustelee.";
                var infoText = "Vuonna 1955 Suomen ajoneuvorekisterissä oli noin 85 000 henkilöautoa, ja viisitoista vuotta myöhemmin, " +
                "vuonna 1970 niitä oli jo yli 700 000. Itäautot, kärjessään neuvostoliittolainen Moskvitš eli Mosse, olivat sotien " +
                "jälkeisinä vuosina suomalaisten suosiossa niiden muita paremman saatavuuden vuoksi.\n\nLähteet: 1) Tilastokeskus, moottoriajoneuvokanta. " +
                "2) Häggman, K., Markkola, P., Kuisma, M. & Pulma, P. (toim.). Suomalaisen arjen suuri tarina.";
            } else {
                var image = "youthworkcountrybackground";
                PLAYER.age = 29;
                var text = "Painajaiset eivät tahdo jättää miestäsi rauhaan. Hän lääkitsee itseään alkoholilla, mutta onneksi nykyään harvemmin. "
                +"Leipä on tiukassa. Miehellesi riittää enää satunnaisia töitä rakennustyömailla ja sinunkin palveluksiasi tarvitaan yhä vähemmän. "
                +"Päätätte lähteä kaupunkiin parempaa elämää etsimään.";
            }
        }
                
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this, infoText);
    },

    centerButtonHandler: function () {
        if(PLAYER.gender === "male") {
            if(PLAYER.location.name !== "Jyväskylä" && PLAYER.class === "poor") {
                GAME.state.start('newchoice4');
            } else if (PLAYER.location.name !== "Jyväskylä" && PLAYER.class === "middle") {
                GAME.state.start('newchoice4');
            } else {
                GAME.state.start('sixties');
            }
        } else {
            if(PLAYER.location.name !== "Jyväskylä" && PLAYER.class === "middle") {
                GAME.state.start('sixties');
            } else {
                GAME.state.start('newchoice4');
            }
        }
    }
};