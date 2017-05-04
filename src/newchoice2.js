var newchoice2_state = {

    create: function() {
        if(PLAYER.gender === "male") {
            if(PLAYER.location.name !== "Jyväskylä" && PLAYER.class === "poor") {
                PLAYER.age = 29;
                var image = 'constructionbackground';
                var text = "Painajaiset eivät jätä sinua rauhaan ja lääkitset itseäsi alkoholilla. Vaimo ja lapset ovat kaukana, joten saat juoda rauhassa. "
                +"Et pääse enää aamuisin liikkeelle ilman krapularyyppyä.";
            } else if (PLAYER.window.location.name !== "Jyväskylä" && PLAYER.class === "middle") {
                PLAYER.age = 37;
                var image = 'youthworkcountrybackground';
                var text = "Riski kannatti, sillä kauppa lähtee pyörimään jopa paremmin kuin olit laskeskellut. "
                +"Kun kahvi vapautetaan säännöstelystä viimein vuonna 1954, jonot kiemurtelevat pihalla asti.";
            } else {
                PLAYER.age = 30;
                var image = 'plywoodfactorybackground';
                var text = "Muutatte Helsingin Pohjois-Haagaan, vastavalmistuneeseen taloon, jossa on kaikki mukavuudet sisävessasta ja omasta kylpyhuoneesta lähtien. "
                +"Esikoisesi aloittaa koulutiensä muutamaa vuotta myöhemmin, ja olet ylpeä, kun se tapahtuu pääkapungissa. Odotat hänestä suvun ensimmäistä ylioppilasta.";
            }
        } else {
            var image = "youthworkcountrybackground";
            if(PLAYER.location.name !== "Jyväskylä" && PLAYER.class === "middle") {
                PLAYER.age = 29;
                var text = "Vastoin miehesi toiveita otat yhä enemmän vastuuta kaupasta hänen poissaollessaan. Välillenne syntyy riita, kun ilmoitat haluavasi alkaa nostaa palkkaa itsellesi.";
            } else {
                var image = "youthworkcountrybackground";
                PLAYER.age = 29;
                var text = "Siskosi on mennyt uusiin naimisiin ja saanut kolmannen lapsen. Sinä sen sijaan olet hakenut avioeroa, "
                +"mitä ei kylillä katsota hyvällä. Tunnet silti tehneesi oikean ratkaisun. Lapsesi saavat kasvaa turvallisessa ympäristössä serkkujensa kanssa.";
            }
        }
                
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        if(PLAYER.gender === "male") {
            if(PLAYER.location.name !== "Jyväskylä" && PLAYER.class === "poor") {
                PLAYER.causeofdeath = "rakennus";
                GAME.state.start('death');
            } else {
                GAME.state.start('newchoice5');
            }
        } else {
            GAME.state.start('sixties');
        }
    }
}