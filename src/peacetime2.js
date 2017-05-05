var peacetime2_state = {

    create: function() {
        if(PLAYER.gender === "male") {
          var image = 'youthworkcountrybackground';
          var text = "Elämä tilalla palaa pikkuhiljaa normaaleihin uomiinsa, kun tilan viimeisetkin työmiehet kotiutuvat rintamalta. "
          +"Yrität työn ohessa udella heiltä heidän sotakokemuksistaan, mutta saat vastaukseksi vain epämääräisiä murahduksia.";
        } else if(PLAYER.location.name !== "Jyväskylä" && PLAYER.movedtocity !== true && PLAYER.class === "poor") {
            var image = 'homechorescountrybackground';
            if("undefined" !== typeof PLAYER.spouse) {
                var text = "Kuukaudet Karjalan kannaksella ovat jättäneet mieheesi jälkensä, mutta mitä kauemmin aikaa kuluu, "
                +"sitä useammin huomaat hänen hymyilevän. Olet jälleen onnellisesti raskaana, mutta samalla sinua painaa huoli "
                +"siitä, riittääkö jo valmiiksi niukilla oleva ruoka myös uudelle tulokkaalle.";
            } else {
                var text = "Elämä tilalla palaa pikkuhiljaa normaaleihin uomiinsa, kun tilan viimeisetkin työmiehet kotiutuvat rintamalta. "
                +"Yrität työn ohessa udella heiltä heidän sotakokemuksistaan, mutta saat vastaukseksi vain epämääräisiä murahduksia.";
            }
        } else if(PLAYER.location.name !== "Jyväskylä" && PLAYER.class === "middle") {
            var image = 'weddingbackground';
            var text = "Kevään muututtua kesäksi elämä alkaa taas näyttää valoisia puoliaan. Naapurin isäntä, "
            +"joka menetti sodassa jalkansa, on liehitellyt sinua jo tovin. Pidät hänestä kovasti ja avioliitto "
            +"tarkoittaisi emännän paikkaa hänen talossaan. Vastaat lopulta kyllä.";
        } else if(PLAYER.widowboss === true) {
            var image = 'homeassistantbackground';
            var text = "Leskirouva on edelleen huonona, vaikka hänen poikansa palasi sodasta vahingoittumattomana. "
            +"Teet kovasti töitä hankkiaksesi hyviä raaka-aineita, jotta saat valmistettua "
            +"rouvalle ravitsevaa ruokaa elintarvikepulasta huolimatta. Hankit ylimääräisiä maito- ja voiannoksia mustasta pörssistä.";
        } else if(PLAYER.lotta === true) {
            var image = 'lottawarbackground';
            var text = "Velvollisuutesi lottana jatkuvat rauhan aikana. Rintamalta siirryt töihin Jyväskylän sotasairaalaan, jossa "
            +"tehtäväsi ovat samankaltaisia kuin kenttäsairaalassakin. Olosuhteet vain ovat vakaammat.";
        } else {
            var image = 'candyfactorybackground';
            var text = "Tunnelma tehtaalla piristyy, kun naiset saavat miehensä kotiin ja vanhat työnjohtajat palaavat rintamalta siviiliin. "
            +"Raaka-aineista on kuitenkin pulaa, eikä kaikkia tuotantolinjoja voida pitää käynnissä.";
        }
                
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('peaceend1');
    }
};