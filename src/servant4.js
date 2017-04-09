var servant4_state = {

    create: function() {
        PLAYER.age = 18;
        if(PLAYER.gender === "female") {
            PLAYER.crush = pickName("male");
            var text = "Kova työ jatkuu eikä ylennyksestä ole tietoakaan. Ainoa piristys arkeesi on uusi renki "+PLAYER.crush+", johon olet iskenyt silmäsi. "
            +"Katseenne ovat kohdanneet, kun olet palannut iltalypsyltä samaan aikaan, kun miehet palaavat pellolta. "
            +"Suot hänelle muutaman tanssin juhannusjuhlilla, ja myöhemmin kesällä karkaatte kuutamouinnille yhdessä.";
        } else {
            PLAYER.crush = pickName("female");
            var text = "Päiväsi peltotöissä jatkuvat tasaisen tappavina. Piristystä arkeesi tuo uusi navettapiika "+PLAYER.crush+", johon olet iskenut silmäsi. "
            +"Katseenne ovat kohdanneet, kun olet palannut pellolta tytön lopetellessa iltalypsyä. "
            +"Pääset tanssittamaan tyttöä juhannusjuhlilla, ja myöhemmin kesällä karkaatte kuutamouinnille yhdessä.";
        }
        
        var image             = 'youthworkcountrybackground';
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('barn1');
    }
}