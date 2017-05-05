var conscript4_state = {

    create: function() {
        var text = "Maailmalta kuuluu yhä huolestuttavampia tietoja ja koko Suomi odottaa henkeään pidätellen, "
        +"mitä seuraavaksi tapahtuu. Alat epäillä, että harjoitukset päättyvät vielä tositoimiin. Tunnelma leirissä käy yhä hermostuneemmaksi.";
        
        var image            = 'conscriptbackground';
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('conscript5');
    }
};