var servant3_state = {

    create: function() {
        PLAYER.age = 16;

        if(PLAYER.gender === "female") {
            var gendertext = "emäntä";
        } else {
            var gendertext = "isäntä";
        }
        
        var leftButtonLabel  = "Jää";
        var rightButtonLabel = "Kaupunkiin";

        var text = "Talon "+ gendertext +" on lupaillut sinulle kevyempiä töitä ja samalla päiväpalkkasikin nousisi. "
        +"Lupaukset ovat kuitenkin hyvin epämääräisiä, etkä tiedä, toteutuvatko ne koskaan. "
        +"Jäätkö odottamaan vai lähdetkö etsimään töitä Jyväskylästä, josta moni on palannut kotiin entistä köyhempänä?";

        var image             = 'youthworkcountrybackground';

        drawUItwoButtons(image, text, leftButtonLabel, rightButtonLabel, this);
    },

    leftButtonHandler: function () {
        GAME.state.start('servant4');
    },

    rightButtonHandler: function () {
        GAME.state.start('citywork1');
    }
};
