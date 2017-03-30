var homechores2_state = {

    create: function() {
        PLAYER.age = 16;

        if(PLAYER.gender === "male") {
            var text = "Kasvat aikuiseksi isäsi rinnalla, töitä tehden. Haaveilet edelleen opiskelusta, "
            +"mutta päivät pellolla vievät kaiken voimasi, etkä jaksa lukea iltaisin, "
            +"vaikka vanha opettajasi sinulle auliisti kirjojaan lainaakin.";
        } else {
            var text = "Vuosien kuluessa saat lisää vastuuta ja pääset auttamaan "+
                       "tilan hoitamiseen liittyvissä tehtävissä.";
        }
        
        var image = "homechorescountrybackground";
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('barn1');
    }
}
