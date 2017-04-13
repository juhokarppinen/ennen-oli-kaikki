var studies8_state = {

    create: function() {
        if(PLAYER.gender === "female") {
            PLAYER.age = 22;
            PLAYER.nurse = true;
            var image     = 'nurseschoolbackground';
            var text = "Käytännön harjoittelu Kuopion lääninsairaalan kirurgisella osastolla sai sinut hetkeksi epäilemään, valitsitko sittenkin väärän alan. "
            +"Leikkausten jälkeisistä kivuista kärsivien potilaiden vaikerrus saa sinut voimaan pahoin. "
            +"Karaistuit kuitenkin pian, ja valmistuttuasi saat työpaikan Jyväskylän yleisestä sairaalasta.";
        } else {
            PLAYER.age = 19;
            var image     = 'teacherschoolbackground';
            var text = "Opintosi Jyväskylän kasvatusopillisessa korkeakoulussa alkavat mallikkaasti. "
            +"Isäsi on tyytyväinen valintaasi ja keskustelette paljon opinnoistasi.";
        }

        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function() {
        if(PLAYER.gender === "female") {
            GAME.state.start('beforewar');
        } else {
            GAME.state.start('conscript');
        }
    }
}