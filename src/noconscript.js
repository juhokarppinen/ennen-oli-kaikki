var noconscript_state = {

    create: function() {
        PLAYER.age = 20;
        PLAYER.noconscript = true;
        var text = "Saat valtiolta kirjeen: sinun on ilmoittauduttava asepalvelukseen. Kutsuntatilaisuudessa selviää, "
        +"että olet liian heikkountoinen suorittaaksesi asepalveluksen. Lapsuutesi "
        +"heikko ravinto on jättänyt jälkensä kehoosi, eikä kutsuntalääkäri usko "
        +"riisitaudin heikentämien luittesi kestävän varusmiehen elämää.";
        
        var image            = 'conscriptbackground';
        var centerButtonLabel = "Jatka";
        var infoText = "Kutsu asepalvelukseen tuli sinä vuonna, kun täytti 20. Asepalvelus kesti 350 päivää. " +
        "Aseettomana oli mahdotonta palvella ennen vuotta 1969, jolloin siviilipalveluksen mahdollistanut laki " +
        "tuli voimaan. Viidesosa ikäluokasta hylättiin asepalveluksesta kutsunnoissa. Taustalla olivat pääosin " +
        "terveydelliset syyt. Luku oli korkeampi kuin muissa Pohjoismaissa." +
        "\n\nLähteet: 1) Helsingin kaupunginkirjasto, kysy.fi 2) Arkistojen Portti. Palvelus armeijassa. wiki.narc.fi " +
        "3) Suomalaisten elintaso koheni itsenäisyyden kahdella ensimmäisellä vuosikymmenellä. Artikkeli. itsenaisyys100.fi";

        drawUIsingleButton(image, text, centerButtonLabel, this, infoText);
    },

    centerButtonHandler: function () {
        GAME.state.start('beforewar');
    }
}