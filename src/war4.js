var war4_state = {

    create: function() {
        PLAYER.age = 26;
        if(PLAYER.location.name === "Jyväskylä" && PLAYER.class === "rich") {
            if ("undefined" !== typeof PLAYER.spouse) {
                var text = "Kuukaudet kuluvat, ja toivo sodan päättymisestä alkaa hiipua. "
                +"Saat kotoa viestin: sinusta on tullut terveen pojan isä. Tarjoat lähimmille "
                +"tovereillesi viimeiset tupakkasi uutisten kunniaksi.";
            } else {
                var text = "Kuukaudet kuluvat, ja toivo sodan päättymisestä alkaa hiipua.";
            }
        } else if(PLAYER.job === "plywoodfactory") {
            PLAYER.age = 24;
            var image = 'plywoodfactorybackground';
            var text = "Pääset ensimmäistä kertaa lomalle vasta joulukuussa, kun hyökkäyssota on muuttumassa asemasodaksi. "
            +"Aiot mennä tapaamaan heilaasi, jonka kanssa olet ollut tiiviissä kirjeenvaihdossa sodan alusta asti.";
        } else {
            var text = "Kuukaudet kuluvat, ja toivo sodan päättymisestä alkaa hiipua.";
        }
                
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        if(PLAYER.job === "plywoodfactory") {
            //todo: romance path
            GAME.state.start('death');
        } else {
            GAME.state.start('death');
        }
    }
}