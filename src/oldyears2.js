var oldyears2_state = {
    create: function() {
        if(PLAYER.gender === "male") {
            if(PLAYER.location.name !== "Jyväskylä" && PLAYER.class === "poor" && PLAYER.movedtocity !== true) {
                var image = 'citybackground';
                PLAYER.age = 83;
                var text = "Olet alkanut unohdella asioita, hukata avaimia ja sen sellaista. Ajattelet sen kuuluvan vanhuuteen, etkä ole moksiskaan. "
                +"Vaimosi passittaa sinut kuitenkin lääkärin vastaanotolle sen jälkeen, kun olet hukannut autosi useampaan otteeseen asioidessasi keskustassa. "
                +"Diagnoosi on Alzheimerin tauti, joka näyttää etenevän vauhdilla.";
            } else if (PLAYER.window.location.name !== "Jyväskylä" && PLAYER.class === "middle") {
                var image = 'countrybackground';
                PLAYER.age = 81;
                var text = "Heinäkuu on helteinen. Olet herännyt aikaisin ja aiot leikata nurmikon. Moottorikoneella et viitsi vielä päristellä, sillä vaimosi "
                +"nukkuu mielellään vähän pidempään. Nurmikko on aamukasteen jäljiltä vielä hiukan kostea, ja käsikäyttöisen ruohonleikkurin työntely ottaa kunnon päälle.";
            } else {
                PLAYER.age = 77;
                var image = 'citybackground';
                var text = "Olet aina pitänyt kunnia-asiana huolehtia talosta ja pihasta omin voimin, vaikka lapsesi vihjailevatkin, että vanhoilla päivillä pitäisi "
                +"ottaa rauhallisemmin. Yöllä on satanut lunta. Tapanasi on herätä aikaisin, ja lähdet lumitöihin vaimosi vielä nukkuessa.";
            }
        } else {
            if(PLAYER.location.name !== "Jyväskylä" && PLAYER.class === "middle") {
                PLAYER.age = 74;
                var text = "Olet lähdössä kaupalle tavalliseen tapaasi puolenpäivän maissa, kun sinut pysäyttää kova päänsärky. Soitat tyttärellesi, joka hälyttää apua. "
                +"Hätäkeskuksessa epäillään aivoinfarktia, joten pääset hoitoon nopeasti.";
            } else if(PLAYER.location.name !== "Jyväskylä" && PLAYER.class === "poor" && PLAYER.movedtocity !== true) {
                var image = "citybackground";
                PLAYER.age = 63;
                var text = "Kun miehesi jää eläkkeelle täytettyään 65 vuotta, hänellä on vihdoin aikaa sinullekin. Saatte pitää Valmetin omistaman vuokra-asuntonne, "
                +"jota on vuosien mittaan remontoitu ja varusteltu uusilla mukavuuksilla. Olet "
                +"saanut joululahjaksi oman pyykkikoneen. Et oikein tiedä, mihin käyttäisit kaiken kotitöiltä koneiden myötä säästyvän ajan.";
            } else {
                var image = "citybackground";
                PLAYER.age = 60;
                var text = "Haaveilit pitkään muuttavasi eläkepäiviksi takaisin Jyväskylään, mutta lastesi lennettyä pesästä tajuat, ettet tunne sieltä oikeastaan ketään. "
                +"Muutat pienempään asuntoon samaan pihapiiriin. Miehesi oli ehtinyt maksaa vanhan asuntolainan kokonaan, joten sinulle jää pieni pesämuna paikkaamaan "
                +"kotirouvavuosien kuihduttamaa eläkettäsi.";
            }
        }
                
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        if(PLAYER.gender === "male") {
            if(PLAYER.location.name !== "Jyväskylä" && PLAYER.class === "poor" && PLAYER.movedtocity !== true) {
                PLAYER.causeofdeath = "alzheimer";
                GAME.state.start('death');
            } else if (PLAYER.window.location.name !== "Jyväskylä" && PLAYER.class === "middle") {
                PLAYER.causeofdeath = "piha";
                GAME.state.start('death');
            } else {
                PLAYER.causeofdeath = "piha";
                GAME.state.start('death');
            }
        } else {
            if(PLAYER.location.name !== "Jyväskylä" && PLAYER.class === "middle") {
                PLAYER.causeofdeath = "aivot";
                GAME.state.start('death');
            } else if(PLAYER.location.name !== "Jyväskylä" && PLAYER.class === "poor" && PLAYER.movedtocity !== true) {
                GAME.state.start('oldyears3');
            } else {
                GAME.state.start('oldyears3');
            }
        }
    }
}