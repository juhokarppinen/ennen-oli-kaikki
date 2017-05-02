var wartime4_state = {

    create: function() {
        
        if(PLAYER.gender === "male") {
          var image = 'youthworkcountrybackground';
          var text = "Tilanne kotirintamalla kiristyy ja elintarvikepula pahenee syksyn mittaan. Kaikki tilallanne tuotetut elintarvikkeet "
          +"on ilmoitettava kansanhuoltolautakunnalle ja luovutettava suurimmilta osin säännösteltyyn kulutukseen.";
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
                var text = "Suomalaiset etenevät idässä nopeasti kohti vanhoja rajoja ja uutiset Viipurin takaisin valloittamisesta saavat tunnelman kohoamaan Keski-Suomessakin. "
                +"Karjalasta kotoisin olevat haavoittuneet odottavat malttamattomina pääsyä takaisin kotikonnuilleen.";
            } else {
                var text = "Suomalaiset etenevät idässä nopeasti kohti vanhoja rajoja ja uutiset Viipurin takaisin valloittamisesta saavat tunnelman kohoamaan Keski-Suomessakin, "
                +"ja Karjalan evakot suunnittelevat muuttoa takaisin kotikonnuilleen.";
            }
        } else {
            var image = 'candyfactorybackground';
            var text = "Vaikka uutiset suomalaisten joukkojen etenemisestä idässä ovat rohkaisevia, tilanne kotirintamalla "
            +"kurjistuu entisestään alati pahenevan elintarvikepulan myötä. Tehtaan tuotantolinjoja joudutaan sulkemaan ja "
            +"osa työtovereistasi joutuu jättämään paikkansa.";
        }
                
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        if(PLAYER.gender === "male") {
            GAME.state.start('wartime5');
        } else if(PLAYER.location.name !== "Jyväskylä" && PLAYER.movedtocity !== true && PLAYER.class === "poor") {
            if("undefined" !== typeof PLAYER.spouse) {
                GAME.state.start('death');
            } else {
                GAME.state.start('warchoice1');
            }
        } else if(PLAYER.location.name !== "Jyväskylä" && PLAYER.class === "middle") {
            GAME.state.start('wartime5');
        } else if(PLAYER.lotta === true) {
            GAME.state.start('wartime5');
        } else {
            GAME.state.start('death');
        }
    }
}