var oldyears1_state = {
    create: function() {
        if(PLAYER.gender === "male") {
            if(PLAYER.location.name !== "Jyväskylä" && PLAYER.class === "poor" && PLAYER.movedtocity !== true) {
                var image = 'citybackground';
                PLAYER.age = 63;
                var text = "80-luvun alussa pääset viimein viettämään ansaittuja eläkepäiviäsi. "
                +"Yhdistystoiminnasta et kuitenkaan luovu, ja houkuttelet vaimosikin mukaan Valmetin eläkeläisten tapahtumiin.";''
            } else if (PLAYER.window.location.name !== "Jyväskylä" && PLAYER.class === "middle") {
                var image = 'youthworkcountrybackground';
                PLAYER.age = 60;
                var text = "Koska tilalle ei löytynyt jatkajaa voimiesi ehtyessä, myit metsätilkkusi ja peltosi pois. Jätitte kuitenkin torppanne kylkeen siihen "
                +"alunperin kuuluneen perunamaan itsellenne, sillä sinulle on kunnia-asia pysyä mahdollisimman omavaraisena. Vaimosi varoittelee sinua rehkimästä "
                +"liikaa, mutta olet itsepäinen.";
            } else if(PLAYER.helsinki === true) {
                var image = 'youthworkcountrybackground';
                PLAYER.age = 58;
                var text = "Olet alkanut kärsiä hengenahdistuksesta silloin tällöin, muttet anna sen hidastaa tahtia. Onhan teillä hissi - niin konttorilla kuin kotonakin. "
                +"Lisäksi olet tuntenut silloin tällöin pientä rintakipua, joka yltyy lauantaisaunan jälkeen sietämättömäksi.";
            } else {
                PLAYER.age = 65;
                var image = 'citybackground';
                var text = "Jäät eläkkeelle vaneritehtaalta 65-vuotiaana. Jatkaisit mielelläsi pidempäänkin, mutta vaimosi painostaa sinua antamaan tilaa nuoremmille. "
                +"Sitä paitsi hän haluaa matkustaa, sillä siihen ei ole aikaisemmin ollut juuri aikaa. Kreikasta tulee suosikkikohteenne, jonne lennätte kerran vuodessa.";
            }
        } else {
            if(PLAYER.divorced === true) {
                PLAYER.age = 55;
                var text = "Lapsesi ovat lähteneet maailmalle, toinen Ruotsiin ja toinen Helsinkiin, mutta välisi heihin ovat lämpimät. "
                +"Myös siskosi kolme lasta ovat sinulle kuin omia, ja he käyvät luonasi kyläilemässä miltei viikoittain. Tienaat elantosi "
                +"työskentelemällä siskosi tilalla. Olet ikäiseksesi hyvässä kunnossa ja voimia työntekoon riittää vielä pitkään.";
                var image = "countrybackground";
            } else if(PLAYER.location.name !== "Jyväskylä" && PLAYER.class === "middle") {
                PLAYER.age = 60;
                var text = "Eläkeiän lähestyessä sinun on mietittävä järjestelyä uudelleen, sillä lapsesi perivät kaupan jonakin päivänä joka tapauksessa. "
                +"Tyttärestäsi tulee kauppias sinun siirtyessäsi pikkuhiljaa taka-alalle. Kokonaan et malta pysyä poissa vielä seitsemänkymppisenäkään.";
            } else if(PLAYER.location.name !== "Jyväskylä" && PLAYER.class === "poor" && PLAYER.movedtocity !== true) {
                var image = "citybackground";
                PLAYER.age = 55;
                var text = "Olet vuosien varrella onnistunut haalimaan itsellesi siivoustöitä sieltä täältä, mutta nykyisin huolehdit lastenlapsistasi "
                +"heidän vanhempiensa ollessa töissä. Molemmat lapsesi puolisoineen ovat töissä tehtaalla.";
            } else if(PLAYER.lotta === true) {
                var image = "lottawarbackground";
                PLAYER.age = 63;
                var text = "Jäätyäsi eläkkeelle olet alkanut unohdella asioita, hukata avaimia ja sen sellaista. Ajattelet sen olevan normaalia vanhuuden höperyyttä, "
                +"etkä ole moksiskaan. Mainitset kuitenkin asiasta ohi mennen lääkärillesi. Hän ottaa asian vakavasti ja passittaa sinut muistitesteihin. Diagnoosi on "
                +"Alzheimerin tauti, joka näyttää etenevän vauhdilla.";
            } else if(PLAYER.widowboss === true) {
                if("undefined" !== typeof PLAYER.spouse) {
                    var image = "citybackground";
                    PLAYER.age = 50;
                    var text = "Miehesi rintakivut sen sijaan tulevat yllätyksenä. Lauantaisaunan jälkeen ne yltyvät sietämättömiksi, ja joudut kutsumaan ambulanssin. "
                    +"Se on kuitenkin liian myöhäistä. Jäit leskeksi 50-vuotiaana.";
                } else {
                    var image = "citybackground";
                    var text = "Olet kärsinyt jo jonkin aikaa vatsakivuista, mutta et ole tottunut valittamaan pienistä etkä viitsi vaivata lääkäriä moisella asialla. "
                    +"Miehesi patistaa sinut kuitenkin vastaanotolle, koska hän on sitä mieltä, että olet laihtunut liikaa. Saat huonoja uutisia. Kyseessä on vatsasyöpä, "
                    +"jota ei voida parantaa.";
                }
            } else {
                var image = "citybackground";
                var text = "Olet kärsinyt jo jonkin aikaa vatsakivuista, mutta et ole tottunut valittamaan pienistä etkä viitsi vaivata lääkäriä moisella asialla. "
                +"Miehesi patistaa sinut kuitenkin vastaanotolle, koska hän on sitä mieltä, että olet laihtunut liikaa. Saat huonoja uutisia. Kyseessä on vatsasyöpä, "
                +"jota ei voida parantaa.";
            }
        }
                
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        if(PLAYER.gender === "male") {
            if(PLAYER.location.name !== "Jyväskylä" && PLAYER.class === "poor" && PLAYER.movedtocity !== true) {
                GAME.state.start('oldyears2');
            } else if (PLAYER.window.location.name !== "Jyväskylä" && PLAYER.class === "middle") {
                GAME.state.start('oldyears2');
            } else if(PLAYER.helsinki === true) {
                PLAYER.causeofdeath = "rintakipu";
                GAME.state.start('death');
            } else {
                GAME.state.start('oldyears2');
            }
        } else {
            if(PLAYER.divorced === true) {
                GAME.state.start('heinalato4ever');
            } else if(PLAYER.location.name !== "Jyväskylä" && PLAYER.class === "middle") {
                GAME.state.start('oldyears2');
            } else if(PLAYER.location.name !== "Jyväskylä" && PLAYER.class === "poor" && PLAYER.movedtocity !== true) {
                GAME.state.start('oldyears2');
            } else if(PLAYER.lotta === true) {
                PLAYER.causeofdeath = "alzheimer";
                GAME.state.start('death');
            } else if(PLAYER.widowboss === true) {
                if("undefined" !== typeof PLAYER.spouse) {
                    GAME.state.start('oldyears2');
                } else {
                    PLAYER.causeofdeath = "vatsa";
                    GAME.state.start('death');
                }
            } else {
                PLAYER.causeofdeath = "vatsa";
                GAME.state.start('death');
            }
        }
    }
}