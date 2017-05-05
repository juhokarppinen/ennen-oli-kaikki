var conscript5_state = {

    create: function() {
        var text = "Neuvostoliitto avaa tykistötulen Karjalankannaksella marraskuun "
        +"viimeisenä päivänä. Olosi on omalla tavallaan helpottunut, kun piinaava odotus on vihdoin päättynyt.";
        
        var image            = 'conscriptbackground';
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('beginwar');
    }
};