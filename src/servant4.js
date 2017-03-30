var servant4_state = {

    create: function() {
        PLAYER.age = 18;
        var text = "Raataminen jatkuu eikä ylennyksestä ole tietoakaan. Ainoa piristys tasaisen tappavaan arkeesi on uusi ";
        if(PLAYER.gender === "female") {
            text += "renki, johon olet iskenyt silmäsi. Katseenne ovat kohdanneet muutaman kerran, "
            +"kun olet palannut iltalypsyltä samaan aikaan, kun miehet palaavat pellolta.";
        } else {
            text += "piika, johon olet iskenyt silmäsi. Katseenne ovat kohdanneet muutaman kerran, "
            +"kun olet palannut pellolta samaan aikaan, kun hän palaa iltalypsyltä.";
        }
        
        var image             = 'youthworkcountrybackground';
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('barn1');
    }
}