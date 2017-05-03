var wartime6_state = {

    create: function() {
        PLAYER.age = 26;
        if(PLAYER.amputation === true) {
          var image = 'youthworkcountrybackground';
          var text = "Sota jatkuu jo kolmatta vuotta. Elintarvikepulan syventyessä laittomat liiketoimintasi kukoistavat. "
          +"Kansanhuoltolautakunnan tarkastajista on tullut oikea riesa, sillä he epäilevät vilunkipeliä. On oltava tarkkana.";
        } else if(PLAYER.widowboss === true) {
            var image = 'homeassistantbackground';
            if("undefined" !== typeof PLAYER.spouse) {
                var text = "Sota jatkuu jo kolmatta vuotta ja poikkeustilasta on tullut uusi normaali. Leskirouva menehtyi pian häittenne jälkeen, "
                +"mutta onneksi sait jäädä toistaiseksi asumaan palvelijan huoneeseesi. Erilaiset talkootyöt pitävät sinut kiireisenä ja saat pientä "
                +"sotapalkkaa mentyäsi naimisiin rintamalla palvelevan miehen kanssa. Ikävä on kova eikä avioliitto ilman yhteistä kotia ja arkea tunnu avioliitolta ollenkaan.";
            } else {
                var text = "Sota jatkuu jo kolmatta vuotta ja poikkeustilasta on tullut uusi normaali. Arjesta on "
                +"vain selviydyttävä ja tulevaisuuteen on uskottava. Leskirouva menehtyi keväällä 1942 ja jouduit "
                +"etsimään uuden työpaikan. Päädyit kansanhuoltotoimistoon, jossa tehtäviisi kuuluu muun muassa ostokorttien jakelu.";
            }
        } else if(PLAYER.gunpowderfactory) {
                var image = 'gunpowderfactorybackground';
                var text = "Sota jatkuu jo kolmatta vuotta. Vanhemmat ikäluokat on lomautettu armeijasta taisteluiden rauhoitutta, ja "
                +"olet menettänyt työpaikkasi rintamalta palanneen miehen tieltä. Tienaat elantosi osallistumalla erilaisiin talkoisiin milloin missäkin.";
        } else if(PLAYER.location.name !== "Jyväskylä" && PLAYER.movedtocity !== true && PLAYER.class === "poor") {
            var image = 'homechorescountrybackground';
            if("undefined" !== typeof PLAYER.spouse) {
                var text = "Poikkeustilasta on tullut uusi normaali. Arjesta on vain selviydyttävä ja tulevaisuuteen on uskottava. "
                +"Kuopuksesi täyttää pian kolme vuotta eikä hän tunne isäänsä. Esikoisesikin arastelee lomalle päässyttä isäänsä.";
            } else {
                PLAYER.age = 24;
                var text = "Sota jatkuu jo toista vuotta, ja poikkeustilasta on tullut uusi normaali. "
                +"Työtaakkasi helpottaa hieman, kun osa rintamamiehistä lomautetaan armeijasta paikkaamaan maaseudun työvoimapulaa.";
            }
        } else if(PLAYER.location.name !== "Jyväskylä" && PLAYER.class === "middle") {
            var image = 'homechorescountrybackground';
            var text = "Sota jatkuu jo kolmatta vuotta. Elintarvikepulan syventyessä miehesi laittomat liiketoiminnat kukoistavat. "
            +"Kansanhuoltolautakunnan tarkastajista on tullut oikea riesa, sillä he epäilevät vilunkipeliä. On oltava tarkkana.";
        } else if(PLAYER.lotta === true) {
            var image = 'lottawarbackground';
            if(PLAYER.university === true) {
                var text = "Sota jatkuu jo kolmatta vuotta. Poikkeustilasta on tullut uusi normaali, ja arjesta on vain selviydyttävä. "
                +"Olet palannut välillä opintojesi pariin Helsinkiin tullaksesi taas takaisin Keski-Suomeen auttamaan sotasairaalassa.";
            } else {
                var text = "Sota jatkuu jo kolmatta vuotta. Suurin osa Karjalan evakoista on palannut takaisin koteihinsa rintamalinjan "
                +"siirryttyä Itä-Karjalaan. Olet hankkiutunut palkkatöihin kansanhuoltotoimistoon, jossa tehtäviisi kuuluu muun muassa ostokorttien jakelu.";
            }
        } else {
            var image = 'candyfactorybackground';
            var text = "Sota jatkuu jo kolmatta vuotta. Miltei kaikki tuotantolinjat on pysäytetty toistaiseksi ja porkkanamarmeladi on ainoa tuote, "
            +"jota pystytään valmistamaan. Sinut on lomautettu määrittelemättömäksi ajaksi, mutta erilaiset talkootyöt pitävät sinut kiireisenä.";
        }
                
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        if(PLAYER.gunpowderfactory === true) {
            PLAYER.age = 27;
            PLAYER.causeofdeath = "pilkkukuume";
            GAME.state.start('death');
        } else if(PLAYER.location.name !== "Jyväskylä" && PLAYER.movedtocity !== true && PLAYER.class === "poor") {
            if("undefined" !== typeof PLAYER.spouse) {
                GAME.state.start('wartime7');
            } else {
                GAME.state.start('death');
            }
        } else if(PLAYER.amputation === true) {
            GAME.state.start('death');
        } else if(PLAYER.location.name !== "Jyväskylä" && PLAYER.class === "middle") {
            
        } else {
            GAME.state.start('wartime7');
        }
    }
}