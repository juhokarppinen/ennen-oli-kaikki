var peacesoldier3_state = {

    create: function() {
        if(PLAYER.location.name === "Jyväskylä" && PLAYER.class === "rich") {
            var image = 'youthworkcountrybackground';
            PLAYER.crush = pickName("female");
            var text = "Sinun on vaikea totutella siviilielämään, sillä pääset jatkamaan opintojasi vasta syksyllä ja toimettomuus ahdistaa. "
            +"Päätät lähteä sukulaistesi avuksi maalle heinänkorjuutöihin. Pikkuserkkusi "+PLAYER.crush+" herättää kiinnostuksesi, ja tanssitte sadonkorjuujuhlilla.";
        } else if(PLAYER.job === "plywoodfactory") {
            var image = 'plywoodfactorybackground';
            var text = "Kotiuduttuasi rintamalta palaat saman tien töihin vaneritehtaalle. Liityt ammattiliittoon "
            +"ja saatte neuvoteltua itsellenne tuntuvan palkankorotuksen säännöstelyn nostamiin hintoihin vedoten.";
            var infoText = "Vuonna 1912 Jyväsjärven rantaan perustettiin Wilh. Schaumanin Faneeritehdas Oy. " +
                    "Vuonna 1920 sen tuotannon arvo oli kymmenkertainen toiseksi suurimpaan Fredriksoniin verrattuna.\n\n" +
                    "Lähde: Jäppinen J., Voutilainen H., Keski-Suomen museo: Markkinapaikasta mainio kaupunki. jkl.fi";
        } else if(PLAYER.job === "riflefactory") {
            var image = 'riflefactorybackground';
            var text = "Kotiuduttuasi rintamalta palaat saman tien töihin kivääritehtaalle. Työtä riittää enemmän kuin ennen, "
            +"sillä puolustusvoimat tarvitsevat uusia aseita. Ihan kuin Suomi varustautuisi uuteen sotaan edellisen tuskin päätyttyä.";
            var infoText = "Sotateollisuus kasvoi Jyväskylässä suureksi 1920-  ja 1930-luvulla, kun kaupunkiin " +
                    "perustettiin ruuti-, kivääri- ja tykkitehdas. Vuonna 1936 perustettu Rautpohjan tykkitehdas tunnetaan " +
                    "nykyään Valmet tehtaana. Valmet tunnetaan yhtenä Keski-Suomen suurimmista työllistäjistä.\n\n" +
                    "Lähteet: 1) Keski-Suomen suurimmat työllistäjät. Artikkeli. Keskisuomalainen. 2) Jäppinen J., " +
                    "Voutilainen H., Keski-Suomen museo: Markkinapaikasta mainio kaupunki. jkl.fi"
        } else if(PLAYER.improvement === true) {
            var image = 'countrybackground';
            var text = "Kun kiireisimmät kevättyöt on tehty, alat toteuttaa ennen sotaa laatimaasi suunnitelmaa uuden navetan rakentamisesta. "
            +"Kaikki pitävät ajatustasi hulluna, sillä kaikesta on pulaa. Niin rakennustarvikkeista kuin lehmien rehustakin. "
            +"Haluat kuitenkin uskoa parempiin aikoihin ja pidät pääsi.";
        } else if(PLAYER.amputation) {
            var image = 'countrybackground';
            var text = "Kesän edetessä elämä alkaa pikkuhiljaa muuttua yhä valoisammaksi.";
        } else {
            var image = 'youthworkcountrybackground';
            var text = "Kun pääset kotiin, kevätkylvöt ovat jo täydessä vauhdissa. Työpanostasi on kaivattu ja "
            +"tartut toimeen saman tien. Kun pidät itsesi kiireisenä, sodan kauhut on helpompi unohtaa.";
        }
                
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this, infoText);
    },

    centerButtonHandler: function () {
        if(PLAYER.location.name === "Jyväskylä" && PLAYER.class === "rich") {
            GAME.state.start('peacecrush1');
        } else {
            GAME.state.start('peaceend1');
        }
    }
}