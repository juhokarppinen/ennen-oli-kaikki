var war7_state = {

    create: function() {
        var image = 'warbackground';
        var text = "Kesäkuun vaihtuessa heinäkuuksi Viipuri on menetetty jälleen, ja joukkueesi on vetäytynyt useita kymmeniä kilometrejä. "
        +"Taisteluissa on kaatunut satoja suomalaisia, mutta Viipurin ja Taipaleen välinen, Vuoksea myötäilevä puolustuslinja pitää.";
                
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('warend1');
    }
};