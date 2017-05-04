var death_state = {

    create: function() {
        var infoText;

        var causeOfDeathText = "";
        var ripText = "Lepää rauhassa, " + PLAYER.name +"! ";

        // Childhood death
        if (PLAYER.causeofdeath === "keuhkokuume") {
            causeOfDeathText = "Keuhkotuberkuloosi oli 1900-luvun alkupuolella yksi yleisimmistä kuolinsyistä. "
            +"Tauti koitui sinunkin kohtalokseksi. "+ ripText
            +"Kuolemasi ei ollut poikkeuksellinen, sillä lähes viidennes ikäluokastasi menehtyi alle kouluikäisenä.";
            infoText = "Vasta itsenäistyneen Suomen lapsikuolleisuus oli Pohjoismaiden suurin. " +
                       "Kouluikään mennessä lapsista oli kuollut jo noin 18 prosenttia. Imeväiskuolleisuus " +
                       "oli 11,2 prosenttia.";
            PLAYER.age = this.getChildhoodDeathAge();
        }
        if(PLAYER.causeofdeath === "espanjantauti") {
            causeOfDeathText = "Espanjantauti tappoi 10- ja 20-lukujen vaihteessa 30 miljoonaa ihmistä. "
            + "Tauti koitui sinunkin kohtaloksesi. "+ ripText
            + "Kuolemasi ei ollut poikkeuksellinen, sillä lähes viidennes ikäluokastasi menehtyi alle kouluikäisenä.";
            infoText = "Vasta itsenäistyneen Suomen lapsikuolleisuus oli Pohjoismaiden suurin. " +
                       "Kouluikään mennessä lapsista oli kuollut jo noin 18 prosenttia. Imeväiskuolleisuus " +
                       "oli 11,2 prosenttia.";
            PLAYER.age = this.getChildhoodDeathAge();
        }
        // War death
        if (PLAYER.causeofdeath === "sota1") {
            if(PLAYER.gender === "female") {
                causeOfDeathText = "Jyväskylä on vasta toipumassa parin päivän takaisista pommituksista, kun vihollisen "
                +"koneet tulevat taas. Olet kaupungilla asioilla etkä ehdi suojaan ennen kuin pommit putoavat. "
                +"Menetät henkesi uudenvuoden aattona 1939. "+ ripText;
            } else {
                causeOfDeathText = "Pataljoonanne oli siirtymässä linjojen takaa reservistä etulinjaan, kun "
                +"jouduitte ankaran kranaattitulituksen kohteeksi. Heittäydyit maahan liian myöhään. "
                +"Kranaatin sirpale osui kaulaasi ja menetit henkesi välittömästi. "+ ripText;
            }
            infoText = "Sodassa miesten kuolleisuus oli 12,8% ja naisten 2,6%.";
        }
        if(PLAYER.causeofdeath === "tuberkuloosi") {
            causeOfDeathText = "Sairastut tuberkuloosiin, joka koituu kohtaloksesi. " + ripText;
        }
        if(PLAYER.causeofdeath === "pilkkukuume") {
            causeOfDeathText = "Sinulla ei ollut enää vakituista asuntoa ja vietit yösi köyhille tarkoitetuissa hätämajoitustiloissa. "
            +"Sairastuit täin levittämään pilkkukuumeeseen ja menetät henkesi. " + ripText;
        }
        if(PLAYER.causeofdeath === "vuosalmi") {
            causeOfDeathText = "Kesäkuu oli vaihtunut heinäkuuksi, ja joukkueenne oli siirtynyt Vuoksen pohjoispuolelle. "
            +"Kaaduit Neuvostoliiton tykistötulessa Vuosalmella. " + ripText;
        }
        if(PLAYER.causeofdeath === "taliihantala") {
            causeOfDeathText = "Kesäkuun loppuun mennessä yli puolet divisioonasi miehistä oli kaatunut, haavoittunut tai kadonnut. "
            +"Sinä selvisit heinäkuun alkuun asti, mutta kaaduit lopulta Tali-Ihantalan taisteluissa. " + ripText;
        }
        if(PLAYER.causeofdeath === "karkuri") {
            causeOfDeathText = "Sinut teloitettiin rintamakarkurina. " + ripText;
        }
        if(PLAYER.causeofdeath === "luoti") {
            causeOfDeathText = "Haavoitut vihollisen luodista ja sydämesi pysähtyy ennen kuin sinut ehditään kuljettaa "
            +"joukkosidontapaikalle. " + ripText;
        }
        if(PLAYER.causeofdeath === "influenssa") {
            causeOfDeathText = "Vuosia jatkunut nälkä oli heikentänyt kehosi alttiiksi tartuntataudeille. Sairastuit ärhäkkään influenssaan, joka vei henkesi. " + ripText;
        }
        if(PLAYER.causeofdeath === "rakennus") {
            causeOfDeathText = "Olit muuraamassa kaksikerroksisen talon savupiippua. Jalkasi lipesi rakennustelineeltä ja putosit. " + ripText;
        }
        if(PLAYER.causeofdeath === "auto") {
            causeOfDeathText = "Olit palaamassa kotiin Vähittäiskaupan Keskusliiton kokouksesta. Olit väsynyt ja kiukkuinen, sillä et ollut saanut ajatuksillesi kannatusta. "
            +"Ajoit liian lujaa sateen liukastamaan mutkaan. Autosi suistui tieltä ja törmäsi puuhun. Menehdyit välittömästi. " + ripText;
            infoText = "Vuonna 1965 tieliikenneonnettomuuksissa kuoli 1 049 ihmistä ja loukkaantui 15 914 ihmistä. Vastaavat luvut vuonna 2015 olivat 270 ja 6 408.";
        }
        if(PLAYER.causeofdeath === "syopa") {
            causeOfDeathText = "Kuolit Jyväskylän keskussairaalassa. " + ripText;
        }
        if(PLAYER.causeofdeath === "alzheimer") {
            causeOfDeathText = "Vietit viimeiset vuotesi vanhainkodin vuodeosastolla. " + ripText;
        }
        if(PLAYER.causeofdeath === "rintakipu") {
            causeOfDeathText = "Vaimosi soitti hädissään ambulanssin, mutta oli jo liian myöhäistä. " + ripText;
        }
        if(PLAYER.causeofdeath === "vatsa") {
            causeOfDeathText = "Kuolet Jyväskylän keskussairaalassa juuri ennen 60-vuotissyntymäpäivääsi. "+ ripText;
        }
        if(PLAYER.causeofdeath === "piha") {
            causeOfDeathText = "Vaimosi löysi sinut tuupertuneena pihalta. " + ripText;
        }
        if(PLAYER.causeofdeath === "aivot") {
            causeOfDeathText = "Hoito ei auttanut. Kuolit Jyväskylän keskussairaalassa 74-vuotiaana. " + ripText;
        }
        if(PLAYER.causeofdeath === "aivot2") {
            causeOfDeathText = "Hoito ei auttanut. Kuolit Jyväskylän keskussairaalassa 69-vuotiaana. " + ripText;
        }

        var numberTexts = ["yksi","kaksi","kolme","neljä","viisi","kuusi",
                           "seitsemän","kahdeksan","yhdeksän","kymmenen"];

        if (PLAYER.age === 0) var ageOfDeathText = "vain muutaman kuukauden ikäinen.";
        else if (PLAYER.age <= 10) var ageOfDeathText = numberTexts[PLAYER.age - 1] + "vuotias.";
        else var ageOfDeathText = PLAYER.age + "-vuotias.";

        var text = "Kuolit... " + causeOfDeathText;

        var image            = "deathbackground";
        var rightButtonLabel = "Valikkoon";
        
        if(PLAYER.gender === "female") var leftButtonLabel = "Pelaa poikana";
        else var leftButtonLabel = "Pelaa tyttönä";


        drawUItwoButtons(image, text, leftButtonLabel, rightButtonLabel, this, infoText);
    },

    leftButtonHandler: function () {
        if(PLAYER.gender === "female") PLAYER.gender = "male";
        else PLAYER.gender = "female";
        GAME.state.start('beginning');
    },

    rightButtonHandler: function () {
        GAME.state.start('menu');
    },

    getChildhoodDeathAge: function () {
        var odds = Math.random() * 18;
        if (odds <= 0.15) return 5 + Math.floor(Math.random() * 2);
        else if (odds <= 1.3) return 3 + Math.floor(Math.random() * 2);
        else if (odds <= 2.0) return 2 + Math.floor(Math.random());
        else if (odds <= 4.1) return 1 + Math.floor(Math.random());
        else return Math.floor(Math.random());
    }
}