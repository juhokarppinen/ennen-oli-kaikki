var youthwork2_state = {

    create: function() {
        PLAYER.age = 13;

        if(PLAYER.location.name === "Jyväskylä") {
            var text = "Joku muu saa oppipojan paikan, ja joudut etsimään uutta työtä.";
            var image = 'youthworkcitybackground';
            var imageInfo = "";
        } else {
            var text = "Isäsi ei ole kovin tyytyväinen valintaasi, ja laittaa sinut " +
                   "rehkimään entistä kovempaa. Äitisi sen sijaan on tyytyväinen että pysyit kotona.";
            var image = 'youthworkcountrybackground';
            var imageInfo = "";
        }
        
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, imageInfo, text, centerButtonLabel, this);
    },

    update: function() {
    }
}

function centerButtonHandler () {
    if(PLAYER.location.name === "Jyväskylä") {
        GAME.state.start('death');
    } else {
        GAME.state.start('barn1');
    }
}