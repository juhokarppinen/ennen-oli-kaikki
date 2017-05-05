var newpath2_state = {

    create: function() {
        if(PLAYER.lotta === true) {
            if(PLAYER.university === true) {
                PLAYER.age = 34;
                var image = "weddingbackground";
                var text = "Rakastuit opiskeluaikanasi kurssitoveriisi, joka vei sinut vihille. Palasitte kotiseudullesi, sillä haluat olla "
                +"lähellä ikääntyviä vanhempiasi. Miehesi pyörittää yhteistä apteekkianne sinun hoitaessa kotona vastasyntynyttä esikoistanne.";
            } else {
                var image = "plywoodfactorybackground";
                PLAYER.age = 32;
                var text = "Opintosi jäivät ennen sotia puolitiehen, mutta työkokemuksesi korvaa koulutuksen puutteen. Saat konttoristin paikan "
                +"vaneritehtaan toimistolta. Asiaa auttaa se, että entinen esimiehesi tuntee tehtaan materiaalihankinnoista vastaavan johtajan.";
                var infoText = "Vuonna 1912 Jyväsjärven rantaan perustettiin Wilh. Schaumanin Faneeritehdas Oy. " +
                    "Vuonna 1920 sen tuotannon arvo oli kymmenkertainen toiseksi suurimpaan Fredriksoniin verrattuna.\n\n" +
                    "Lähde: Jäppinen J., Voutilainen H., Keski-Suomen museo: Markkinapaikasta mainio kaupunki. jkl.fi";
            }
        } else if(PLAYER.widowboss === true) {
            if("undefined" !== typeof PLAYER.spouse) {
                var image = "citybackground";
                PLAYER.age = 35;
                var text = "Kun kuopuksesi on päässyt vaipoistaan, palaat pikkuhiljaa töihin, sillä haluat tienata edes vähän omaa rahaa. "
                +"Naapurustossa on useita kotiäitejä, joten lastenhoitoapua järjestyy helposti. Olet onnellinen juuri näin etkä halua uskoa korviasi, "
                +"kun miehesi ilmoittaa hyväksyneensä työtarjouksen Helsingistä.";
            } else {
                PLAYER.age = 33;
                var image = "citybackground";
                var text = "Leskirouvan poika työskentelee työnjohtajana Valmetilla ja hommaa sinulle siivoojan paikan tehtaalta. "
                +"Saat vuokra-asunnon Valimonmäeltä, tehtaan kupeesta. Rouvan luona asuessasi oli tottunut mukavuuksiin, jotka uudesta kodistasi puuttuvat. "
                +"Onneksi asunnossa on kuitenkin juokseva vesi.";
            }
        } else {
            var image = "candyfactorybackground";
            PLAYER.age = 33;
            var text = "Vuosien seisomatyö tehtaalla alkaa tuntua kolotuksena selässä ja hartioissa. Vaikka olet vielä nuori, ja pelkäät menettäväsi työkykysi ennen aikojaan. "
            +"Apu löytyy kuitenkin yllättävästä paikasta. Työtoverisi houkuttelee sinut tansseihin, joita saa taas sodanaikaisen tanssikiellon jälkeen järjestää. "
            +"Et tiedä, onko se liikunnan vai tanssin tuoman ilon ansiota, mutta kivut alkavat hellittää.";
        }
                
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this, infoText);
    },

    centerButtonHandler: function () {
        if(PLAYER.lotta === true) {
            GAME.state.start('sixties');
        } else if(PLAYER.widowboss === true) {
            if("undefined" !== typeof PLAYER.spouse) {
                GAME.state.start('newpath3');
            } else {
                GAME.state.start('newpath3');
            }
        } else {
            GAME.state.start('sixties');
        }
    }
};