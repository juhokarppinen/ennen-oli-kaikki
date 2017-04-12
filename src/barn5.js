var barn5_state = {

    create: function() {

        var text = "Et saa renkiä mielestäsi ja haaveilet salaa yhteisestä tulevaisuudesta hänen kanssaan. "
        +PLAYER.crush+" ei kuitenkaan enää näytä olevan kiinnostunut sinusta. Piakkoin kuulet että hän on "
        +"käynyt ladossa naapurin Hiljan kanssa. Happamasti toteat työtovereillesi ettei koko mies enää kiinnostakaan sinua.";
        var image = 'barnbackground';
        
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('beforewar');
    }
}