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
                    PLAYER.job = "plywoodfactory";
                } else {
                    var image     = 'homeassistantbackground';
                    PLAYER.widowboss = true;
                    var text = "Vaikka valinta oli vaikea, et ole katunut sitä hetkeäkään. Työsi leskirouvan kotiapulaisena ei juuri poikkea töistäsi kotona, "
                    +"mutta saat uutta sisältöä elämääsi vasta perustetusta Jyväskylän kansalaisopistosta, jossa opiskelet vapaa-ajallasi englantia ja kuorolaulua.";
                }
            }
        }
        
        this.backgroundSound = GAME.add.audio('ambience-city');
        this.backgroundSound.loop = true;
        this.backgroundSound.volume = 0.15;
        this.backgroundSound.play();
            
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        this.backgroundSound.stop();
        if(PLAYER.gender === "male") {
            GAME.state.start('conscript');
        } else {
            GAME.state.start('beforewar');
        }
    }
}
