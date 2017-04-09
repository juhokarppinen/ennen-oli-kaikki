var wartime1_state = {

    create: function() {
        
        if("undefined" !== typeof PLAYER.spouse) {
            var text = "Talvisota syttyy. Siirryt sotateollisuden tehtäviin palkkatöihin. Siellä töitä riitti, sillä Keski-Suomessa oli paljon aseteollisuutta.";
            //todo: switch to "women at factory" picture
            var image            = 'warbackground';
        } else {
            var text = "Talvisota syttyy. Rupeat lotaksi. Vihkimistilaisuus järjestetään Taulumäen kirkossa. "
            +"Keski-Suomessa on sodan syttyessä 9000 lottaa. Tehtäviisi kuuluu koulutettavien sotilaiden muonittamista. ";
            //todo: switch to lotta picture
            var image            = 'warbackground';
        }
                
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('death');
    }
}