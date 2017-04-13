var info_state = {
    preload: function () {
    },

    create: function () {
        var background = drawBackground('menubackground');
        background.alpha = 0.15;
        PREVIOUS_BACKGROUND = 'menubackground';
        
        var helpContents = {
            help1: {
                txt: "Ennen oli kaikki...\nMillainen elämäsi olisi ollut, jos" + 
                     "olisit syntynyt sata vuotta sitten?",
                btnL: "Lue ohjeet",
                btnR: "Aloita peli"
            },
            help2: {
                txt: "Klikkaamalla suurennuslasia pääset katsomaan taustakuvaa " +
                     "tarkemmin ilman tekstiä. Klikkaamalla uudelleen pääset " +
                     "takaisin peliin." +
                     "\n\n" + 
                     "Voit tarvittaessa hiljentää äänet, mutta saadaksesi parhaan " +
                     "pelikokemuksen ne kannattaa pitää päällä.",
                btnL: "Ohje 2/2",
                btnR: "Aloita peli"
            },
            help3: {
                txt: "Valitse ensin, haluatko syntyä tytöksi vai pojaksi. Peli " +
                     "saattaa ensimmäisellä kierroksella päättyä heti alkuunsa, " +
                     "sillä yli kymmenennes vuonna 1917 syntyneistä kuoli ennen " +
                     "yksivuotissyntymäpäiväänsä. Voit kuitenkin aloittaa alusta " +
                     "ja kokeilla, jatkuisiko peli kauemmin, jos pelihahmosi " +
                     "sukupuoli olisi toinen. Mitä useamman kierroksen pelaat, " +
                     "sitä tarkemman kuvan saat siitä, millaisessa maassa tämän " +
                     "päivän satavuotiaat ovat eläneet - tarinoita on monta." +
                     "\n\n" +
                     "Pelin hahmojen elämänkäänteet perustuvat tilastoihin ja " +
                     "historiallisiin tapahtumiin, mutta hahmot eivät kerro " +
                     "yksittäisistä ihmisistä, vaan ne ovat täysin fiktiivisiä. " +
                     "Tausta-aineistona on käytetty muun muassa aikalaisten " +
                     "muistelmia ja elämäkertoja, joiden tarinoita on yhdistelty " +
                     "sopiviksi kokonaisuuksiksi. Pelissä on esimerkiksi " +
                     "mahdollista syntyä saarijärveläiseen pappilaan, vaikka " +
                     "todellisuudessa Saarijärven kirkkoherran perheeseen ei " +
                     "syntynyt lapsia vuonna 1917. Maaseutupappilan asukkaiden " +
                     "elämää on kuitenkin pyritty kuvaamaan sellaisena kuin se " +
                     "tuon ajan Suomessa oli.",
                btnL: "Jatka",
                btnR: "Aloita peli"
            }
        };
        
        var UIbtn   = drawToggleUIbutton([]);
        var muteBtn = drawToggleSoundButton()[0];


    }
};