var wartime1_state = {

    create: function() {
        
        if(PLAYER.location.name !== "Jyväskylä" && PLAYER.movedtocity !== true && PLAYER.class === "poor") {
            var image = 'homechorescountrybackground';
            var text = "Arkinen aherrus jatkuu kuten ennenkin, mutta työtä on paljon enemmän, sillä suurin osa tilan "
            +"työikäisistä miehistä on rintamalla. Polttopuiden teko jäi talon miesväeltä lokakuussa kesken, joten saat työn vastuullesi.";
            if("undefined" !== typeof PLAYER.spouse) {
                text += "Päiviä varjostaa huoli miehestäsi, sillä uutisia saman kylän poikien kaatumisista "
                +"on saapunut viime viikkoina useampia. Et ole saanut vastausta viimeiseen kirjeeseesi ja pelkäät pahinta.";
            }
        } else if(PLAYER.lotta === true) {
            var image = 'lottawarbackground';
            var text = "Koska olet käynyt lääkintäkurssin ja tottunut jo työskentelemään leiriolosuhteissa, saat komennuksen "
            +"Säkkijärvelle perustettuun kenttäsairaalaan. Suojeluskuntalaisten paikkailu rauhan ajan leireillä ei ollut "
            +"mitään verrattuna todellisuuteen, jossa sairaalaan tuodaan vakavasti haavoittuneita sotilaita päivittäin.";
        } else if(PLAYER.nurse === true) {
            var image = 'lottawarbackground';
            var text = "Työsi Jyväskylän yleisessä sairaalassa jatkuu kuten ennenkin, mutta apuasi tarvitaan myös Cygnaeuksen koululle perustetussa sotasairaalassa. "
            +"Teet käytännössä kahta työtä, mutta et valita, sillä haluat tehdä kaiken voitavasi isänmaasi hyväksi.";
        } else {
            var image = 'riflefactorybackground';
            var text = "Siirryt töihin kivääritehtaalle, sillä siellä tarvitaan lisää käsipareja.";
        }
                
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('death');
    }
}