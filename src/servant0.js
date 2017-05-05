var servant0_state = {

    create: function() {
        PLAYER.age = 12;
        if(PLAYER.gender === "female") {
            var gendertext = "piikana";
            var image             = 'youthworkcountrybackground';
        } else {
            var gendertext = "renkinä";
            var image = 'childworkcountrybackground';
        }

        var text = "Vaikka olet tottunut kovaan työhön pienestä pitäen, "+gendertext +
                   " oleminen on raskaampaa kuin olisit koskaan voinut kuvitellakaan. " +
                   "Paljoa et ehdi kohtaloasi surkutella. Nukahdat samoin tein " +
                   "iltaisin, kun olet saanut päivän työt tehtyä.";

        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        if(PLAYER.noschool === true) {
            GAME.state.start('servant4');
        } else {
            GAME.state.start('servant3');
        }
    }
};