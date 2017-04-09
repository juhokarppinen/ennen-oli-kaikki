var studies7_state = {

    create: function() {
        PLAYER.age = 19;
        if(PLAYER.gender === "male") {
            var image           = 'studies1background';
            var text = "Opinnoistasi ei ole tulla mitään, sillä pääsi on aivan pyörällään kaikista huvituksista, joita Helsingissä on tarjolla. "
            +"Lisäksi olet naulinnut silmäsi maitokaupan myymäläapulaiseen ja keksit asiaa kauppaan useammin kuin oikeasti olisi tarve. "
            +"Et kuitenkaan uskalla tehdä aloitetta, sillä tiedät, ettei konservatiivinen isäsi hyväksyisi seurustelua työläisnaisen kanssa.";
        } else {
            var image     = 'studieswomenbackground';
            var text = "Et ole koskaan ollut näin pitkään erossa perheestäsi. Koti-ikävä unohtuu kuitenkin pian, kun tutustut uusiin opiskelu- ja asuintovereihisi. ";
        }

        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function() {
        if(PLAYER.gender === "male") {
            GAME.state.start('conscript');
        } else {
            GAME.state.start('studies8');
        }
    }
}