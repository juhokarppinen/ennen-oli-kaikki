var homechores2_state = {

    create: function() {
        PLAYER.age = 15;

        if(PLAYER.gender === "male") {
            var gendertext = "isäsi";
        } else {
            var gendertext = "äitisi";
        }
        
        var text = "Raadat "+gendertext+" rinnalla kotitilalla, mutta et voi lakata jossittelemasta, millaiseksi elämäsi olisi muuttunut, jos olisit jatkanut opintoja.";
        
        var image = "homechorescountrybackground";
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('homechores3');
    }
}
