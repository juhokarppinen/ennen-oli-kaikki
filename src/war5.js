var war5_state = {

    create: function() {
        PLAYER.age = 27;
        var image = 'warbackground';
        if(PLAYER.location.name === "Jyväskylä" && PLAYER.class === "rich") {
            var text = "Sota on jatkunut miltei kolme vuotta, kun Neuvostoliitto aloittaa suurhyökkäyksen kesäkuun yhdeksäntenä. "
            +"Juhannukseen mennessä joukkonne on menettänyt useita miehiä.";
        } else if(PLAYER.job === "plywoodfactory" || PLAYER.job === "riflefactory") {
            if("undefined" !== typeof PLAYER.spouse) {
                var text = "Rintamalle kantautuu tietoja länsiliittoutuneiden hyökkäyksestä Saksaa vastaan Pohjois-Ranskassa. "
                +"Neuvostoliiton oletetaan hyökkäävän toisesta suunnasta, mutta ette usko uhan kohdistuvan teihin. Yllätyksestä " +
                    "on toivuttava nopeasti. Rintamalla alkaa jytistä 9. kesäkuuta.";
            } else if(PLAYER.location.name === "Jyväskylä") {
                var text = "Sota on jatkunut miltei kolme vuotta, kun Neuvostoliitto aloittaa suurhyökkäyksen kesäkuun yhdeksäntenä. "
                +"Juhannukseen mennessä joukkonne on menettänyt useita miehiä.";
            } else {
                var text = "Rintamalle kantautuu tietoja länsiliittoutuneiden hyökkäyksestä Saksaa vastaan Pohjois-Ranskassa. "
                +"Neuvostoliiton oletetaan hyökkäävän toisesta suunnasta, mutta ette usko uhan kohdistuvan teihin. "
                +"Yllätyksestä on toivuttava nopeasti. Rintamalla alkaa jytistä 9. kesäkuuta.";
            }
        } else if(PLAYER.improvement === true) {
            var text = "Rintamalle kantautuu tietoja länsiliittoutuneiden hyökkäyksestä Saksaa vastaan Pohjois-Ranskassa. "
            +"Neuvostoliiton oletetaan hyökkäävän toisesta suunnasta, mutta ette usko uhan kohdistuvan teihin. Yllätyksestä on " +
                "toivuttava nopeasti. Rintamalla alkaa jytistä 9. kesäkuuta.";
        } else if("undefined" !== typeof PLAYER.spouse) {
            var text = "Kuopuksesi täyttää pian kolme vuotta, mutta et ole nähnyt häntä kuin muutaman kerran. Olet palvellut rintamalla "
                +"niin kauan, ettet edes muista, millaista elämäsi siviilissä oli. Vaimosi kuitenkin yrittää pitää sinut ajan tasalla "
                +"kotirintaman tapahtumista pitkine kirjeineen.";
        } else {
            var text = "Sota on jatkunut miltei kolme vuotta, kun Neuvostoliitto aloittaa suurhyökkäyksen kesäkuun yhdeksäntenä. "
            +"Juhannukseen mennessä joukkonne on menettänyt useita miehiä.";
        }
                
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        if(PLAYER.location.name === "Jyväskylä" && PLAYER.class === "rich") {
            PLAYER.causeofdeath = "vuosalmi";
            GAME.state.start('death');
        } else if(PLAYER.job === "plywoodfactory" || PLAYER.job === "riflefactory") {
            if("undefined" !== typeof PLAYER.spouse) {
                GAME.state.start('war6');
            } else if(PLAYER.location.name === "Jyväskylä") {
                PLAYER.causeofdeath = "vuosalmi";
                GAME.state.start('death');
            } else {
                PLAYER.causeofdeath = "taliihantala";
                GAME.state.start('death');
            }
        } else if(PLAYER.improvement === true) {
            GAME.state.start('war6');
        } else if("undefined" !== typeof PLAYER.spouse) {
            GAME.state.start('war6');
        } else {
            GAME.state.start('war6');
        }
    }
};