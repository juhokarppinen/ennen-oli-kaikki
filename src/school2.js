var school2_state = {

    create: function() {
        PLAYER.age = 11;

        var text = "Vuonna 1928 pääset kansakoulusta. ";
        var centerButtonLabel;
        
        if(PLAYER.location.name === "Jyväskylä") {
            if(PLAYER.class ==="poor") {
                //todo:
                //centerButtonLabel = "Kouluun";
                //text += "Lukeminen ei ole lempipuuhaasi, mutta vanhempasi haluavat silti sinun jatkavan koulussa.";
                centerButtonLabel = "Töihin";
                text += "Perheelläsi ei ole varaa oppikouluun ja kotona " +
                    "tarvitaan apuasi, joten koulutiesi päättyy tähän.";
            } else if(PLAYER.class === "middle") {
                centerButtonLabel = "Töihin";
                text += "Sinulle tarjotaan vapaa-oppilaan paikkaa oppikouluun, jonka ottaisit mieluusti vastaan, mutta vanhempasi haluavat sinut pois koulunpenkiltä ja töihin.";
                //todo:
                //centerButtonLabel = "Kouluun";
                //text += "Lukeminen ei ole lempipuuhaasi, mutta vanhempasi haluavat silti sinun jatkavan koulussa.";
            } else { //rich
                centerButtonLabel = "Oppikouluun";
                text += "Opettajasi kannustaa sinua jatkamaan oppikouluun. " +
                    "Pääsykokeista selvittyäsi vanhempasi ovat ylpeitä ja " +
                    "lähettävät sinut oppikouluun mielellään.";
            }
        } else {
            if(PLAYER.class ==="poor") {
                if(PLAYER.gender === "female") {
                    var servanttext = "pikkupiiaksi";
                } else {
                    var servanttext = "pikkurengiksi";
                }
                centerButtonLabel = "Töihin";
                if(PLAYER.location.name === "Hankasalmi") {
                    text += "Sinulla ei liiemmin ole lukupäätä, eikä vanhemmillasi olisi varaakaan kouluttaa sinua enempää, "+
                        "joten vanhempasi lähettävät sinut "+servanttext+" tilalle, jonka mailla asutte.";
                } else {
                    text += "Opettajasi kannustaa sinua jatkamaan oppikouluun, johon saisit vapaapaikan. "
                    +"Vanhemmillasi ei kuitenkaan ole varaa elättää sinua, ja sinut lähetetään "+servanttext+" Kartanoon, jonka mailla asutte.";
                }
            } else if(PLAYER.class === "middle") {
               centerButtonLabel = "Töihin";
               text += "Sinulle tarjotaan vapaa-oppilaan paikkaa oppikouluun, jonka ottaisit mieluusti vastaan, mutta vanhempasi haluavat sinut pois koulunpenkiltä ja töihin.";
            } else { //rich
                centerButtonLabel = "Oppikouluun";
                text += "Opettajasi kannustaa sinua jatkamaan oppikouluun. " +
                    "Pääsykokeista selvittyäsi vanhempasi ovat ylpeitä ja " +
                    "lähettävät sinut oppikouluun mielellään.";
            }
        }

        var image     = 'schoolbackground';

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        if(PLAYER.location.name === "Jyväskylä") {
            if(PLAYER.class ==="poor") {
                if(PLAYER.gender === "female") {
                    GAME.state.start('homechores1');
                } else {
                    GAME.state.start('youthwork1');
                }
            } else if(PLAYER.class === "middle") {
                if(PLAYER.gender === "female") {
                    GAME.state.start('homechores1');
                } else {
                    GAME.state.start('youthwork1');
                }
            } else { //rich
                GAME.state.start('studies1');
            }
        } else {
            if(PLAYER.class ==="poor") {
                GAME.state.start('servant0');
            } else if(PLAYER.class === "middle") {
               if(PLAYER.gender === "female") {
                    GAME.state.start('homechores1');
                } else {
                    GAME.state.start('youthwork1');
                }
            } else { //rich
                GAME.state.start('studies1');
            }
        }        
    }
}