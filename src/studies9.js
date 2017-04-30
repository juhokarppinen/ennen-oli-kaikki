var studies9_state = {

    create: function() {
        var image = 'helsinkiunibackground';
        var text = "Pääset lukemaan saksaa Helsingin yliopistoon syksyllä 1940. "
        +"Tuntuu kuin olisit syntynyt uudelleen vaihdettuasi sairaalassa tarvitut sidetarpeet oppikirjoihin.";

        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function() {
        GAME.state.start('peaceend1');
    }
}