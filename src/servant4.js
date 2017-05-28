var servant4_state = {

    create: function() {
        PLAYER.age = 18;
        if(PLAYER.gender === "female") {
            PLAYER.crush = pickName("male");
            var text = "Kova työ jatkuu. Ainoa piristys arkeesi on uusi renki "+PLAYER.crush+", johon olet iskenyt silmäsi. "
            +"Katseenne ovat kohdanneet muutaman kerran, kun olet palannut iltalypsyltä. "
            +"Suot hänelle muutaman tanssin juhannusjuhlilla, ja myöhemmin kesällä karkaatte kuutamouinnille yhdessä.";
        } else {
            PLAYER.crush = pickName("female");
            var text = "Päiväsi peltotöissä jatkuvat. Piristystä arkeesi tuo uusi navettapiika "+PLAYER.crush+", johon olet iskenyt silmäsi. "
            +"Katseenne ovat kohdanneet, kun olet palannut pellolta. "
            +"Pääset tanssittamaan tyttöä juhannusjuhlilla, ja myöhemmin kesällä karkaatte kuutamouinnille yhdessä.";
        }
        
        var image             = 'barn2background';
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('barn1');
    }
};