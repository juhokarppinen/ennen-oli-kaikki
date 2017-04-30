var peacesoldier2_state = {

    create: function() {
        if(PLAYER.amputation === true) {
            var image = 'countrybackground';
            var text = "Menetetty jalka surettaa sinua yhä vähemmän, kun pääset palaamaan kotikylääsi ja tapaat rintamalta kotiutettuja vanhoja tuttujasi, "
            +"jotka ovat kuin varjoja entisestään. Kylällä puhutaan “tärähtäneistä”, jotka säikkyvät pienintäkin kolahdusta eikä monesta tunnu olevan enää töihin.";
        } else {
            var image = 'warbackground';
            var text = "Lähdette vetäytymään kohti uusia rajoja. Rauhansopimuksesta huolimatta sotatilalaki on edelleen voimassa. "
            +"Kaikki sotilaat eivät siis suinkaan pääse palaamaan koteihinsa heti, vaan joukkoja lomautetaan ja kotiutetaan pikkuhiljaa.";
            if ("undefined" !== typeof PLAYER.spouse) {
                text += "Koska olet perheellinen, olet etusijalla ja pääset kotimatkalle huhtikuun alussa.";
            } else if(PLAYER.class !== "rich" && PLAYER.location === "Jyväskylä" || PLAYER.movedtocity === true) {
                text += "Koska kotiuttamisjärjestyksessä otetaan huomioon teollisuuden työvoiman tarpeet, pääset kotimatkalle huhtikuun puolivälissä.";
            } else if(PLAYER.class !== "rich" && PLAYER.location !== "Jyväskylä") {
                text += "Kotona maaseudulla tarvitaan kipeästi työvoimaa, sillä kevätkylvöt alkavat pian, "
                +"joten olet etusijalla ja pääset kotimatkalle huhtikuun alussa.";
            } else {
                text += "Koska kotiin lähetettiin ensimmäisenä miehet, joita tarvittiin elinkeinoelämän palvelukseen, joudut odottamaan kotiuttamista vappuun asti.";
            }
        }
                
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('death');
    }
}