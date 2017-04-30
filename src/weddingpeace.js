var weddingpeace_state = {

    create: function() {
        var name = pickName("female");
        while(name === PLAYER.crush) {
                name = pickName("female");
        }
        var text = "Kesän edetessä elämä alkaa muuttua yhä valoisammaksi. Olet iskenyt silmäsi naapuritorpan tyttäreen, "
        +"ja tunne on molemminpuolinen. "+name+" suostuu kosintaasi epäröimättä ja pidätte pienimuotoiset häät syksyllä sadonkorjuun aikaan.";

        PLAYER.spouse = name;
        
        var image            = 'weddingbackground';
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('peaceend1');
    }
}