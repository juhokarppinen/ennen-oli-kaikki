var death_state = {

    create: function() {
        var causeOfDeathText = "";

        // Childhood death
        if (PLAYER.causeofdeath === "keuhkokuume") {
            causeOfDeathText = "Keuhkotuberkuloosi oli 1900-luvun alkupuolella yksi yleisimmistä kuolinsyistä. "
            +"Tauti koitui sinunkin kohtalokseksi. Lepää rauhassa, " + PLAYER.name +"! "
            +"Kuolemasi ei ollut poikkeuksellinen, sillä lähes viidennes ikäluokastasi menehtyi alle kouluikäisenä.";
            PLAYER.age = this.getChildhoodDeathAge();
        }
        if(PLAYER.causeofdeath === "espanjantauti") {
            causeOfDeathText = "Espanjantauti tappoi 10- ja 20-lukujen vaihteessa 30 miljoonaa ihmistä. "
            + "Tauti koitui sinunkin kohtaloksesi. Lepää rauhassa, " + PLAYER.name +"! "
            + "Kuolemasi ei ollut poikkeuksellinen, sillä sillä lähes viidennes ikäluokastasi menehtyi alle kouluikäisenä.";
            PLAYER.age = this.getChildhoodDeathAge();
        }
        // War death
        if (PLAYER.causeofdeath === "sota") {
            causeOfDeathText = "Sota koitui surmaksesi. Lepää rauhassa, " + PLAYER.name + "!";
        }

        var numberTexts = ["yksi","kaksi","kolme","neljä","viisi","kuusi",
                           "seitsemän","kahdeksan","yhdeksän","kymmenen"];

        if (PLAYER.age === 0) var ageOfDeathText = "vain muutaman kuukauden ikäinen.";
        else if (PLAYER.age <= 10) var ageOfDeathText = numberTexts[PLAYER.age - 1] + "vuotias.";
        else var ageOfDeathText = PLAYER.age + "-vuotias.";

        var text = "Kuolit... " + causeOfDeathText;

        var image            = "deathbackground";
        var rightButtonLabel = "Valikkoon";
        
        if(PLAYER.gender === "female") var leftButtonLabel = "Pelaa poikana";
        else var leftButtonLabel = "Pelaa tyttönä";


        drawUItwoButtons(image, text, leftButtonLabel, rightButtonLabel, this);
    },

    leftButtonHandler: function () {
        if(PLAYER.gender === "female") PLAYER.gender = "male";
        else PLAYER.gender = "female";
        GAME.state.start('beginning');
    },

    rightButtonHandler: function () {
        GAME.state.start('menu');
    },

    getChildhoodDeathAge: function () {
        var odds = Math.random() * 18;
        if (odds <= 0.15) return 5 + Math.floor(Math.random() * 2);
        else if (odds <= 1.3) return 3 + Math.floor(Math.random() * 2);
        else if (odds <= 2.0) return 2 + Math.floor(Math.random());
        else if (odds <= 4.1) return 1 + Math.floor(Math.random());
        else return Math.floor(Math.random());
    }
}