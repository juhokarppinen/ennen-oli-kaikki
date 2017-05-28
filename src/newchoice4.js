var newchoice4_state = {

    create: function() {
        if(PLAYER.gender === "male") {
            if(PLAYER.location.name !== "Jyväskylä" && PLAYER.class === "poor" && PLAYER.movedtocity !== true) {
                PLAYER.age = 30;
                var image = 'constructionbackground';
                var text = "Saat töitä Valmetin tehtaalta, jossa valmistetaan sotakorvaustuotteita Neuvostoliitolle. " +
                    "Rintamatoverisi suosittelee sinua tehtävään, " +
                    "vaikka sinulla ei olekaan kokemusta raskaasta teollisuudesta. Saatte katon päänne päälle tehtaan " +
                    "kupeeseen rakennetuista parakeista.";
            } else {
                PLAYER.age = 35;
                var image = 'youthworkcountrybackground';
                var text = "Onnistut hankkimaan lisää peltoalaa ja palan metsää hieman kauempaa. Kaunasi Karjalan evakkoja kohtaan laimenee ja "
                +"hankitte yhteisen traktorin. Suunnittelette paikallisen maamiesseuran voimin yhteisen leikkuupuimurin hankintaa. "
                +"Lasket, että koneet maksavat itsensä takaisin, kun talkooväkeä tarvitaan vähemmän.";
            }
        } else {
                var image = "citybackground";
                PLAYER.age = 30;
                var text = "Miehesi saa töitä Rautpohjan tehtaalta, entiseltä Valtion Tykkitehtaalta, jossa valmistetaan tätä nykyä sotakorvaustuotteita Neuvostoliitolle. "
                +"Saatte katon päänne päälle tehtaan kupeeseen rakennetuista parakeista.";
        }
                
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        if(PLAYER.location.name !== "Jyväskylä" && PLAYER.class === "poor") {
            GAME.state.start('newchoice5');
        } else {
            GAME.state.start('sixties');
        }
    }
};