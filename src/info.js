var info_state = {
    create: function () {
        var background = drawBackground('menubackground');
        background.alpha = 0.15;
        PREVIOUS_BACKGROUND = 'menubackground';
        
        var helpContents = {
            page:        1,
            subPage:     0,
            btnLHandler: function() { this.turnPage(helpContents); },
            btnRHandler: function() {
                BACKGROUND_MUSIC = GAME.add.audio('music-Bittersweet');
                BACKGROUND_MUSIC.loop = true;
                BACKGROUND_MUSIC.play();
                GAME.state.start('menu');
            },
            btnR:        "Aloita peli",
            textObj:     {},

            help1: {
                txt: ["Ennen oli kaikki...\n\nMillainen elämäsi olisi ollut, jos " + 
                     "olisit syntynyt sata vuotta sitten?"],
                btnL: "Lue ohjeet"
            },
            help2: {
                txt: ["Klikkaamalla suurennuslasia pääset katsomaan taustakuvaa " +
                     "tarkemmin ilman tekstiä. Klikkaamalla uudelleen pääset " +
                     "takaisin peliin." +
                     "\n\n" + 
                     "Voit tarvittaessa hiljentää äänet, mutta saadaksesi parhaan " +
                     "pelikokemuksen ne kannattaa pitää päällä."],
                btnL: "Seuraava sivu",
            },
            help3: {
                txt: ["Valitse ensin, haluatko syntyä tytöksi vai pojaksi. Peli " +
                     "saattaa ensimmäisellä kierroksella päättyä heti alkuunsa, " +
                     "sillä yli kymmenennes vuonna 1917 syntyneistä kuoli ennen " +
                     "yksivuotissyntymäpäiväänsä. Voit kuitenkin aloittaa alusta " +
                     "ja kokeilla, jatkuisiko peli kauemmin, jos pelihahmosi " +
                     "sukupuoli olisi toinen. Mitä useamman kierroksen pelaat, " +
                     "sitä tarkemman kuvan saat siitä, millaisessa maassa tämän " +
                     "päivän satavuotiaat ovat eläneet  –  tarinoita on monta.",

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
                     "tuon ajan Suomessa oli."],
                btnL: "Seuraava sivu",
            }
        };        
        this.turnPage(helpContents);
    },


    turnPage: function(hC, finished = false) {
        var helpText = hC["help" + hC.page].txt[hC.subPage];
        if (hC.page === 2) {
            hC.textObj = this.drawText(helpText, 150);
            hC.textObj.wordWrapWidth = 1070;
        } else {
            hC.textObj = this.drawText(helpText);
        }
        var buttons;
        var helpButton;
        var startButton;

        if (hC.page === 2) {
            hC.magnifyButton = this.drawButton(75, 100, 'toggleUIbutton');
            hC.muteButton = this.drawButton(75, 310, 'soundOnButton');
        }
        if (hC.page === 3) {
            hC.magnifyButton.forEach(function(e) {e.destroy();});
            hC.muteButton.forEach(function(e) {e.destroy();});
        }

        if (!finished) {
            helpButton = 
                createButton(
                    LEFT_BUTTON.x, 
                    LEFT_BUTTON.y + 100, 
                    hC["help" + hC.page].btnL, 
                    function() {
                        hC.textObj.destroy();
                        buttons.forEach(function(e) {
                            e.forEach(function(el) {
                                el.destroy();
                            });
                        });
                        if (hC.page < 3) {
                            hC.page += 1;
                            this.turnPage(hC);
                        } else if (hC.subPage < 1) {
                            hC.subPage += 1;
                            this.turnPage(hC, true);
                        }
                    },
                    this);

            var startButton = {x: RIGHT_BUTTON.x, y: RIGHT_BUTTON.y + 100};
        } else {
            var startButton = {x: CENTER_BUTTON.x, y: CENTER_BUTTON.y + 100};
        }

        var startButton =
            createButton(
                startButton.x, 
                startButton.y, 
                hC.btnR, 
                hC.btnRHandler,
                this);
        buttons = [helpButton, startButton];

        if (helpButton) helpButton.forEach(function(e) {e.alpha = 1;});
        startButton.forEach(function(e) {e.alpha = 1;});
    },


    drawText: function(txt, x = 50, y = 50) {
        var text = GAME.add.text(x, y, txt, HELP_STYLE);
        text.alpha = 0;
        text.addColor(HELP_STYLE.fill, 0);
        GAME.add.tween(text).to({ alpha: 1 }, 500, Phaser.Easing.Linear.None, true, 0);
        return text;
    },


    drawButton: function(x, y, buttonSprite) {
        var gfx = GAME.add.graphics(0, 0);
        gfx.beginFill(0xffffff, 0.25);
        gfx.drawCircle(x, y, 80);
        gfx.endFill();

        var btn = GAME.add.sprite(x, y, buttonSprite);
        btn.scale.setTo(0.1);
        btn.anchor.setTo(0.5);
        btn.tint = 0x000000;
        btn.alpha = 0;

        GAME.add.tween(gfx).to({ alpha: 1 }, 500, Phaser.Easing.Linear.None, true, 0);
        GAME.add.tween(btn).to({ alpha: 0.66 }, 500, Phaser.Easing.Linear.None, true, 0);

        return [gfx, btn];
    }
};