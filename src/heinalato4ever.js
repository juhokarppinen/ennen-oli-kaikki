var heinalato4ever_state = {

    create: function() {
        var infoText = "Vuonna 1917 syntyneistä on edelleen elossa 0,2 % miehistä ja 1% naisista.";

        PLAYER.age = 100;
        var image = 'countrybackground';
        var text = "Saat puheluita toimittajilta kyllästymiseen asti. Kaikki haluavat tietää pitkän ikäsi salaisuuden. "
        +"Se on kiusallista, sillä mistäs sen tietää. Satavuotissyntymäpäivälahjaksi toivot salaista puhelinnumeroa.";

        var rightButtonLabel = "Valikkoon";
        
        if(PLAYER.gender === "female") var leftButtonLabel = "Pelaa poikana";
        else var leftButtonLabel = "Pelaa tyttönä";


        drawUItwoButtons(image, text, leftButtonLabel, rightButtonLabel, this, infoText);
    },

    leftButtonHandler: function () {
        if(PLAYER.gender === "female") PLAYER.gender = "male";
        else PLAYER.gender = "female";
        GAME.state.start('beginning');
    },

    rightButtonHandler: function () {
        GAME.state.start('menu');
    }
};