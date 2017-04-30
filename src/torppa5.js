var torppa5_state = {

    create: function() {

        var text = "Kevään muututtua kesäksi elämä alkaa taas näyttää valoisia puoliaan. Naapurin isäntä, joka menetti sodassa jalkansa, "
        +"on liehitellyt sinua jo tovin. Pidät hänestä kovasti ja avioliitto tarkoittaisi emännän paikkaa hänen talossaan. "
        +"Toisaalta epäilet, onko jalkapuolesta perheen elättäjäksi. Suostutko hänen kosintaansa?";
        
        var image = "youthworkcountrybackground";
        var leftButtonLabel  = "Kyllä";
        var rightButtonLabel = "Ei";

        drawUItwoButtons(image, text, leftButtonLabel, rightButtonLabel, this);
    },

    leftButtonHandler: function () {
        GAME.state.start('death');
    },

    rightButtonHandler: function () {
        GAME.state.start('death');
    }
}