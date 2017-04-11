var beforewar_state = {

    create: function() {
        PLAYER.age = 22;
        if(PLAYER.location.name === "Jyväskylä") {
            var text = "Kaupungin kadut hiljenevät lokakuussa 1939, kun kaikki reserviläiset "
            +"kutsutaan ylimääräisiin kertaushajoituksiin. Myös veljesi saa kutsun. "
            +"Isäsi yrittää lohduttaa nyyhkyttävää äitiäsi sanomalla, että ehkä kyse "
            +"tosiaankin on vain harjoituksista, mutta kuulet huolen hänen äänestään.";
        } else if(PLAYER.movedtocity === true) {
            var text = "Kaupungin kadut hiljenevät lokakuussa 1939, kun kaikki reserviläiset "
            +"kutsutaan ylimääräisiin kertaushajoituksiin. Myös vuokranantajasi poika saa kutsun. "
            +"Yrität lohduttaa hänen nyyhkyttävää äitiään parhaasi mukaan.";
        } else {
            var text = "Kylän raitilla on hiljaista, sillä lähes kaikki seudun miehet kaikkein nuorimpia "
            +"ja vanhimpia lukuunottamatta on kutsuttu ylimääräisiin kertausharjoituksiin. Kotiin jääneiden ilmeet ovat vakavia.";
        }
        
        var image            = 'conscriptbackground';
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('beginwar');
    }
}