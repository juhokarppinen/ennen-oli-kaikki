var peaceend1_state = {

    create: function() {
        PLAYER.age = 24;
        var text = "Euroopassa riehuva sota ei näytä laantumisen merkkejä. Saksa ja Neuvostoliitto "
        +"ovat vallanneet uusia alueita, ja "
        +"Suomen asema kahden suurvallan välissä alkaa olla tukala. Maailmalla liikkuu huhuja, joiden mukaan "
        +"Saksa suunnittelee hyökkäystä Neuvostoliittoon. Huhut voimistuvat kevään mittaan.";

        var image = "citybackground";
                
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        if(PLAYER.location.name !== "Jyväskylä" && PLAYER.movedtocity !== true && PLAYER.class === "poor") {
            if("undefined" !== typeof PLAYER.spouse) {
                GAME.state.start('prewar1');
            } else {
                GAME.state.start('peaceend2');
            }
        } else if(PLAYER.location.name !== "Jyväskylä" && PLAYER.class === "rich" && PLAYER.gender === "male") {
            GAME.state.start('prewar1');
        } else if(PLAYER.location.name === "Jyväskylä" && PLAYER.class === "rich" && PLAYER.gender === "male") {
            GAME.state.start('prewar1');
        } else if(PLAYER.gender === "male" && (PLAYER.location.name === "Jyväskylä" || PLAYER.movedtocity === true)) {
            GAME.state.start('prewar1');
        } else if(PLAYER.job === "riflefactory") {
            GAME.state.start('prewar1');
        } else if(PLAYER.job === "plywoodfactory") {
            GAME.state.start('prewar1');
        } else {
            GAME.state.start('peaceend2');
        }
    }
}