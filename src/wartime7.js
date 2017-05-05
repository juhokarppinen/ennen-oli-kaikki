var wartime7_state = {

    create: function() {
        PLAYER.age = 26;
        if(PLAYER.widowboss === true) {
            if("undefined" !== typeof PLAYER.spouse) {
                var text = "Tilanne itärintamalla on muuttunut, ja suomalaisjoukot ovat joutuneet vetäytymään useita kymmeniä kilometrejä. Viipuri on menetetty "
                +"jälleen ja miestappiot ovat kovia. Kirjeet kulkevat huonosti, etkä tiedä, missä "+PLAYER.spouse+" on tai että onko hän ylipäätään hengissä.";
            } else {
                var text = "Tilanne itärintamalla on muuttunut ja suomalaisjoukot ovat joutuneet vetäytymään useita kymmeniä kilometrejä. Viipuri on menetetty "
                +"jälleen ja miestappiot ovat kovia. Kirjeet kulkevat huonosti, ja pelkäät läheistesi puolesta.";
            }
        } else if(PLAYER.location.name !== "Jyväskylä" && PLAYER.movedtocity !== true && PLAYER.class === "poor") {
            if("undefined" !== typeof PLAYER.spouse) {
                var text = "Tilanne itärintamalla on muuttunut, ja suomalaisjoukot ovat joutuneet vetäytymään useita kymmeniä kilometrejä. Viipuri on menetetty "
                +"jälleen ja miestappiot ovat kovia. Kirjeet kulkevat huonosti, etkä tiedä, missä "+PLAYER.spouse+" on tai että onko hän ylipäätään hengissä.";
            } else {
                var text = "Sota jatkuu jo toista vuotta, ja poikkeustilasta on tullut uusi normaali. "
                +"Työtaakkasi helpottaa hieman, kun osa rintamamiehistä lomautetaan armeijasta paikkaamaan maaseudun työvoimapulaa.";
            }
        } else if(PLAYER.lotta === true) {
            var image = 'lottawarbackground';
            if(PLAYER.university === true) {
                var text = "Pitkään kestänyt rauhallisempi jakso päättyy kesällä, ja pian vuodepaikat ovat taas täynnä. "
                +"Haavoittuneet kertovat ennenkokemattomasta tulimerestä ja osa heistä on edelleen kauhun vallassa, vaikka ovat päässeet turvaan.";
            } else {
                var text = "Idästä alkaa tulvia lannistavia uutisia. Neuvostoliitto on aloittanut suurhyökkäyksen Karjalankannaksella, ja "
                +"suomalaisjoukot ovat joutuneet vetäytymään. Viipuri on evakuoitu jälleen, mikä tietää lisätöitä kotirintamalla.";
            }
        } else {
            var image = 'candyfactorybackground';
            var text = "Tilanne itärintamalla on muuttunut ja suomalaisjoukot ovat joutuneet vetäytymään useita kymmeniä kilometrejä. "
            +"Viipuri on menetetty jälleen ja miestappiot ovat kovia. Kirjeet kulkevat huonosti, ja pelkäät läheistesi puolesta.";
        }
                
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('warend1');
    }
};