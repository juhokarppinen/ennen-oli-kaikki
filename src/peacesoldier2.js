var peacesoldier2_state = {

    create: function() {
        var text;
        var image;
        if(PLAYER.amputation === true) {
            image = 'countrybackground';
            text = "Menetetty jalka surettaa sinua yhä vähemmän, kun pääset palaamaan kotikylääsi ja tapaat rintamalta kotiutettuja vanhoja tuttujasi, "
            +"jotka ovat kuin varjoja entisestään. Kylällä puhutaan “tärähtäneistä”, jotka säikkyvät pienintäkin kolahdusta eikä monesta tunnu olevan enää töihin.";
        } else {
            image = 'warbackground';
            text = "Lähdette vetäytymään kohti uusia rajoja. Rauhansopimuksesta huolimatta sotatilalaki on edelleen voimassa. "
            +"Joukkoja lomautetaan ja kotiutetaan pikkuhiljaa.";
            if ("undefined" !== typeof PLAYER.spouse) {
                text += " Koska olet perheellinen, olet etusijalla ja pääset kotimatkalle huhtikuun alussa.";
            } else if(PLAYER.class !== "rich" && PLAYER.location.name === "Jyväskylä" || PLAYER.movedtocity === true) {
                text += " Pääset kotimatkalle huhtikuun puolivälissä, koska kotiuttamisjärjestyksessä otetaan huomioon teollisuuden työvoiman tarpeet.";
            } else if(PLAYER.class !== "rich" && PLAYER.location.name !== "Jyväskylä") {
                text += " Kotona maaseudulla tarvitaan kipeästi työvoimaa, sillä kevätkylvöt alkavat pian, "
                +"joten olet etusijalla ja pääset kotimatkalle huhtikuun alussa.";
            } else {
                text += " Koska kotiin lähetettiin ensimmäisenä miehet, joita tarvittiin elinkeinoelämän palvelukseen, joudut odottamaan kotiuttamista vappuun asti.";
            }
        }
                
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        if(PLAYER.amputation === true) {
            if ("undefined" !== typeof PLAYER.spouse) {
                GAME.state.start('peacesoldier3');
            } else {
                GAME.state.start('weddingpeace');
            }
        } else {
            GAME.state.start('peacesoldier3');
        }
    }
};