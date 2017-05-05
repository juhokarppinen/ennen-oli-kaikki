var school2_state = {

    create: function() {
        PLAYER.age = 11;

        var text = "Vuonna 1928 pääset kansakoulusta. ";
        var centerButtonLabel;
        
        if(PLAYER.location.name === "Jyväskylä") {
            if(PLAYER.class ==="rich") {
                centerButtonLabel = "Jatka";
                text += "Koulu ei kiinnosta, etkä selviä oppikoulun pääsykokeista ensi yrittämällä. Vanhempasi ovat kuolla häpeästä.";
            } else {
                text += "Lukeminen ei ole lempipuuhaasi, mutta vanhempasi haluavat silti sinun jatkavan koulussa.";
                centerButtonLabel = "Jatka";
            }
        } else {
            if(PLAYER.class ==="poor") {
                if(PLAYER.gender === "female") {
                    var gendertext = "pikkupiiaksi";
                } else {
                    var gendertext = "pikkurengiksi";
                }
                centerButtonLabel = "Töihin";
                text += "Opettajasi kannustaa sinua jatkamaan oppikouluun, johon saisit vapaapaikan. "
                +"Vanhemmillasi ei kuitenkaan ole varaa elättää sinua. Sinut lähetetään "+gendertext+" Kartanoon, jonka mailla asutte.";
            } else if(PLAYER.class === "middle") {
               centerButtonLabel = "Jatka";
               if(PLAYER.gender === "female") {
                    var gendertext = "pikkusisaruksiesi hoidossa";
                } else {
                    var gendertext = "torpan töissä";
                }
               text += "Olet terävä oppilas, ja opettajasi kannustaa sinua jatkamaan oppikouluun. "
               +"Vanhempasi tarvitsevat kuitenkin apuasi "+gendertext+", joten koulutiesi päättyy tähän.";
            } else { //rich
                centerButtonLabel = "Jatka";
                text += "Koulu ei kiinnosta, etkä selviä oppikoulun pääsykokeista ensi yrittämällä. Vanhempasi ovat kuolla häpeästä.";
            }
        }

        var image     = 'schoolbackground';

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        if(PLAYER.location.name === "Jyväskylä") {
            if(PLAYER.class ==="rich") {
                GAME.state.start('studies4');
            } else {
                GAME.state.start('homechores1');
            }
        } else {
            if(PLAYER.class ==="poor") {
                GAME.state.start('servant0');
            } else if(PLAYER.class === "middle") {
                GAME.state.start('torppa1');
            } else { //rich
                if(PLAYER.gender === "female") {
                    GAME.state.start('studies0');
                } else {
                    GAME.state.start('studies4');
                }
            }
        }        
    }
};