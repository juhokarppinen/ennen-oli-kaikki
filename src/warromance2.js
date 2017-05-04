var warromance2_state = {

    create: function() {
        
        var image = 'barnbackground';
        var text = PLAYER.crush+" vastaa kyllä. Paluuta rintamalle helpottaa ajatus uudesta lomasta, "
        +"jonka toivot uskot järjestyvän pian häitä varten.";
                
        var centerButtonLabel = "Jatka";
        var infoText = "Sota-aikana avioliittoja solmittiin runsaasti, sillä sotilaan vaimo sai kuukausipalkkaa " +
        "valtiolta. Itse sotilas sai enemmän lomapäiviä. Monet sota-ajan pika-avioliitot kuitenkin päättyivät " +
        "myös nopeasti sodan jälkeen. Avioerojen määrä kasvoi.\n\nLähde: Elämää kotirintamalla. Artikkeli. yle.fi";

        drawUIsingleButton(image, text, centerButtonLabel, this, infoText);
    },

    centerButtonHandler: function () {
        GAME.state.start('war5');
    }
}