var barn4_state = {

    create: function() {
        if(PLAYER.gender === "female") {
            var gendertext = "Kuluu viikkoja. Vaikka kuutamouinnista on jo aikaa, et saa renkiä mielestäsi ja haaveilet salaa yhteisestä tulevaisuudesta hänen kanssaan. Yllättäen ";
            var gendertext2 = "Vastaatko myöntävästi hänen kosintaansa?";
        } else {
            var gendertext = "Kuluu viikkoja. Vaikka kuutamouinnista on jo aikaa, et saa piikaa mielestäsi, joten teet kaikkesi saadaksesi hänen huomionsa. Lopulta sinnikkyytesi palkitaan - ";
            var gendertext2 = "Pyydätkö häntä vaimoksesi?";
        }

        var text = gendertext + PLAYER.crush+" tulee kertomaan sinulle tunteistaan. " + gendertext2;
        var image            = 'barnbackground';
        var leftButtonLabel  = "Kyllä";
        var rightButtonLabel = "Ei";

        drawUItwoButtons(image, text, leftButtonLabel, rightButtonLabel, this);
    },

    leftButtonHandler: function () {
        GAME.state.start('weddingcountry');
    },

    rightButtonHandler: function () {
        GAME.state.start('workhome');
    }
};