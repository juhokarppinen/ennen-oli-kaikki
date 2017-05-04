var newchoice5_state = {

    create: function() {
        if(PLAYER.gender === "male") {
            if(PLAYER.location.name !== "Jyväskylä" && PLAYER.class === "poor" && PLAYER.movedtocity !== true) {
                PLAYER.age = 32;
                var image = 'constructionbackground';
                var text = "Kahden parakkivuoden jälkeen saatte yksiön Valimonmäestä. Asunnossa on viemäröinti ja juokseva vesi, "
                +"joista et ole ennen päässyt nauttimaan. Töitä on paiskittava miltei kellon ympäri, usein myös sunnuntaisin.";
            } else {
                PLAYER.age = 38;
                var image = "shopbackground";
                var text = "Liiketoimintasi rullaa niin hyvin, ettei sinun enää tarvitse huolehtia kaupan päivittäisestä pyörittämisestä. "
                +"Olet Suomen Kaupunkien Vähittäiskauppiasliiton aktiivijäsen, ja politiikka kiinnostaa sinua yhä enemmän. "
                +"Kiidät uudella Mossellasi kokouksissa ympäri Suomen.";
            }
        } else {
            var image = "citybackground";
            PLAYER.age = 32;
            var text = "Kahden parakkivuoden jälkeen saatte yksiön Valimonmäestä. Asunnossa on viemäröinti ja juokseva vesi, joista et ole ennen päässyt nauttimaan. "
            +"Et ole onnistunut vielä löytämään työpaikkaa. Lapset hankkivat perheellenne lisätienestejä kesäisin työskentelemällä lähistöllä sijaitsevalla maatilalla.";
        }
                
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        if(PLAYER.gender === "male") {
            if(PLAYER.location.name !== "Jyväskylä" && PLAYER.class === "poor") {
                GAME.state.start('sixties');
            } else {
                PLAYER.age = 48;
                PLAYER.causeofdeath = "auto";
                GAME.state.start('death');
            }
        } else {
            var image = "youthworkcountrybackground";
            if(PLAYER.location.name !== "Jyväskylä" && PLAYER.class === "middle") {
                GAME.state.start('sixties');
            } else {
                GAME.state.start('sixties');
            }
        }
    }
}