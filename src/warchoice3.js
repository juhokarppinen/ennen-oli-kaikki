var warchoice3_state = {

    create: function() {
        
        var image = 'homechorescountrybackground';
        var text = "Teit järkevän ratkaisun, sillä muutamaa päivää myöhemmin kuulet, "
        +"että keittiöapulainen oli yrittänyt samaa, mutta jäänyt kiinni. Kukaan ei tiedä, minkälaisen rangaistuksen hän teostaan sai.";
                
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('death');
    }
}