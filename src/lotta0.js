var lotta0_state = {

    create: function() {
        PLAYER.age = 19;

        var text = "Vaikka et päätynytkään opiskelemaan sairaanhoitajaksi asti, pääset lottatyön kautta opettelemaan hoivataitoja. "
        +"Lottatyö vie suurimman ajastasi, sillä lääkintäjaoston tehtävien lisäksi osallistut viikoittain pakollisiin ompeluiltoihin, "
        +"joissa ommellaan ja korjataan paikallisten suojeluskuntalaisten varusteita.";
        
        var image = "homechorescitybackground";
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('beforewar');
    }
};