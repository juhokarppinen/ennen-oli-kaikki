var citywork1_state = {

    create: function() {
        PLAYER.age = 16;
        PLAYER.movedtocity = true;
        if(PLAYER.class === "poor") {
            if(PLAYER.gender === "male") {
                var image     = 'riflefactorybackground';
                var text = "Lähtö kannatti! Saat töitä Valtion kivääritehtaalta. Palkkasi on parempi kuin renkinä, "
                +"mutta toisaalta joudut maksamaan asumisesta toisin kuin renkiaikoina. "
                +"Työ on raskasta tehtaallakin, mutta olet silti tyytyväinen maisemanvaihdokseen.";
            } else {
                var image     = 'citybackground';
                var text = "Lähtö kannatti! Saat lastenhoitajan paikan apteekkarin talosta. "
                +"Työhösi kuuluu lastenhoidon lisäksi siivousta ja ruoanlaittoa apteekkarin rouvan valvovan silmän alla.";
            }
        } else {
            if(PLAYER.gender === "male") {
                var image     = 'plywoodfactorybackground';
                var text = "Vaikka valinta oli vaikea, et ole katunut sitä hetkeäkään. Työsi vaneritehtaalla on rankkaa, "
                +"mutta saat uutta sisältöä elämääsi vasta perustetusta Jyväskylän kansalaisopistosta, jossa opiskelet vapaa-ajallasi laskentoa ja koneenpiirustusta.";
            } else {
                var image     = 'citybackground';
                var text = "Vaikka valinta oli vaikea, et ole katunut sitä hetkeäkään. Työsi kotiapulaisena ei juuri poikkea töistäsi kotona, "
                +"mutta saat uutta sisältöä elämääsi vasta perustetusta Jyväskylän kansalaisopistosta, jossa opiskelet vapaa-ajallasi englantia ja kuorolaulua.";
            }
        }
            
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        if(PLAYER.gender === "male") {
            GAME.state.start('conscript');
        } else {
            GAME.state.start('beginwar');
        }
    }
}
