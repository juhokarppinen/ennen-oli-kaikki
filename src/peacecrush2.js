var peacecrush2_state = {

    create: function() {

        var text = "Illat pimenevät, ja vietät yhä enemmän aikaa kirjeiden parissa. "
        +"Ystävyytenne syvenee, ja päätät kosia häntä, kun tapaatte joulun jälkeen.";
        
        var image     = 'teacherschoolbackground';
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        PLAYER.spouse = PLAYER.crush;
        GAME.state.start('peaceend1');
    }
}