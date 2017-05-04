var studies6_state = {

    create: function() {
        if(PLAYER.gender === "female") {
            PLAYER.age = 18;
            PLAYER.widowboss = true;
            var gendertext = "ikääntyneen leskirouvan kotiapulaiseksi.";
            var image      = 'studieswomenbackground';
        } else {
            PLAYER.age = 16;
            var gendertext = "töihin vaneritehtaalle, kuten isäsi.";
            var image      = 'plywoodfactorybackground';
            PLAYER.job = "plywoodfactory";
        }
        var text = "Olet sukusi ensimmäinen, jolla on keskikoulun päättötodistus, onneksi olkoon! "
        +"Vanhempiesi pettymykseksi todistus ei kuitenkaan takaa sinulle yhtään prameampaa elämää, vaan päädyt "+gendertext;

        var centerButtonLabel = "Jatka";
        var infoText = "Nuoret pääsivät töihin jo 13-vuotiaina. Kaupungeissa nuoret pystyivät saamaan " +
        "töitä 14-15 -vuotiaina.  Tyttöjen tulevaisuudelle koulunkäynnillä ei ollut merkitystä " +
        "työelämässä. Maalaistytöt tai kansankoulun loppuun käyneet tytöt saattoivat päätyä " +
        "apulaisiksi, tehdastyöläisiksi tai muihin aputöihin.\n\n" +
        "Lähde: Elättäjistä kuluttajiksi. Tilastokeskuksen artikkeli, stat.fi";

        drawUIsingleButton(image, text, centerButtonLabel, this, infoText);
    },

    centerButtonHandler: function() {
        if(PLAYER.gender === "female") {
            GAME.state.start('beforewar');
        } else {
            GAME.state.start('conscript');
        }
    }
}