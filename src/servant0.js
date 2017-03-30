var servant0_state = {

    create: function() {
        PLAYER.age = 12;
        if(PLAYER.gender === "female") {
            var gendertext = "piikana";
        } else {
            var gendertext = "renkinä";
        }

        var text = "Vaikka olet tottunut kovaan työhön pienestä pitäen, "+gendertext +
                   " oleminen on raskaampaa kuin olisit koskaan voinut kuvitellakaan. " +
                   "Paljoa et ehdi kovaa kohtaloasi surkutella, sillä iltaisin, kun " + 
                   "olet saanut päivän työt tehtyä, nukahdat samoin tein.";

        var image             = 'youthworkcountrybackground';
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('servant3');
    }
}