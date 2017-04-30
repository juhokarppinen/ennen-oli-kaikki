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
            if (Math.random() <= 0.50) {
                GAME.state.start('noconscript');
            } else {
                PLAYER.deathwar1 = true;
                GAME.state.start('conscript');
            }
        } else if(PLAYER.gender === "male") {
            GAME.state.start('conscript');
        } else {
            GAME.state.start('beforewar');
        }
    }
}