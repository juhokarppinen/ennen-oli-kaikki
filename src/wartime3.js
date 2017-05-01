var wartime1_state = {

    create: function() {
        
        var image = 'lottawarbackground';
        if(PLAYER.university === true) {
            var text = "Myös Helsinkiä pommitettiin, ja päätät palata sodan ajaksi Jyväskylään, jossa koet olosi turvallisemmaksi. "
            +"Palaat lottatöihin sotasairaalaan, missä saksantaidoistasi on hyötyä, sillä saat hoidettavaksesi myös saksalaisia sotilaita.";
        } else {
            var text = "Rintamakokemuksellesi on jälleen käyttöä ja lähdet kohti itärajaa.";
        }
                
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('death');
    }
}