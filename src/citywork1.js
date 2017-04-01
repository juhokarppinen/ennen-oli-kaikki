var citywork1_state = {

    create: function() {
        PLAYER.age = 16;

        if(PLAYER.class === "poor") {
            if(PLAYER.gender === "male") {
            var text = "Lähtö kannatti! Saat töitä Valtion kivääritehtaalta. Palkkasi on parempi kuin renkinä, "
            +"mutta toisaalta joudut maksamaan asumisesta toisin kuin renkiaikoina. "
            +"Työ on raskasta tehtaallakin, mutta olet silti tyytyväinen maisemanvaihdokseen.";
        } else {
            var text = "Lähtö kannatti! Saat lastenhoitajan paikan apteekkarin talosta. "+
            "Olet erittäin tyytyväinen maisemanvaihdokseen.";
        }
        } else {
            "Tässä jotain keskiluokkaisen maalta tulleen töitä.";
        }
        
        var image     = 'citybackground';
            
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('dance1');
    }
}
