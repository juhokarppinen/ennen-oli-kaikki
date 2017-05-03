var warromance3_state = {

    create: function() {
        
        var image = 'barnbackground';
        var text = "Et haluaisi jättää jäähyväisiä, mutta mieltäsi helpottaa kun "+PLAYER.crush
        +" lupaa odottaa sinua, kunnes sota päättyy.";
                
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('war5');
    }
}