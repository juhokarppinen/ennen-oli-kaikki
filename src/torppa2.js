var torppa2_state = {

    create: function() {
        PLAYER.age = 16;

        var text = "Unelmasta on vihdoin tullut totta. Perheesi on nyt pientilallinen ja taksvärkkipäivät ovat historiaa. ";
        
        if(PLAYER.gender === "male") {
            text += "Jäätkö tekemään töitä isäsi rinnalle periäksesi torpan jonakin päivänä itsellesi vai lähdetkö kaupunkiin kokeilemaan onneasi?";
        } else {
            text += "Jäätkö hoitamaan koti- ja navetta-askareita äitisi rinnalle vai lähdetkö kaupunkiin kokeilemaan onneasi?";
        }
        
        var image = "youthworkcountrybackground";
        var leftButtonLabel  = "Jää";
        var rightButtonLabel = "Kaupunkiin";

        var infoText = "Vuoden 1918 lopussa vahvistettua torpparilakia alettiin panna täytäntöön vapunpäivänä 1919. Sen tarkoituksena oli antaa vuokratilallisille oikeus lunastaa tilansa itselleen.\n\n" +
                       "Lähteet: Puumalainen I. 2015. Lieksan Anni: aikakautensa vahva nainen; juuret.org/node/39.";

        drawUItwoButtons(image, text, leftButtonLabel, rightButtonLabel, this, infoText);
    },

    leftButtonHandler: function () {
        if(PLAYER.gender === "female") {
            GAME.state.start('torppa3');
        } else {
            GAME.state.start('barn0');
        }
    },

    rightButtonHandler: function () {
        GAME.state.start('citywork1');
    }
}