var studies2_state = {

    create: function() {
        PLAYER.age = 16;

        if (PLAYER.gender === "male") {
            var text = "Onneksi olkoon, tuore ylioppilas! Jatkatko opiskelemaan " +
                   "Helsingin yliopistoon vai otatko ohjat isäsi kaupassa?";
            var leftButtonLabel  = "Yliopistoon";
            var rightButtonLabel = "Töihin";
        } else {
            var text = "Onneksi olkoon, tuore ylioppilas! Jatkatko opiskelemaan " +
                   "sairaanhoitajaksi Kuopioon vai jäätkö kotiin auttamaan perheyrityksessä?";
            var leftButtonLabel  = "Sairaanhoitajaksi";
            var rightButtonLabel = "Kotiin";
        }
        
        var image     = 'studies1background';

        drawUItwoButtons(image, text, leftButtonLabel, rightButtonLabel, this);
    },

    leftButtonHandler: function () {
        GAME.state.start('death');
    },

    rightButtonHandler: function () {
        GAME.state.start('death');
    }
}
