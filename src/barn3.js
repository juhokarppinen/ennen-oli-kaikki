var barn3_state = {

    create: function() {

        var text = "Ladossa vietetty hetki kaduttaa, ja olet vältellyt heilaasi sen jälkeen. "
        +"Huhut yhteisestä retkestänne ovat kiirineet vanhempien piikojen korviin, ja he "
        +"antavat sinun kuulla kunniasi. Pelkäät kuollaksesi olevasi raskaana, mutta tällä kertaa kävi tuuri.";
        var image = 'barnbackground';
        
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('beforewar');
    }
};