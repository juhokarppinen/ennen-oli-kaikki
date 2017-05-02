var warchoice4_state = {

    create: function() {
        
        var image = 'homechorescountrybackground';
        PLAYER.age = 26;
        var text = "Päädyt töihin Valtion ruutitehtaalle Laukaan Vihtavuoreen. Työ on likaista ja vaarallista, "
        +"eivätkä vanhemmat työtoverisi halua käyttää aikaansa sinun neuvomiseesi. Oltuasi tehtaalla vajaan viikon, "
        +"olet osaamattomuuttasi vähällä aiheuttaa räjähdyksen.";
                
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('death');
    }
}