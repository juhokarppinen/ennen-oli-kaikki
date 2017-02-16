var beginning_state = {
    preload: function () {
    },
    create: function () {
        game.add.sprite(0, 0, 'background');
        var style = {font: "25px verdana", fill: "#FFFFFF"};
        
        //all the options for player creation
        var sexes = ["male", "female"]; //probability based on statistics
        var maleNames = ["Eino", "Toivo", "Veikko", "Väinö", "Tauno", "Erkki"]; //purely random based on sex
        var femaleNames = ["Anna", "Aino", "Aili", "Tyyne", "Aune", "Helvi"]; //purely random based on sex
        var classes = ["poor", "middle", "rich"]; //probability based on statistics
        var locations = ["country", "city"]; //probability based on statistics
        
        //todo: create player attributes based on probability
        var player = {name: "Vilho", sex: "male", class: "poor", location: "country"};
        
        var text1 = game.add.text(game.world.centerX * 0.3, game.world.centerY * 0.5, "Synnyit poikavauvaksi vuoteen 1917.", style);
        var text2 = game.add.text(game.world.centerX * 0.3, game.world.centerY * 0.6, "Nimesi on "+player.name+".", style);
        var text3 = game.add.text(game.world.centerX * 0.3, game.world.centerY * 0.7, "Elät köyhässä perheessä maaseudulla.", style);

        var continueButton = game.add.button(game.world.centerX, game.world.centerY, 'button');
        continueButton.anchor.set(0.5);
        var t1 = game.add.text(continueButton.centerX, continueButton.centerY, 'Jatka');
        t1.anchor.set(0.5);
        continueButton.inputEnabled = true;
        continueButton.events.onInputDown.add(goToSchool, this);

    },
    update: function () {
    }
}

function goToSchool() {
    //x% die before going to school
    //country children receive 20% chance to not go to school
    game.state.start('school');
}