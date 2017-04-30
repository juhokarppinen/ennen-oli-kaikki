var peaceend1_state = {

    create: function() {
        PLAYER.age = 24;
        var text = "Euroopassa riehuva sota ei näytä laantumisen merkkejä. Niin Saksa kuin Neuvostoliittokin "
        +"ovat vallanneet uusia alueita, ja vaikka maiden välillä onkin voimassa hyökkäämättömyyssopimus, "
        +"Suomen asema kahden suurvallan välissä alkaa olla tukala. Maailmalla liikkuu huhuja, joiden mukaan "
        +"Saksa suunnittelee hyökkäystä Neuvostoliittoon. Huhut voimistuvat kevään mittaan.";

        var image = "citybackground";
                
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('death');
    }
}