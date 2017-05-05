var warend2_state = {

    create: function() {
        PLAYER.age = 28;
        var image = 'conscriptbackground';
        var text = "Viimeiset saksalaisjoukot vetäytyvät Norjan puolelle 27.4.1945 jättäen jälkeensä lähes maan tasalle poltetun Pohjois-Suomen.";
                
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('warend3');
    }
};