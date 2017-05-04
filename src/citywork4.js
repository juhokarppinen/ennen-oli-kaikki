var citywork4_state = {

    create: function() {
        PLAYER.age = 14;
        var text = "Pääset töihin vaneritehtaan pakkausosastolle. Ylpeytesi saa kolauksen, kun osastolla työskentelevät "
        +"naiset ovat sinua näppärämpiä vasaran ja paikkaraudan kanssa ja suoriutuvat töistä sinua nopeammin.";
        PLAYER.job = "plywoodfactory";
        var infoText = "Vuonna 1912 Jyväsjärven rantaan perustettiin Wilh. Schaumanin Faneeritehdas Oy. " +
                    "Vuonna 1920 sen tuotannon arvo oli kymmenkertainen toiseksi suurimpaan Fredriksoniin verrattuna.\n\n" +
                    "Lähde: Jäppinen J., Voutilainen H., Keski-Suomen museo: Markkinapaikasta mainio kaupunki. jkl.fi";

        var image               = 'plywoodfactorybackground';
        var centerButtonLabel   = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this, infoText);
    },

    centerButtonHandler: function () {
        GAME.state.start('conscript');
    }
}