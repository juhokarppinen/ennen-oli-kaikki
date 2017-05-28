var servant2_state = {

    create: function() {
        PLAYER.age = 17;

        if(PLAYER.gender === "female") {
            var gendertext = "piikana";
        } else {
            var gendertext = "renkinä";
        }

        var text = "Vaikka olet tottunut kovaan työhön pienestä pitäen, "+gendertext +
                   " oleminen on raskaampaa kuin olisit koskaan voinut kuvitellakaan. "
                   "Paljoa et ehdi kohtaloasi surkutella. Nukahdat samoin tein " +
                   "iltaisin, kun olet saanut päivän työt tehtyä.";
        
        var image             = 'youthworkcountrybackground';
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('servant4');
    }
};