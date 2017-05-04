var war6_state = {

    create: function() {
        var image = 'warbackground';
        if(PLAYER.job === "plywoodfactory") {
            var text = "Kesäkuun vaihtuessa heinäkuuksi Viipuri on menetetty jälleen, ja joukkueesi on vetäytynyt useita kymmeniä kilometrejä. "
            +"Taisteluissa on kaatunut satoja suomalaisia, mutta Viipurin ja Taipaleen välinen, Vuoksea myötäilevä puolustuslinja pitää.";
        } else if(PLAYER.improvement === true) {
            var text = "Juhannukseen mennessä olette joutuneet vetäytymään useita kymmeniä kilometrejä. Viipuri on jo menetetty, ja asemapaikkanne on "
            +"sen pohjoispuolella Portinhoikassa. Olette jäädä saarroksiin ja ammuksenne ovat loppumaisillaan, mutta vetäytymislupaa ei heru.";
        } else if("undefined" !== typeof PLAYER.spouse) {
            var text = "Rintamalle kantautuu tietoja länsiliittoutuneiden hyökkäyksestä Saksaa vastaan Pohjois-Ranskassa. Neuvostoliiton oletetaan "
            +"hyökkäävän toisesta suunnasta, mutta ette usko uhan kohdistuvan teihin. Yllätyksestä on toivuttava nopeasti, kun rintamilla alkaa jytistä "
            +"toden teolla kesäkuun yhdeksäntenä.";
        } else {
            var text = "Kesäkuun loppuun mennessä hermosi ovat riekaleina. Et ole päässyt lepäämään viikkokausiin eikä pääsi enää toimi kunnolla. "
            +"Harhailet yksin metsässä, etkä tiedä, miten ja milloin olet joutunut eroon joukkueestasi. Kun sinut löydetään, joudut kenttäoikeuteen.";
        }
                
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        if(PLAYER.job === "plywoodfactory") {
            GAME.state.start('warend1');
        } else if(PLAYER.improvement === true) {
            PLAYER.causeofdeath = "luoti";
            GAME.state.start('death');
        } else if("undefined" !== typeof PLAYER.spouse) {
            GAME.state.start('war7');
        } else {
            PLAYER.causeofdeath = "karkuri";
            GAME.state.start('death');
        }
    }
}