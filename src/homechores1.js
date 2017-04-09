var homechores1_state = {

    create: function() {
        PLAYER.age = 12;

        if(PLAYER.gender === "female") {
            var gendertext = "kotiapulaiseksi";
            var rightButtonLabel = "Kotiapulaiseksi";
        } else {
            var gendertext = "juoksupojaksi leipomoon";
            var rightButtonLabel = "Juoksupojaksi";
        }

        var text = "Taivutko vanhempiesi tahtoon ja jatkat koulunpenkillä vai hankkiudutko mieluummin "+gendertext+"?";
        var leftButtonLabel  = "Kouluun";
        var image     = 'schoolbackground';

        drawUItwoButtons(image, text, leftButtonLabel, rightButtonLabel, this);
    },

    leftButtonHandler: function () {
        GAME.state.start('studies1');
    },

    rightButtonHandler: function () {
        if(PLAYER.gender === "male") {
            GAME.state.start('death');
        } else {
            GAME.state.start('death');
        }
    }
}
