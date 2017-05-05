var wartime4_state = {

    create: function() {
        
        if(PLAYER.amputation === true) {
          var image = 'youthworkcountrybackground';
          var text = "Tilanne kotirintamalla kiristyy ja elintarvikepula pahenee syksyn mittaan. Kaikki tilallanne tuotetut elintarvikkeet "
          +"on ilmoitettava kansanhuoltolautakunnalle ja luovutettava suurimmilta osin säännösteltyyn kulutukseen.";
        } else if(PLAYER.noconscript === true) {
            var image = 'youthworkcountrybackground';
            var text = "Tilanne kotirintamalla kiristyy elintarvikepulan muuttuessa yhä pahemmaksi. Sotilaiden muonittaminen "
            +"on etusijalla ja siviilien ruoka-annoksia säännöstellään ankarasti. Ravinnon puute heikentää jo entisestään heiveröistä "
            +"ruumistasi ja olet altis tartuntataudeille.";
        } else if(PLAYER.location.name !== "Jyväskylä" && PLAYER.movedtocity !== true && PLAYER.class === "poor") {
            var image = 'homechorescountrybackground';
            var text = "Uutiset suomalaisjoukkojen menestyksestä ja Viipurin takaisinvalloituksesta saavat keskisuomalaistenkin mielet kohoamaan, "
            +"mutta tilanne kotirintamalla kiristyy. Elintarvikepula on pahentunut syksyn mittaan, ja yhä suurempi osa tilalla tuotetusta "
            +"viljasta on luovutettava säännösteltyyn kulutukseen.";
        } else if(PLAYER.location.name !== "Jyväskylä" && PLAYER.class === "middle") {
            var image = 'homechorescountrybackground';
            var text = "Tilanne kotirintamalla kiristyy ja elintarvikepula pahenee syksyn mittaan. Kaikki tilallanne tuotetut elintarvikkeet "
            +"on ilmoitettava kansanhuoltolautakunnalle ja luovutettava suurimmilta osin säännösteltyyn kulutukseen.";
        } else if(PLAYER.lotta === true) {
            var image = 'lottawarbackground';
            if(PLAYER.university === true) {
                var text = "Suomalaiset etenevät idässä nopeasti kohti vanhoja rajoja. Uutiset Viipurin takaisin " +
                    "valloittamisesta saavat tunnelman kohoamaan myös Keski-Suomessa. Karjalasta kotoisin olevat " +
                    "haavoittuneet odottavat malttamattomina pääsyä takaisin kotiin.";
            } else {
                var text = "Suomalaiset etenevät idässä nopeasti kohti vanhoja rajoja ja uutiset Viipurin takaisin " +
                    "valloittamisesta saavat tunnelman kohoamaan Keski-Suomessakin. "
                +"Karjalan evakot suunnittelevat muuttoa takaisin kotikonnuilleen.";
            }
        } else {
            var image = 'candyfactorybackground';
            var text = "Vaikka uutiset suomalaisten joukkojen etenemisestä idässä ovat rohkaisevia, tilanne kotirintamalla "
            +"kurjistuu entisestään alati pahenevan elintarvikepulan myötä. Tehtaan tuotantolinjoja joudutaan sulkemaan ja "
            +"osa työtovereistasi joutuu jättämään paikkansa.";
            var infoText = "Elintarvikkeita säännösteltiin sodan aikana, sillä muuten ruokaa ja juotavaa ei olisi riittänyt koko " +
            "kansalle kuin puoleksi vuodeksi. Eri ikä-, sukupolvi-  ja ammattiryhmille jaettiin kortit, joihin oli esimerkikisi " +
            "mietitty, kuinka paljon esimerkiksi sokeria tai kahvia sai ostaa kaupasta.\n\nLähde: Elämää kotirintamalla. Artikkeli. yle.fi";
        }
                
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this, infoText);
    },

    centerButtonHandler: function () {
        if(PLAYER.amputation === true) {
            GAME.state.start('wartime5');
        } else if(PLAYER.noconscript === true) {
            PLAYER.causeofdeath = "tuberkuloosi";
            GAME.state.start('death');
        } else if(PLAYER.location.name !== "Jyväskylä" && PLAYER.movedtocity !== true && PLAYER.class === "poor") {
            if("undefined" !== typeof PLAYER.spouse) {
                GAME.state.start('wartime6');
            } else {
                GAME.state.start('warchoice1');
            }
        } else if(PLAYER.location.name !== "Jyväskylä" && PLAYER.class === "middle") {
            GAME.state.start('wartime5');
        } else if(PLAYER.lotta === true) {
            GAME.state.start('wartime5');
        } else {
            GAME.state.start('wartime6');
        }
    }
};