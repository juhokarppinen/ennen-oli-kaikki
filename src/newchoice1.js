var newchoice1_state = {

    create: function() {
        if(PLAYER.gender === "male") {
            if(PLAYER.location.name !== "Jyväskylä" && PLAYER.class === "poor" && PLAYER.movedtocity !== true) {
                var image = 'constructionbackground';
                var text = "Rakennustöitä ei kotikulmillasi kuitenkaan riitä loputtomiin, mutta Pohjois-Suomessa niitä olisi lisää. Lähdetkö?";
                var leftButtonLabel  = "Lähde";
                var rightButtonLabel  = "Jää";
            } else if (PLAYER.location.name !== "Jyväskylä" && PLAYER.class === "middle") {
                var image = 'youthworkcountrybackground';
                var text = "Kauppaa varten tarvitsisit lainaa. Sen vakuudeksi kävisi maillanne oleva mökki. Uskallatko ottaa riskin?";
                var leftButtonLabel  = "Kyllä";
                var rightButtonLabel  = "Ei";
            } else {
                PLAYER.age = 29;
                var image = 'plywoodfactorybackground';
                var text = "Uutta ylennystä ei tarvitse kauaa odottaa, mutta paikan vastaanottaminen tarkoittaisi muuttoa pääkaupunkiseudulle. "
                +"Vaimosi ei haluaisi lähteä, etkä sinäkään haluaisi jättää kotiseutujasi, mutta uudesta työstä maksettaisiin niin hyvin, että "
                +"sinulla olisi vihdoin varaa hankkia perheellesi oma asunto. Tartutko tarjoukseen?";
                var leftButtonLabel  = "Kyllä";
                var rightButtonLabel  = "Ei";
            }
            
        } else {
            if(PLAYER.location.name !== "Jyväskylä" && PLAYER.class === "middle") {
                var image = "shopbackground";
                PLAYER.age = 29;
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
        GAME.state.start('newchoice2');
    },

    rightButtonHandler: function () {
        GAME.state.start('death');
        GAME.state.start('newchoice3');
    }
};