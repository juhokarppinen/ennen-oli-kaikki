var peacesoldier3_state = {

    create: function() {
        if(PLAYER.location.name === "Jyväskylä" && PLAYER.class === "rich") {
            var image = 'youthworkcountrybackground';
            var name = pickName("female");
            var text = "Sinun on vaikea totutella siviilielämään, sillä pääset jatkamaan opintojasi vasta syksyllä ja toimettomuus ahdistaa. "
            +"Päätät lähteä sukulaistesi avuksi maalle heinänkorjuutöihin. Pikkuserkkusi "+name+" herättää kiinnostuksesi, ja tanssitte sadonkorjuujuhlilla.";
        } else if(PLAYER.location.name === "Jyväskylä") {
            var image = 'plywoodfactorybackground';
            var text = "Kotiuduttuasi rintamalta palaat saman tien töihin vaneritehtaalle. Liityt ammattiliittoon "
            +"ja saatte neuvoteltua itsellenne tuntuvan palkankorotuksen säännöstelyn nostamiin hintoihin vedoten.";
        } else if(PLAYER.movedtocity === true) {
            var image = 'riflefactorybackground';
            var text = "Kotiuduttuasi rintamalta palaat saman tien töihin kivääritehtaalle. Työtä riittää enemmän kuin ennen, "
            +"sillä puolustusvoimat tarvitsevat uusia aseita. Ihan kuin Suomi varustautuisi uuteen sotaan edellisen tuskin päätyttyä.";
        } else if(PLAYER.improvement === true) {
            var image = 'countrybackground';
            var text = "Kun kiireisimmät kevättyöt on tehty, alat toteuttaa ennen sotaa laatimaasi suunnitelmaa uuden navetan rakentamisesta. "
            +"Kaikki pitävät ajatustasi hulluna, sillä kaikesta on pulaa. Niin rakennustarvikkeista kuin lehmien rehustakin. "
            +"Haluat kuitenkin uskoa parempiin aikoihin ja pidät pääsi.";
        } else if(PLAYER.amputation) {
            var image = 'countrybackground';
            var text = "Kesän edetessä elämä alkaa muuttua yhä valoisammaksi. ";
            if ("undefined" !== typeof PLAYER.children) {
                text += PLAYER.children[0].name +"on jo"+ (1940-PLAYER.children[0].year) + "-vuotias ja "+PLAYER.spouse+" odottaa toista lasta. "
                +"Muistat minkä vuoksi taistelit.";
            }
        } else {
            var image = 'youthworkcountrybackground';
            var text = "Kun pääset kotiin, kevätkylvöt ovat jo täydessä vauhdissa. Työpanostasi on kaivattu ja "
            +"tartut toimeen saman tien. Kun pidät itsesi kiireisenä, sodan kauhut on helpompi unohtaa.";
        }
                
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        if(PLAYER.location.name === "Jyväskylä" && PLAYER.class === "rich") {
            GAME.state.start('peacecrush1');
        } else {
            GAME.state.start('peaceend1');
        }
    }
}