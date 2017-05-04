var newpath4_state = {

    create: function() {
        var image = "citybackground";
        PLAYER.age = 38;
        var text = "Esikoisesi aloittaa syksyllä koulun. Uudet arkirutiinit piristävät sinuakin ja tutustut lähiön muihin pohjoishaagalaisiin äiteihin. "
        +"Kun kuopuksesi aloittaa koulun 1958, hankitte iltojenne iloksi television, jota naapuritkin tulevat mielellään ihmettelemään.";
                
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('sixties');
    }
}