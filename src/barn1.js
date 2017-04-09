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
        GAME.state.start('barn2');
    },

    rightButtonHandler: function () {
        GAME.state.start('barn4');
    }
}