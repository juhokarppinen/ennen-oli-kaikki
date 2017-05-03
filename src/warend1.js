var warend1_state = {

    create: function() {
        //just in case someone's age is still wrong
        PLAYER.age = 26;
        var image = 'conscriptbackground';
        var text = "Sota on päättynyt! Syyskuussa 1944 yli kolme vuotta kestänyt jatkosota tuli viimein päätökseen. "
        +"Aselepo astui voimaan 4. syyskuuta ja välirauhansopimus allekirjoitettiin Moskovassa 19. syyskuuta 1944.";
                
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('death');
    }
}