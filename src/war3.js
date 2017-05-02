var war3_state = {

    create: function() {
        PLAYER.age = 25;
        if(PLAYER.location.name === "Jyväskylä" && PLAYER.class === "rich") {
            if ("undefined" !== typeof PLAYER.spouse) {
                var text = "Syksyn hyökkäyssota on muuttunut vuoden vaihteen jälkeen paikoillaan pysyväksi asemasodaksi. "
                +"Varsinaisia taisteluita ei ole käyty pitkään aikaan. Olet huolissasi kotijoukoistasi. Vaimosi kirjoittaa, että ruokapula kotirintamalla pahenee "
                +"pahenemistaan, mutta iloisiakin uutisia on: vaimosi odottaa esikoistanne.";
            } else {
                var text = "Syksyn hyökkäyssota on muuttunut vuoden vaihteen jälkeen paikoillaan pysyväksi asemasodaksi. "
                +"Varsinaisia taisteluita ei ole käyty pitkään aikaan ja elämä on niin rauhallista kuin se rintamalla voi ylipäätään olla.";
            }
        } else if(PLAYER.job === "plywoodfactory") {
            PLAYER.age = 24;
            var image = 'plywoodfactorybackground';
            var text = "Joukkonne etenee ripeästi kohti vanhoja rajoja ja tunnelma käy suorastaan riehakkaaksi, "
            +"kun kuulette uutisen Viipurin takaisin valloituksesta. Taistelutahto on kova, onhan kyse menetetyistä maistanne.";
        } else if(PLAYER.job === "riflefactory") {
            var image = 'riflefactorybackground';
            var text = "Syksyn hyökkäyssota on muuttunut vuoden vaihteen jälkeen paikoillaan pysyväksi asemasodaksi. "
            +"Rintamalla on niin rauhallista kuin sodan aikana ylipäätään voi olla.";
        } else if(PLAYER.improvement === true) {
            var image = 'countrybackground';
            var text = "Syksyn hyökkäyssota on muuttunut vuoden vaihteen jälkeen paikoillaan pysyväksi asemasodaksi. "
            +"Toivo siitä, että sota on ohi ennen kesää, alkaa hiipua. Kotoa raportoidaan, että uuden navetan asukeille "
            +"ei riitä tarpeeksi rehua ja osa on lypsämästä kokonaan.";
        } else if("undefined" !== typeof PLAYER.spouse) {
            var text = "Syksyn hyökkäyssota on muuttunut vuoden vaihteen jälkeen paikoillaan pysyväksi asemasodaksi. "
            +"Mitä lähemmäs kesää kuljetaan, sitä mukavimmiksi leiriolosuhteet käyvät, vaikka mistään luksuksesta ei korsuelämän kohdalla voikaan puhua. "
            +"Veistelet aikasi kuluksi puusta voiveitsiä ja muita pikkuesineitä kotiin lähetettäväksi.";
        } else {
            var text = "Syksyn hyökkäyssota on muuttunut vuoden vaihteen jälkeen paikoillaan pysyväksi asemasodaksi. "
            +"Tunnet itsesi petetyksi, sillä kun sota alkoi, luulit, että tarkoitus on valloittaa Karjalankannas takaisin "
            +"ja pysähtyä niille sijoille. Etenitte kuitenkin voitonhuumassa yli vanhojen rajojen, etkä koe sen olevan oikein.";
        }
                
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('war4');
    }
}