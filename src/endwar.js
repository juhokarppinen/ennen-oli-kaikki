var endwar_state = {

    create: function() {
        PLAYER.age = 23;
        var image          = 'articlepeace2';
        var centerButtonLabel = "Jatka";
        var text = "Moskovan rauhansopimuksen ehtojen mukaan Suomen on luovutettava noin kymmenesosa pinta-alastaan " +
            "Neuvostoliitolle. Yli 400 000 karjalaista menettää kotinsa.";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        if(PLAYER.gender === "male" && PLAYER.noconscript !== true) {
            GAME.state.start('peacesoldier2');
        } else {
            GAME.state.start('peacetime2');
        }
    }
};