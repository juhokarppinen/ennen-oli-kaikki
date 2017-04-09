var torppa3_state = {

    create: function() {
        PLAYER.age = 18;

        var text = "Äitisi on alkanut vihjailla, että sinun pitäisi etsiä hänelle vävypoika. "
        +"Hän on nimittäin huolissaan tulevaisuudestasi sitten, kun isästäsi aika jättää ja veljesi perii torpan. "
        +"Parasta olisi, jos pääsisit emännäksi toiseen taloon.";
        
        var image = "youthworkcountrybackground";
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('torppa4');
    }
}