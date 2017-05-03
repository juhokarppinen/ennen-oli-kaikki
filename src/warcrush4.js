var warcrush4_state = {

    create: function() {
        
        var image = 'barnbackground';
        var text = PLAYER.crush+" lupaa anoa ensitöikseen avioitumislomaa, kun hän pääsee takaisin asemiinsa. "
        +"Kun kerrot leskirouvalle kihlauksesta, hän lupaa, että saat penkoa hänen vanhoista "
        +"vaatteistaan itsellesi jotakin hääpuvuksi sopivaa.";
                
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        PLAYER.spouse = PLAYER.crush;
        GAME.state.start('wartime6');
    }
}