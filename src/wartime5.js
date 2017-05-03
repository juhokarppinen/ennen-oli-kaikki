var wartime5_state = {

    create: function() {
        
        if(PLAYER.amputation === true) {
          PLAYER.age = 25;
          var image = 'youthworkcountrybackground';
          var text = "Alat viritellä pienimuotoista salakauppaa. Onnistut piilottamaan osan viljasta ja voiksi kirnutusta "
          +"maidosta viranomaisilta, joista saat mustassa pörssissä hyvän hinnan.";
        } else if(PLAYER.location.name !== "Jyväskylä" && PLAYER.class === "middle") {
            var image = 'homechorescountrybackground';
            var text = "Jätätte kuitenkin osan maidosta ilmoittamatta ja kirnuatte sen salaa voiksi, jonka piilotatte viranomaisilta "
            +"naapuritalon hylättyyn maakellariin. Osan myytte mustassa pörssissä ja osa jää omaan käyttöönne. Lisäenergialle onkin nyt tarvetta, sillä huomaat olevasi raskaana.";
        } else if(PLAYER.lotta === true) {
            var image = 'lottawarbackground';
            var text = "Hyvistä uutisista huolimatta tilanne kotirintamalla kurjistuu alati pahenevan elintarvikepulan myötä.";
        }
                
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('wartime6');
    }
}