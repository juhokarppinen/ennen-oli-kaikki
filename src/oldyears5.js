var oldyears5_state = {
    create: function() {
        var image = "citybackground";
        PLAYER.age = 74;
        var text = "Olet alkanut unohdella asioita, hukata avaimia ja sen sellaista. Ajattelet sen kuuluvan vanhuuteen, etkä ole moksiskaan. "
        +"Tyttäresi passittaa sinut kuitenkin lääkärin vastaanotolle sen jälkeen, kun olet aiheuttanut useamman palohälytyksen unohtamalla ruoat liedelle käryämään. "
        +"Diagnoosi on Alzheimerin tauti.";
                
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        PLAYER.causeofdeath = "alzheimer";
        GAME.state.start('death');
    }
};