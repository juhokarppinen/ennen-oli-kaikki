var noconscript_state = {

    create: function() {
        PLAYER.age = 20;
        PLAYER.noconscript = true;
        var text = "Saat valtiolta kirjeen: Sinun on ilmoittauduttava asepalvelukseen. Kutsuntatilaisuudessa selviää, "
        +"että olet liian heikkountoinen suorittaaksesi asepalveluksen. Lapsuutesi "
        +"heikko ravinto on jättänyt jälkensä kehoosi, eikä kutsuntalääkäri usko "
        +"riisitaudin heikentämien luittesi kestävän varusmiehen elämää.";
        
        var image            = 'conscriptbackground';
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('beginwar');
    }
}