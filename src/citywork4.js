var citywork4_state = {

    create: function() {
        PLAYER.age = 14;
        var text = "Pääset töihin vaneritehtaan pakkausosastolle. Ylpeytesi saa kolauksen, kun osastolla työskentelevät "
        +"naiset ovat sinua näppärämpiä vasaran ja paikkaraudan kanssa ja suoriutuvat töistä sinua nopeammin.";

        var image               = 'plywoodfactorybackground';
        var centerButtonLabel   = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('conscript');
    }
}