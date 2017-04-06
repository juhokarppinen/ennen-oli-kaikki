var conscript3_state = {

    create: function() {
        PLAYER.age = 22;
        var text = "Et pääse kotiutumaan pitkäksi aikaa, sillä syksyllä 1939 "+
        "sinut kutsutaan suurharjoituksiin. ";

        if ("undefined" !== typeof PLAYER.children[0].name) {
            text += (1939-PLAYER.children[0].year) + "-vuotias " + PLAYER.children[0].name + " vilkuttaa oven suussa lähtiessäsi ja "
            + PLAYER.spouse + " huikkaa \"Tule sitten pian kotiin!\"";
        }
        
        var image            = 'conscriptbackground';
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('beginwar');
    }
}