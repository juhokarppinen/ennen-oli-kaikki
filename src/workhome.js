var workhome_state = {

    create: function() {

        var text = PLAYER.crush +" menee naimisiin serkkusi kanssa. "
        +" Jatkat töitä normaalisti, ja elämä jatkuu.";
        
        var image            = 'youthworkcountrybackground';
        var imageInfo        = "Juhani Ahola";
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, imageInfo, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('beginwar');
    }
}