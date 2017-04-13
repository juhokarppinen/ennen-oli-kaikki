var conscript5_state = {

    create: function() {
        var text = "Kun Neuvostoliitto lopulta avaa tykistötulen Karjalan kannaksella marraskuun "
        +"viimeisenä aamuna, olosi on omalla tavallaan helpottunut: piinaava odotus on vihdoin päättynyt.";
        
        var image            = 'conscriptbackground';
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('beginwar');
    }
}