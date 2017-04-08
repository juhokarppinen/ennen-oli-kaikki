var studies6_state = {

    create: function() {
        if(PLAYER.gender === "female") {
            PLAYER.age = 18;
            var gendertext = "kotiapulaiseksi apteekkarin taloon.";
            var image      = 'studieswomenbackground';
        } else {
            PLAYER.age = 16;
            var gendertext = "töihin vaneritehtaalle, kuten isäsi.";
            var image      = 'studies1background';
        }
        var text = "Olet sukusi ensimmäinen, jolla on keskikoulun päättötodistus, onneksi olkoon! "
        +"Vanhempiesi pettymykseksi todistus ei kuitenkaan takaa sinulle yhtään prameampaa elämää, vaan päädyt "+gendertext;

        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function() {
        GAME.state.start('beginwar');
    }
}