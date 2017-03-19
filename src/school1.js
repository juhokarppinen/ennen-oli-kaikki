var school1_state = {

    create: function() {
        PLAYER.age = 7;

        var text = "Vuonna 1921 Suomessa säädettiin laki yleisestä " + 
                   "oppivelvollisuudesta, joten aloitat koulutiesi sinä " + 
                   "syksynä, kun täytät seitsemän vuotta. Vuosi on 1924.";

        var image             = 'schoolbackground';
        var imageInfo         = "";
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, imageInfo, text, centerButtonLabel, this);
    },

    centerButtonHandler: function() {
        GAME.state.start('school2');
    }
}
