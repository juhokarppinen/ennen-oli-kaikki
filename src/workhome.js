var workhome_state = {

    create: function() {

        var text = PLAYER.crush +" menee naimisiin serkkusi kanssa. "
        +" Jatkat töitä normaalisti, ja elämä jatkuu.";
        
        var image            = 'youthworkcountrybackground';
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('conscript');
    }
}