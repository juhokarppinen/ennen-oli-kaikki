var conscript4_state = {

    create: function() {
        PLAYER.age = 22;
        var text = "Koko Suomi odottaa henkeään pidätellen, mitä seuraavaksi tapahtuu. Alat epäillä, että harjoitukset päättyvät vielä tositoimiin. "
        +"Kun Neuvostoliitto lopulta avaa tykistötulen Karjalan kannaksella marraskuun viimeisenä aamuna, "
        +"olosi on omalla tavallaan helpottunut: piinaava odotus on vihdoin päättynyt.";
        
        var image            = 'conscriptbackground';
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('beginwar');
    }
}