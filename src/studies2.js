var studies2_state = {

    create: function() {
        if (PLAYER.gender === "male") {
            PLAYER.age = 16;
            var image     = 'studies1background';
            var text = "Onneksi olkoon, tuore ylioppilas! ";
                if(PLAYER.location.name === "Jyväskylä") {
                    text += "Jatkatko isäsi jalanjäljissä ja menet Jyväskylän kasvatusopilliseen korkeakouluun jatkamaan opintojasi vai "
                    +"seuraatko sydäntäsi ja haet Helsingin yliopistoon opiskelemaan lääketiedettä?";
                    var leftButtonLabel  = "Kasvatusoppi";
                    var rightButtonLabel = "Lääketiede";
                } else {
                    text += "Vanhempasi toivovat sinun jatkavan isäsi jalanjäljissä, mikä "
                    +"vaatisi korkeakouluopintoja Helsingissä. Lähdetkö vai jäätkö?";
                    var leftButtonLabel  = "Lähdet";
                    var rightButtonLabel = "Jäät";
            }
        } else {
            PLAYER.age = 18;
            var image     = 'studieswomenbackground';
            var text = "Valmistut oppikoulusta parhain arvosanoin ja haaveilet sairaanhoitajan ammatista. "
            +"Opiskellaksesi sairaanhoitajaksi sinun pitäisi muuttaa Kuopioon, mutta vanhempasi toivoisivat sinun jäävän kotiin. "
            +"Lähdetkö vai jäätkö?";
            var leftButtonLabel  = "Sairaanhoitajaksi";
            var rightButtonLabel = "Kotiin";
        }

        drawUItwoButtons(image, text, leftButtonLabel, rightButtonLabel, this);
    },

    leftButtonHandler: function () {
        if(PLAYER.gender === "female") {
            GAME.state.start('studies7');
        } else {
            if(PLAYER.location.name === "Jyväskylä") {
                GAME.state.start('studies8');
            } else {
                GAME.state.start('studies7');
            }
        }
    },

    rightButtonHandler: function () {
        if(PLAYER.gender === "female") {
            GAME.state.start('homechores0');
        } else {
            if(PLAYER.location.name === "Jyväskylä") {
                GAME.state.start('studies7');
            } else {
                GAME.state.start('countrywork1');
            }
        }
    }
}
