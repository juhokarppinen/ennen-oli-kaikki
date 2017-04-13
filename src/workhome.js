var workhome_state = {

    create: function() {

        var text = PLAYER.crush +" menee naimisiin serkkusi kanssa. "
        +"Jatkat töitä normaalisti, ja elämä jatkuu.";
        
        var image            = 'youthworkcountrybackground';
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        if(PLAYER.gender === "male" && PLAYER.class === "poor") {
            GAME.state.start('noconscript');
        } else if(PLAYER.gender === "male") {
            GAME.state.start('conscript');
        } else {
            GAME.state.start('beforewar');
        }
    }
}