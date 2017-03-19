var homechores1choice_state = {

    create: function() {
        PLAYER.age = 13;

        var text = "Vaihtoehtoja näyttäisi olevan kaksi: hankkiudutko piiaksi " +
                   "naapuritilalle vai lähdetkö kaupunkiin töihin?";
        
        var image            = 'youthworkcountrybackground';
        var imageInfo        = "";
        var leftButtonLabel  = "Kaupunkiin";
        var rightButtonLabel = "Naapuritilalle";

        drawUItwoButtons(image, imageInfo, text, leftButtonLabel, rightButtonLabel, this);
    },

    leftButtonHandler: function () {
        GAME.state.start('citywork1');
    },

    rightButtonHandler: function () {
        GAME.state.start('servant3');
    }
}