var warend2_state = {

    create: function() {
        PLAYER.age = 28;
        var image = 'conscriptbackground';
        var text = "Viimeiset saksalaisjoukot vetäytyvät Norjan puolelle 27.4.1945 jättäen jälkeensä lähes maan tasalle poltetun Pohjois-Suomen.";
                
        var centerButtonLabel = "Jatka";
        var infoText = "Talvi- ja jatkosota (1939 - 1944) sekä Lapin sota (1944 - 1945) vaativat yhteensä noin 95 000 suomalaisen hengen." +
            "\n\nLähde: Juutilainen, A & Leskinen, J. (toim.). Jatkosodan pikkujättiläinen.";

        drawUIsingleButton(image, text, centerButtonLabel, this, infoText);
    },

    centerButtonHandler: function () {
        GAME.state.start('warend3');
    }
};