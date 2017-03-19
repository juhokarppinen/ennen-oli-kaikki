var servant3_state = {

    create: function() {
        PLAYER.age = 14;

        var text = "Vaikka olet tottunut kovaan työhön pienestä pitäen, piikana " +
                   "oleminen on raskaampaa kuin olisit koskaan voinut kuvitellakaan. " +
                   "Paljoa et ehdi kovaa kohtaloasi surkutella, sillä iltaisin, kun " + 
                   "olet saanut päivän työt tehtyä, nukahdat samoin tein.";

        var image             = 'youthworkcountrybackground';
        var imageInfo         = "";
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, imageInfo, text, centerButtonLabel, this);
    },

    update: function() {
    }
}

function centerButtonHandler () {
    GAME.state.start('barn1');
}