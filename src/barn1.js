var barn1_state = {

    create: function() {
        PLAYER.age = 19;

        if (PLAYER.gender === "male") {
            var text = "Et haluaisi illan päättyvän. Kotimatkanne varrella sijaitsee lato, ja "+PLAYER.crush
            +" tuntuu katsovan sinua merkitsevästi. Ehdotatko pientä lepotaukoa ladossa?";
        } else {
            var text = "Et haluaisi illan päättyvän. "+PLAYER.crush+" taitaa olla samaa mieltä, "
            +"sillä hän ehdottaa lepotaukoa kotimatkanne varrella sijaitsevassa ladossa. Suostutko ehdotukseen?";
        }

        var image            = 'barnbackground';
        var leftButtonLabel  = "Kyllä";
        var rightButtonLabel = "Ei";

        drawUItwoButtons(image, text, leftButtonLabel, rightButtonLabel, this);
    },

    leftButtonHandler: function () {
        if(PLAYER.gender === "female" && PLAYER.noschool === true) {
            GAME.state.start('barn3');
        } else {
            GAME.state.start('barn2');
        }
    },

    rightButtonHandler: function () {
        if(PLAYER.gender === "female" && PLAYER.noschool === true) {
            GAME.state.start('barn5');
        } else {
            GAME.state.start('barn4');
        }
    }
};