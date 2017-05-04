var conscriptwife2_state = {

    create: function() {
        PLAYER.age = 22;
        var text = "Miehesi on vasta kotiutunut armeijasta, kun hänet lokakuussa 1939 kutsutaan ylimääräisiin kertausharjoituksiin. "
        +"Kylällä liikkuu huhuja, että kutsut enteilevät sotaa, mutta et halua uskoa niitä.";
        
        var image            = 'conscriptbackground';
        var centerButtonLabel = "Jatka";
        var infoText = "Ylimääräinen kertausharjoitus tarkoitti sitä, että palvelukseen kutsuttiin lähes kaikki " +
        "reserviin kuuluvat alle 60-vuotiaat upseerit ja alle 40-vuotiaat aliupseerit sekä miehistö. " +
        "Yli kuukauden kestäneissä harjoituksissa suomalaisten puolustuskyky -ja tahto lujittuivat " +
        "ennen kuin toinen maailmansota Suomessa alkoi.\n\nLähde: Ylimääräinen harjoitus kokoaa armeijan rajalle. Artikkeli. yle.fi";


        drawUIsingleButton(image, text, centerButtonLabel, this, infoText);
    },

    centerButtonHandler: function () {
        GAME.state.start('beginwar');
    }
}