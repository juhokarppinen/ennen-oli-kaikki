var warcrush4_state = {

    create: function() {
        
        var image = 'barnbackground';
        var text = PLAYER.crush+" lupaa anoa ensitöikseen avioitumislomaa, kun hän pääsee takaisin asemiinsa. "
        +"Kun kerrot leskirouvalle kihlauksesta, hän lupaa, että saat penkoa hänen vanhoista "
        +"vaatteistaan itsellesi jotakin hääpuvuksi sopivaa.";
                
        var centerButtonLabel = "Jatka";
        var infoText = "Sota-aikana avioliittoja solmittiin runsaasti, sillä sotilaan vaimo sai kuukausipalkkaa " +
        "valtiolta. Itse sotilas sai enemmän lomapäiviä. Monet sota-ajan pika-avioliitot kuitenkin päättyivät " +
        "myös nopeasti sodan jälkeen. Avioerojen määrä kasvoi.\n\nLähde: Elämää kotirintamalla. Artikkeli. yle.fi";

        drawUIsingleButton(image, text, centerButtonLabel, this, infoText);
    },

    centerButtonHandler: function () {
        PLAYER.spouse = PLAYER.crush;
        GAME.state.start('wartime6');
    }
}