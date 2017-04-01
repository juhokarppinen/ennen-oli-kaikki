var studies5_state = {

    create: function() {
        if(PLAYER.gender === "male") {
            var text = "Muutat oppikoulun asuntolaan ja välit perheeseesi viilenevät. "
            +"Kun toverisi lähtevät viikonlopuiksi koteihinsa, jäät asuntolaan yksin. "
            +"Pakenet yksinäisyyttä ja koti-ikävää kirjojen maailmaan ja alat haaveilla yliopisto-opinnoista.";
        } else {
            var text = "Ahkera opiskelusi tuottaa tuloksia ja pääset kuin pääsetkin jatkamaan opintiellä. Aloitat oppikoulun ";

            if(PLAYER.location.name === "Jämsä") {
                text += "Jämsän yhteiskoulussa."
            }   else {
                text += "Jyväskylän tyttökoulussa."
            }
        }

        var centerButtonLabel = "Jatka";
        var image           = 'studies1background';

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function() {
        GAME.state.start('studies2');
    }
}