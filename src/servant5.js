var servant5_state = {

    create: function() {
        var text = "Vanhempasi ovat pettyneitä, kun palaat häntä koipien välissä kotiin. He tekevät selväksi, "
        +"etteivät aio elättää sinua ja potkivat sinut paluutasi seuraavana päivänä ulos. Onneksesi löydät navettapiian paikan kauppiaan talosta.";
        
        var image             = 'youthworkcountrybackground';
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('servant4');
    }
}