var war3_state = {

    create: function() {
    
        if("undefined" !== typeof PLAYER.spouse) {
            var text = "Olet päässyt pitkään odotetulle lomalle. Tulet kotiin, mutta huomaat, että kaikki ei ole hyvin kotirintamalla. "
            +"Vaimosi ja lapsesi kärsivät nälästä. Kotityöt ovat tekemättä. Autatko niissä vai käytätkö lomasi lepoon?";
            var image     = 'warkworkbackground';
            var leftButtonLabel = "Auta";
            var rightButtonLabel = "Lomaile";
        } else {
            var text = "Sodasta on muodostunut paikallaan junnaavaa tykistötaistelua Taipaleella. Joudut hetkeksi taisteluiden etulinjaan. "
            +"Venäjän tykistötuli on kovaa ja sinua komennetaan vastaamaan siihen. Totteletko komentoa henkesi uhalla?";
            var image     = 'warbackground';
            var leftButtonLabel = "Kyllä";
            var rightButtonLabel = "Ei";
        }

        drawUItwoButtons(image, text, leftButtonLabel, rightButtonLabel, this);
    },

    leftButtonHandler: function () {
        //todo: add chance for war death
        GAME.state.start('death');
    },

    rightButtonHandler: function () {
        //todo: add chance for war death
        GAME.state.start('death');
    }
}