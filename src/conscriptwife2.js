var conscriptwife2_state = {

    create: function() {
        PLAYER.age = 22;
        var text = "Miehesi on vasta kotiutunut armeijasta, kun hänet lokakuussa 1939 kutsutaan ylimääräisiin kertausharjoituksiin. "
        +"Kylällä liikkuu huhuja, että kutsut enteilevät sotaa, mutta et halua uskoa niitä.";
        
        var image            = 'conscriptbackground';
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('beginwar');
    }
}