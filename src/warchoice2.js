var warchoice2_state = {

    create: function() {
        
        var image = 'homechorescountrybackground';
        var text = "Jäät kiinni varkaudesta, mutta työnantajasi päättää olla ilmiantamatta sinua viranomaisille. Joudut kuitenkin etsimään uuden työpaikan.";
                
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('warchoice4');
    }
}