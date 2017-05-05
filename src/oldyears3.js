var oldyears3_state = {
    create: function() {
        if(PLAYER.location.name !== "Jyväskylä" && PLAYER.class === "poor" && PLAYER.movedtocity !== true) {
            var image = "citybackground";
            PLAYER.age = 69;
            var text = "Olet pesutuvassa mankeloimassa lakanoita, kun sinut pysäyttää kova päänsärky. Soitat tyttärellesi, joka hälyttää apua. "
            +"Hätäkeskuksessa epäillään aivoinfarktia, joten pääset hoitoon nopeasti.";
        } else {
            var image = "citybackground";
            PLAYER.age = 60;
            var text = "Haaveilit pitkään muuttavasi eläkepäiviksi takaisin Jyväskylään, mutta tajuat, että et tunne sieltä enää ketään. "
            +"Muutat pienempään asuntoon samaan pihapiiriin. Miehesi oli ehtinyt maksaa vanhan asuntolainan kokonaan, joten sinulle jää pieni pesämuna paikkaamaan "
            +"kotirouvavuosien kuihduttamaa eläkettäsi.";
        }
                
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        if(PLAYER.location.name !== "Jyväskylä" && PLAYER.class === "poor" && PLAYER.movedtocity !== true) {
            PLAYER.causeofdeath = "aivot2";
            GAME.state.start('death');
        } else {
            GAME.state.start('oldyears4');
        }
    }
};