var studies1_state = {

    create: function() {
        PLAYER.age = 12;
      
        var text = "Aloitat oppikoulun Jyväskylän lyseossa. Opiskelu osoittautuu " +
                   "paljon vaikeammaksi kuin olit odottanut ja pian kadut kouluun tuloa. " +
                   "Jatkatko opintoja vai lähdetkö mieluummin leskeksi jääneen " + 
                   "apteekkarienosi ";
        if(PLAYER.gender === "male") {
            text += "apupojaksi?";
            var rightButtonLabel = "Apupojaksi";
        } else {
            text += "aputytöksi?";
            var rightButtonLabel = "Aputytöksi";
        }

        var image           = 'studies1background';
        var imageInfo       = "";
        var leftButtonLabel = "Opintoja";

        drawUItwoButtons(image, imageInfo, text, leftButtonLabel, rightButtonLabel, this);
    },

    update: function() {
    }
}

function leftButtonHandler() {
    GAME.state.start('studies2');
}
function rightButtonHandler() {
    GAME.state.start('apprentice');
}