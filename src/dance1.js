var dance1_state = {

    create: function() {
        PLAYER.age = 19;

        if(PLAYER.gender === "male") {
            PLAYER.crush = pickName("female");
            var text = "Livahdat lähistöllä järjestettäviin tansseihin, joissa tapaat nätin tytön. " +
                   "Tanssien päätteeksi " + PLAYER.crush + " kysyy haluatko saattaa " +
                   "hänet kotiin, suostutko ehdotukseen?";
        } else {
            PLAYER.crush = pickName("male");
            var text = "Livahdat lähistöllä järjestettäviin tansseihin, joissa tapaat komean nuorukaisen. " +
                   "Tanssien päätteeksi " + PLAYER.crush + " haluaa saattaa " +
                   "sinut kotiin, suostutko ehdotukseen?";
        }
        
        var image            = 'citybackground';
        var leftButtonLabel  = "Kyllä";
        var rightButtonLabel = "Ei";

        drawUItwoButtons(image, text, leftButtonLabel, rightButtonLabel, this);
    },

    leftButtonHandler: function () {
        GAME.state.start('death');
    },

    rightButtonHandler: function () {
        GAME.state.start('death');
    }
}