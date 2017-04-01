var servant1_state = {

    create: function() {
        PLAYER.age = 16;

        var text = "Koska et totellut isääsi, hän heittää sinut ulos talostaan. "
        +"Haaveet opinnoista kaatuvat vapaaoppilaan paikasta huolimatta, sillä joudut henkisi pitimiksi etsimään töitä. "
        +"Päädyt rengiksi pappilaan, josta torppanne on vuokrattu. Välit isäsi kanssa pysyvät viileinä ja hän "
        +"tuskin tervehtii sinua, kun tapaatte peltotöissä pappilan mailla.";
        
        var image             = 'youthworkcountrybackground';
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
      GAME.state.start('barn1');
    }
}