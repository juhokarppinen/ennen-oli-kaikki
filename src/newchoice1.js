var newchoice1_state = {

    create: function() {
        if(PLAYER.gender === "male") {
            if(PLAYER.location.name !== "Jyväskylä" && PLAYER.class === "poor") {
                var image = 'constructionbackground';
                var text = "Rakennustöitä ei kotikylälläsi kuitenkaan riitä loputtomiin. Kauempana niitä olisi lisää. Lähdetkö kauemmas työnhakuun?";
                var leftButtonLabel  = "Lähde";
                var rightButtonLabel  = "Jää";
            } else {
                var image = 'youthworkcountrybackground';
                var text = "Kauppaa varten tarvitsisit lainaa. Sen vakuudeksi kävisi maillanne oleva mökki. Uskallatko ottaa riskin?";
                var leftButtonLabel  = "Kyllä";
                var rightButtonLabel  = "Ei";
            }
        } else {
            var image = "youthworkcountrybackground";
            if(PLAYER.location.name !== "Jyväskylä" && PLAYER.class === "middle") {
                var text = "Yritys menestyy, ja voit halutessasi ryhtyä täysipäiväiseksi kotirouvaksi, mikä olisi miehesi mieleen. "
                +"Olette muuttaneet uuteen taloon, ja kotona kieltämättä riittäisi tekemistä, mutta toisaalta viihdyt kaupalla. "
                +"Jatkatko töissä vai panostatko kodinhoitoon?";
                var leftButtonLabel  = "Työ";
                var rightButtonLabel  = "Koti";
            } else {
                var image = "youthworkcountrybackground";
                var text = "Leskeksi jäänyt siskosi naapurikylällä ehdottaa, että muuttaisit lapsinesi hänen luokseen asumaan. "
                +"Hänen sodassa kaatunut miehensä jätti jälkeensä pienen tilkun maata, jonka viljelemisessä hän tarvitsisi apuasi. Lähdetkö siskosi luo vai jäätkö miehesi rinnalle?";
                var leftButtonLabel  = "Lähde";
                var rightButtonLabel  = "Jää";
            }
        }

        drawUItwoButtons(image, text, leftButtonLabel, rightButtonLabel, this);
    },

    leftButtonHandler: function () {
        GAME.state.start('death');
        //todo
        //GAME.state.start('newchoice2');
    },

    rightButtonHandler: function () {
        GAME.state.start('death');
        //todo
        //GAME.state.start('newchoice3');
    }
}