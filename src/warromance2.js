var warromance2_state = {

    create: function() {
        
        var image = 'barnbackground';
        var text = PLAYER.crush+" vastaa kyllä. Paluuta rintamalle helpottaa ajatus uudesta lomasta, "
        +"jonka toivot uskot järjestyvän pian häitä varten.";
                
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('death');
    }
}