var studies5_state = {

    create: function() {
        if(PLAYER.gender === "male") {
            var image           = 'studies1background';
            var text = "Muutat oppikoulun asuntolaan ja välit perheeseesi viilenevät. "
            +"Kun toverisi lähtevät viikonlopuiksi koteihinsa, jäät asuntolaan yksin. "
            +"Pakenet yksinäisyyttä ja koti-ikävää kirjojen maailmaan ja alat haaveilla yliopisto-opinnoista.";
        } else {
            var image     = 'studieswomenbackground';
            if(PLAYER.location.name !== "Jyväskylä") {
                PLAYER.movedtocity = true;
            }
            var text = "Ahkera opiskelusi tuottaa tuloksia ja pääset kuin pääsetkin jatkamaan opintiellä. Aloitat oppikoulun "
            +"Jyväskylän tyttökoulussa.";
        }

        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function() {
        GAME.state.start('studies2');
    }
};