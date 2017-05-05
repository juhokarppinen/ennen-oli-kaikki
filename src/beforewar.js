var beforewar_state = {

    create: function() {
        PLAYER.age = 22;
        if(PLAYER.gender === "male") {
          var text = "Kylän raitilla on hiljaista lokakuussa 1939, sillä lähes kaikki työikäiset miehet on "
          +"kutsuttu ylimääräisiin kertausharjoituksiin. Tunnet itsesi toisen luokan "
          +"kansalaiseksi, kun joudut jäämään naisväen kanssa kotirintamalle.";
        } else if(PLAYER.location.name === "Jyväskylä") {
            var text = "Kaupungin kadut hiljenevät lokakuussa 1939, kun kaikki reserviläiset "
            +"kutsutaan ylimääräisiin kertaushajoituksiin. Myös veljesi saa kutsun. "
            +"Isäsi yrittää lohduttaa nyyhkyttävää äitiäsi sanomalla, että ehkä kyse "
            +"tosiaankin on vain harjoituksista, mutta kuulet huolen hänen äänestään.";
        } else if(PLAYER.widowboss === true) {
            var text = "Kaupungin kadut hiljenevät lokakuussa 1939, kun kaikki reserviläiset "
            +"kutsutaan ylimääräisiin kertaushajoituksiin. Myös leskirouvan poika saa kutsun, vaikka on jo lähes 40-vuotias. "
            +"Yrität lohduttaa nyyhkyttävää rouvaa parhaasi mukaan.";
        } else if(PLAYER.movedtocity === true) {
            var text = "Kaupungin kadut hiljenevät lokakuussa 1939, kun kaikki reserviläiset "
            +"kutsutaan ylimääräisiin kertaushajoituksiin. Myös vuokranantajasi poika saa kutsun. "
            +"Yrität lohduttaa pojan nyyhkyttävää äitiään parhaasi mukaan.";
        } else {
            var text = "Kylän raitilla on hiljaista lokakuussa 1939, sillä lähes kaikki seudun miehet kaikkein nuorimpia "
            +"ja vanhimpia lukuunottamatta on kutsuttu ylimääräisiin kertausharjoituksiin. Kotiin jääneiden ilmeet ovat vakavia.";
        }
        
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
};