var barn5_state = {

    create: function() {

        var text = "Et saa renkiä mielestäsi ja haaveilet salaa yhteisestä tulevaisuudesta hänen kanssaan. "
        +"Seuraavissa tansseissa hän kuitenkin tanssittaa jo naapuritalon keittiöpiikaa.";
        var image = 'barnbackground';
        
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('beforewar');
    }
};