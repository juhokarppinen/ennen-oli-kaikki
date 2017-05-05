var peacesoldier1_state = {

    create: function() {
        PLAYER.age = 23;
        if(PLAYER.location.name !== "Jyväskylä" && PLAYER.movedtocity !== true && PLAYER.class === "middle") {
            var image = 'lottawarbackground';
            var text = "Jalkasi paleltui niin pahasti, että se jouduttiin amputoimaan. Olet toipumassa leikkauksesta "
            +"Jyväskylän normaalikoulun tiloissa toimivassa sotasairaalassa, kun kuulet uutisen rauhansopimuksesta.";
        } else {
            var image = 'warbackground';
            var text = "Olet lepovuorossa korsussa ja havahdut hiljaisuuteen, kun tykkituli katkeaa 13.3.1940. "
            +"Moskovan rauhansopimus on astunut voimaan. Vaikka rauhanehdot kirvelevät, päällimmäisenä "
            +"mielessäsi on helpotus: olet selvinnyt hengissä.";
        }
                
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('endwar');
    }
};