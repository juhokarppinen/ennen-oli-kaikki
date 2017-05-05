var beginwar_state = {

    create: function() {
        PLAYER.age = 22;
        
        var image          = 'articlewinterwar2';
        var centerButtonLabel = "Jatka";
        var text = "Neuvostoliitto hyökkää Suomeen marraskuun viimeisenä aamuna 1939. Presidentti Kyösti Kallio julistaa Suomen sotatilaan kello 13.30";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        if(PLAYER.noconscript === true) {
            GAME.state.start('wartime1');
        } else if(PLAYER.gender === "male") {
            GAME.state.start('war1');
        } else {
            GAME.state.start('wartime1');
        }
    }
};