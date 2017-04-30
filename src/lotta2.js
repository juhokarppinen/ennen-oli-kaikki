var lotta2_state = {

    create: function() {

        var text = "Kotinsa menettäneiden siirtokarjalaisten tilanne on vaikea. Asunnoista on pula, ja "
        +"osa evakoista on joutunut jättämään kaiken omaisuutensa rajan taakse. Vietät seuraavat kuukaudet "
        +"järjestäen evakoille huonekaluja ja vaatteita.";
        
        var image = "homechorescitybackground";
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('death');
    }
}