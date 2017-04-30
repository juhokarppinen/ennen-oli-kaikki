var war1_state = {

    create: function() {
        if(PLAYER.location.name !== "Jyväskylä") {
            var text = "Palvelet kranaatinheitinkomppaniassa Taipaleen lohkolla Itä-Kannaksella. "
            +"Neuvostoliitto on tykittänyt puolustuslinjaanne taukoamatta jo viikkoja, mutta "
            +"linja pitää vihollisen ylivoimasta huolimatta.";
        } else {
            var text = "Palvelet kenttätykistörykmentissä Taipaleen lohkolla Itä-Kannaksella. "
            +"Sodasta on muodostunut paikallaan junnaavaa tykkitaistelua. Puolustuslinjanne pitää vihollisen ylivoimasta huolimatta.";
        }
                
        var image            = 'warbackground';
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        if(PLAYER.deathwar1 === true) {
            PLAYER.causeofdeath = "sota1";
            GAME.state.start('death');
        } else {
            if(PLAYER.location !== "Jyväskylä" && PLAYER.class === "middle" && PLAYER.movedtocity !== true) {
                PLAYER.amputation = true;
                GAME.state.start('war2');
            } else {
                GAME.state.start('peacesoldier1');
            }
        }
    }
}