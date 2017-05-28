var conscript_state = {

    create: function() {
        PLAYER.age = 20;
        var text = "Saat valtiolta kirjeen: sinun on ilmoittauduttava asepalvelukseen.";
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
        var infoText = "Kutsu asepalvelukseen tuli sinä vuonna, kun täytti 20. Asepalvelus kesti 350 päivää. " +
        "Aseettomana oli mahdotonta palvella ennen vuotta 1969, jolloin siviilipalveluksen mahdollistanut laki " +
        "tuli voimaan."
        +"\n\nLähteet: 1) Helsingin kaupunginkirjasto, kysy.fi 2) Varusmiespalvelusajan muutokset ja niiden taustat Suomessa vuosina 1932 ja 1950, kandidaatintutkielma "
        +"3) Kalemaa, K. (2014). Sankareita vai pelkureita: Suomalaisen aseistakieltäytymisen historia. Helsinki: Tammi.";

        drawUIsingleButton(image, text, centerButtonLabel, this, infoText);
    },

    centerButtonHandler: function () {
        GAME.state.start('conscript3');
    }
};