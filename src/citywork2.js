var citywork2_state = {

    create: function() {
        PLAYER.age = 16;

        if(PLAYER.class === "rich") {
            var text = "Pääsit isäsi suhteilla myyjäksi vaateliikkeeseen. Vaikka "+
                       "tehtävää riittää, olet oikein tyytyväinen työhösi.";
        } else {
            var text = "Ompelutaidoillasi pääsit töihin ompeluliikkeeseen. " +
                       "Vaikka tehtävää riittää, olet oikein tyytyväinen työhösi.";
        }

        var image               = 'homechores1background';
        var imageInfo           = "Väinö Kannisto";        
        var centerButtonLabel   = "Jatka";

        drawUIsingleButton(image, imageInfo, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        if(PLAYER.class !== "rich") {
            GAME.state.start('dance1');
        } else {
            GAME.state.start('death');
        }
    }
}
