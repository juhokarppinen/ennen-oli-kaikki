var newpath3_state = {

    create: function() {
        if("undefined" !== typeof PLAYER.spouse) {
            var image = "helsinkibackground";
            PLAYER.age = 36;
            var text = "Muutatte vastavalmistuneeseen kerrostaloon Helsingin Pohjois-Haagaan. Asunnossa on kaikki mukavuudet, kuten sisävessa, oma kylpyhuone ja sähköhella. "
            +"Uutuudenviehätyksen laimetessa alat kuitenkin ikävöidä kotiin.";
        } else {
            PLAYER.age = 33;
            var image = "citybackground";
            var text = "Siivoaminen ja kuuraaminen aiheuttavat sinulle jatkuvia selkäkipuja. "
            +"Apu löytyy kuitenkin yllättävästä paikasta. Työtoverisi houkuttelee sinut tansseihin, joita saa taas sodanaikaisen tanssikiellon jälkeen järjestää. "
            +"Et tiedä, onko se liikunnan vai tanssin tuoman ilon ansiota, mutta kivut alkavat hellittää.";
        }
                
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        if("undefined" !== typeof PLAYER.spouse) {
            GAME.state.start('newpath4');
        } else {
            GAME.state.start('sixties');
        }
    }
};