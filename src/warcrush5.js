var warcrush5_state = {

    create: function() {
        
        var image = 'barnbackground';
        var text = PLAYER.crush+" palaa rintamalle pettyneenä, mutta jatkatte kirjeenvaihtoa, kuten ennenkin.";
                
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('wartime6');
    }
}