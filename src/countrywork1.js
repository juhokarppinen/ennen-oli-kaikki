var countrywork1_state = {

    create: function() {
        PLAYER.age = 19;
        PLAYER.improvement = true;
        var text = "Isäsi toipuu pettymyksestään pian, sillä olet osoittautunut erinomaiseksi työnjohtajaksi "
        +"pappilan mailla. Haluat tehdä pappilan tilasta tuottavan maatalousyrityksen ja "
        +"suunnittelet ensitöiksesi rakennuttavasi suuremman navetan.";

        var image               = 'countrybackground';
        var centerButtonLabel   = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('conscript');
    }
};