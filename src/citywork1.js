var citywork1_state = {

    create: function() {
        if(PLAYER.movedtocity === true) {
            var image     = 'homeassistantbackground';
            PLAYER.widowboss = true;
            var text = "Työsi ikääntyvän leskirouvan kotiapulaisena ei juuri poikkea töistäsi kotona, "
            +"mutta saat uutta sisältöä elämääsi vasta perustetusta Jyväskylän kansalaisopistosta, jossa opiskelet vapaa-ajallasi englantia ja kuorolaulua.";
        } else {
            PLAYER.age = 16;
            PLAYER.movedtocity = true;
            if(PLAYER.class === "poor") {
                if(PLAYER.gender === "male") {
                    var image     = 'riflefactorybackground';
                    var text = "Lähtö kannatti! Saat töitä Valtion kivääritehtaalta. Palkkasi on parempi kuin renkinä, "
                    +"mutta toisaalta joudut maksamaan asumisesta toisin kuin renkiaikoina. "
                    +"Työ on raskasta tehtaallakin, mutta olet silti tyytyväinen maisemanvaihdokseen.";
                    var infoText = "Sotateollisuus kasvoi Jyväskylässä suureksi 1920-  ja 1930-luvulla, kun kaupunkiin " +
                    "perustettiin ruuti-, kivääri- ja tykkitehdas. Vuonna 1936 perustettu Rautpohjan tykkitehdas tunnetaan " +
                    "nykyään Valmet tehtaana. Valmet tunnetaan yhtenä Keski-Suomen suurimmista työllistäjistä.\n\n" +
                    "Lähteet: 1) Keski-Suomen suurimmat työllistäjät. Artikkeli. Keskisuomalainen. 2) Jäppinen J., " +
                    "Voutilainen H., Keski-Suomen museo: Markkinapaikasta mainio kaupunki. jkl.fi";
                    PLAYER.job = "riflefactory";
                } else {
                    var image     = 'homeassistantbackground';
                    PLAYER.widowboss = true;
                    var text = "Lähtö kannatti! Saat kotiapulaisen paikan ikääntyvän leskirouvan luota. "
                    +"Hän vaatii sinulta paljon, mutta olet tyytyväinen, sillä palkkasi riittää vaatteisiin, joista et aiemmin uskaltanut edes haaveilla.";
                }
            } else {
                if(PLAYER.gender === "male") {
                    var image     = 'plywoodfactorybackground';
                    var text = "Vaikka valinta oli vaikea, et ole katunut sitä hetkeäkään. Työsi vaneritehtaalla on rankkaa, "
                    +"mutta saat uutta sisältöä elämääsi vasta perustetusta Jyväskylän kansalaisopistosta, jossa opiskelet vapaa-ajallasi laskentoa ja koneenpiirustusta.";
                    var infoText = "Vuonna 1912 Jyväsjärven rantaan perustettiin Wilh. Schaumanin Faneeritehdas Oy. " +
                    "Vuonna 1920 sen tuotannon arvo oli kymmenkertainen toiseksi suurimpaan Fredriksoniin verrattuna.\n\n" +
                    "Lähde: Jäppinen J., Voutilainen H., Keski-Suomen museo: Markkinapaikasta mainio kaupunki. jkl.fi";
                    PLAYER.job = "plywoodfactory";
                } else {
                    var image     = 'homeassistantbackground';
                    PLAYER.widowboss = true;
                    var text = "Vaikka valinta oli vaikea, et ole katunut sitä hetkeäkään. Työsi leskirouvan kotiapulaisena ei juuri poikkea töistäsi kotona, "
                    +"mutta saat uutta sisältöä elämääsi vasta perustetusta Jyväskylän kansalaisopistosta, jossa opiskelet vapaa-ajallasi englantia ja kuorolaulua.";
                }
            }
        }
            
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this, infoText);
    },

    centerButtonHandler: function () {
        if(PLAYER.gender === "male") {
            GAME.state.start('conscript');
        } else {
            GAME.state.start('beforewar');
        }
    }
};
