var child1_state = {

    create: function() {
        PLAYER.age = 20;
        if (Math.random() <= 0.50) {
            var name = pickName("male");
            while(name === PLAYER.name || name === PLAYER.spouse) {
                name = pickName("male");
            }
            PLAYER.children = [{name: name, gender: "male", year: 1937}];
            var baby = "poikavauvan";
        } else {
            var name = pickName("female");
            while(name === PLAYER.name || name === PLAYER.spouse) {
                name = pickName("female");
            }
            PLAYER.children = [{name: pickName("female"), gender: "female", year: 1937}];
            var baby = "tyttövauvan";
        }
        var image            = 'familybackground';
        if(PLAYER.class === "poor") {
            if(PLAYER.gender === "male") {
                var text = "Saatte "+baby+" ja lapsi saa nimekseen "+PLAYER.children[0].name+". "
                +PLAYER.spouse + " voi synnytyksen jälkeen huonosti, ja talon rouva lupaa hänelle vapaata muutamaksi viikoksi. "
                +"Sinun on kuitenkin paiskittava töitä kahta kauheammin elättääksesi pienen perheesi.";
            } else {
                var text = "Saatte "+baby+" ja lapsi saa nimekseen "+PLAYER.children[0].name+". Synnytys oli vaikea, "
                +"ja olet heikossa kunnossa. Onneksi talon rouva vapauttaa sinut töistäsi muutamaksi viikoksi. "
                +"Miehesi joutuu kuitenkin paiskimaan töitä kahta kauheammin, eikä hän ehdi kotiin kuin nukkumaan.";
            }
        } else {
            var text = "Saatte terveen "+baby+" ja lapsi saa nimekseen "+PLAYER.children[0].name+
            ". Sukulaiset ihastelevat pienokaista ja elämä hymyilee.";
        }
        
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        if(PLAYER.gender === "male") {
            GAME.state.start('conscript');
        } else {
            if ("undefined" === typeof PLAYER.spouse) {
                GAME.state.start('beforewar');
        } else {
            GAME.state.start('conscriptwife');
        }
        }
    }
}