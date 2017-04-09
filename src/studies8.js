var studies8_state = {

    create: function() {
        PLAYER.age = 22;
        var image     = 'studieswomenbackground';
        var text = "Käytännön harjoittelu Kuopion lääninsairaalan kirurgisella osastolla sai sinut hetkeksi epäilemään, valitsitko sittenkin väärän alan. "
        +"Leikkausten jälkeisistä kivuista kärsivien potilaiden vaikerrus saa sinut voimaan pahoin. "
        +"Karaistuit kuitenkin pian, ja valmistuttuasi saat työpaikan Jyväskylän yleisestä sairaalasta.";

        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function() {
        GAME.state.start('beginwar');
    }
}