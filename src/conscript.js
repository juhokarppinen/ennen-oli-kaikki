var conscript_state = {

    create: function() {
        PLAYER.age = 20;
        var text = "Saat valtiolta kirjeen: Sinun on ilmoittauduttava asepalvelukseen.";
        if(PLAYER.university === true) {
            text += " Opintosi keskeytyvät, sillä asepalvelusta ei saanut lykätä niiden perusteella.";
        }
        if(PLAYER.improvement === true) {
            text += " Suunnittelemasi pappilan laajennos lykkäytyy.";
        }
        if(PLAYER.location.name !== "Jyväskylä") {
            text += " Suoritat asepalveluksesi Keski-Suomen rykmentissä Kouvolassa. "
            +"Sinut, kuten kaikki ikäluokkasi miehet kotikulmiltasi, koulutetaan kranaatinheittäjäksi.";
        } else {
            text += " Suoritat asepalveluksesi Kouvolassa, Keski-Suomen rykmentissä. Saat tykkimiehen koulutuksen, kuten naapurisi kotikulmilta.";
        }
        
        var image            = 'conscriptbackground';
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('conscript3');
    }
}