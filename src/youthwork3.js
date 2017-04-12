var youthwork3_state = {

    create: function() {
        PLAYER.age = 14;

        if(PLAYER.gender === "male") {
            var text = "Pärjäät juoksupoikana mainiosti, sillä olet nopea kintuistasi. "
            +"Leipurimestari arvostaa myös rehellisyyttäsi, sillä et ole kertaakaan jäänyt kiinni kuormasta syömisestä. "
            +"Niinpä pääset leipomoon oppipojaksi eikä aikaakaan, kun opit alustamaan taikinat ja pyöräyttämään pullat vaikka unissasi.";
            var image = 'bakerybackground';
        } else {
            var text = "Saat kotiapulaisen paikan ikääntyneen tehdassukuun kuuluvan leskirouvan luota. "
            +"Hän vaatii sinulta paljon: asunnon tulee olla lämmin ennen kuin hän nousee kattamallesi aamupalalle kello 7. "
            +"Olet kuitenkin tyytyväinen, sillä palkkasi riittää vaatteisiin, joista et aiemmin uskaltanut edes haaveilla.";
            var image = 'homeassistantbackground';
        }
        
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {  
        if(PLAYER.gender === "male") {
            GAME.state.start('conscript');
        } else {
            GAME.state.start('beforewar');
        }
    }   
}