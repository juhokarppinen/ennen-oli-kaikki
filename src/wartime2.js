var wartime2_state = {

    create: function() {
        
        var text = "On vuoden 1939 viimeinen päivä. Sotaa on kestänyt kuukauden eikä tulevaisuudesta ole tietoa. "
        +"Jyväskylä on toipumassa parin päivän takaisista pommituksista, joissa yksi ihminen sai surmansa. "
        +"Nyt pommikoneet tulevat taas. Ehdit suojaan ajoissa.";
        var image = 'citybackground';
                
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('endwar');
    }
}