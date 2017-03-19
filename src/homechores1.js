var homechores1_state = {

    create: function() {
        PLAYER.age = 12;

        if (PLAYER.class === "poor") {
            var image     = 'homechorescountrybackground';
            var imageInfo = "";
            var text      = "Olet hyvä apu kotona, mutta perheeseen syntyy uusi " +
                            "vauva. Perheesi rahatilanne on niin tiukka, että " +
                            "joudut pian etsimään työtä muualta.";
        } else if (PLAYER.class === "middle") {
            var image     = 'homechores1background';
            var imageInfo = "";
            var text      = "Opit kotona kaiken kotiaskareista. Äitisi opettaa " +
                            "sinut laittamaan ruokaa ja ompelemaan vaatteita.";
        } else {
            var image     = 'homechores1background';
            var imageInfo = "";
            var text      = "Äitisi opettaa sinut laittamaan ruokaa ja ompelemaan " +
                            "vaatteita. Lisäksi isäsi harjoittaa lukutaitoasi " +
                            "lukemalla sanomalehteä ja kirjoja kanssasi.";
        }
        
        var centerButtonLabel   = "Jatka";

        drawUIsingleButton(image, imageInfo, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        if (PLAYER.location.name !== "Jyväskylä") {
            if (PLAYER.class === "poor") {
                GAME.state.start('homechores1choice');
            } else if (PLAYER.class === "middle") {
                GAME.state.start('homechores2');
            } else {
                GAME.state.start('death');
            }
        } else {
            if (PLAYER.class === "poor") {
                GAME.state.start('citywork1');
            } else {
                GAME.state.start('citywork2');
            }
        }
    }    
}
