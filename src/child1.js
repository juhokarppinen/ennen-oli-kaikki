var child1_state = {

    create: function() {
        PLAYER.age = 20;
        if (Math.random() <= 0.50) {
            PLAYER.children = [{name: pickName("male"), gender: "male", year: 1937}];
            var baby = "poikavauvan";
        } else {
            PLAYER.children = [{name: pickName("female"), gender: "female", year: 1937}];
            var baby = "tyttövauvan";
        }
        if ("undefined" === typeof PLAYER.spouse) {
            var text = "Häpeissäsi asut perheesi luona ja vältät ulkona liikkumista. " + 
                       "Onneksi synnytät terveen "+baby+"! Lapsi saa nimekseen "+PLAYER.children[0].name
                       +" ja äitisi ihastuu lapsenlapseen ikihyviksi.";
        } else {
            var text = "Saatte terveen "+baby+" ja lapsi saa nimekseen "+PLAYER.children[0].name+
                    ". Sukulaiset ihastelevat suloista nyyttiä ja elämä hymyilee.";
        }
        
        //todo: pick "baby at countryside" picture
        var image            = 'youthworkcountrybackground';
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('death');
    }
}