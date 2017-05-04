var citywork3_state = {

    create: function() {
        PLAYER.age = 14;
        var text = "Luku- ja laskutaidottomana sinun ei ole helppoa löytää töitä kaupungista. "
        +"Aikasi kuluu kaupungin kaduilla norkoillen ja satunnaisia juoksupojan töitä tehden. "
        +"Onneksi kuulet että leipomossa tarvitaan juoksupoikaa, ja vikkelänä poikana saat paikan.";

        this.backgroundSound = GAME.add.audio('ambience-city');
        this.backgroundSound.loop = true;
        this.backgroundSound.volume = 0.15;
        this.backgroundSound.play();

        var image               = 'citybackground';
        var centerButtonLabel   = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        this.backgroundSound.stop();
        GAME.state.start('youthwork3');
    }
}
