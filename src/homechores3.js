var homechores3_state = {

    create: function() {
        PLAYER.age = 16;

        var image     = 'homechores1background';
        var text = "Välisi vanhempiesi kanssa viilenevät, ja haluaisit jättää torpan ja lähteä kaupunkiin. "
        +"Lähtö tarkoittaisi kuitenkin lopullista välirikkoa vanhempiisi, ja joutuisit hyvästelemään myös sinulle rakkaat sisaruksesi. "
        +"Lähdetkö vai jäätkö?";
        var leftButtonLabel  = "Kaupunkiin";
        var rightButtonLabel = "Kotiin";

        drawUItwoButtons(image, text, leftButtonLabel, rightButtonLabel, this);
    },

    leftButtonHandler: function () {
        GAME.state.start('citywork1');
    },

    rightButtonHandler: function () {
        GAME.state.start('death');
    }
}
