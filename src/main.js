var GAME = new Phaser.Game(1280, 720, Phaser.AUTO, 'gameArea', { preload: preload, create: create, update: update });
var PLAYER = {};
var BACKGROUND_MUSIC;
var PREVIOUS_BACKGROUND;

var CENTER;

var CENTER_BUTTON;
var LEFT_BUTTON;
var RIGHT_BUTTON;

/* Global text styles are defined here */
var STYLE        = {font: "40px Alegreya Sans", fill: "#1e1711", wordWrap: true, wordWrapWidth: 750};
var BUTTON_STYLE = {font: "40px Alegreya Sans", fill: "#1e1711"};
var BUTTON_CLICK = {font: "40px Alegreya Sans", fill: "#e5c66d"};
var INFO_STYLE   = {font: "40px Alegreya Sans", fill: "#FFFFFF"};
var YEAR_STYLE   = {font: "40px Alegreya Sans", fill: "#FFFFFF"};
var NAME_STYLE   = {font: "40px Alegreya Sans", fill: "#FFFFFF"};
var TITLE_STYLE  = {font: "70px Roboto",  fill: "#FFFFFF"};

var HIGHLIGHT_COLOR = "#3333ff";

// https://phaser.io/examples/v2/text/google-webfonts
WebFontConfig = {
    active: function() { GAME.time.events.add(Phaser.Timer.SECOND, createText, this); },
    google: {
      families: ['Alegreya Sans', 'Roboto']
    }
};


function preload() {
    //GAME.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');

    // Define all the states
    GAME.state.add('load', load_state);
    GAME.state.add('menu', menu_state);
    GAME.state.add('gender', gender_state);
    GAME.state.add('beginning', beginning_state);
    GAME.state.add('school0', school0_state);
    GAME.state.add('school1', school1_state);
    GAME.state.add('school2', school2_state);
    GAME.state.add('homechores0', homechores0_state);
    GAME.state.add('homechores1', homechores1_state);
    GAME.state.add('homechores2', homechores2_state);
    GAME.state.add('homechores3', homechores3_state);
    GAME.state.add('youthwork1', youthwork1_state);
    GAME.state.add('youthwork2', youthwork2_state);
    GAME.state.add('youthwork3', youthwork3_state);
    GAME.state.add('citywork0', citywork0_state);
    GAME.state.add('citywork1', citywork1_state);
    GAME.state.add('citywork2', citywork2_state);
    GAME.state.add('studies0', studies0_state);
    GAME.state.add('studies1', studies1_state);
    GAME.state.add('studies2', studies2_state);
    GAME.state.add('studies3', studies3_state);
    GAME.state.add('studies4', studies4_state);
    GAME.state.add('studies5', studies5_state);
    GAME.state.add('studies6', studies6_state);
    GAME.state.add('studies7', studies7_state);
    GAME.state.add('studies8', studies8_state);
    GAME.state.add('servant0', servant0_state);
    GAME.state.add('servant1', servant1_state);
    GAME.state.add('servant2', servant2_state);
    GAME.state.add('servant3', servant3_state);
    GAME.state.add('servant4', servant4_state);
    GAME.state.add('servant5', servant5_state);
    GAME.state.add('torppa1', torppa1_state);
    GAME.state.add('torppa2', torppa2_state);
    GAME.state.add('torppa3', torppa3_state);
    GAME.state.add('torppa4', torppa4_state);
    GAME.state.add('barn0', barn0_state);
    GAME.state.add('barn1', barn1_state);
    GAME.state.add('barn2', barn2_state);
    GAME.state.add('barn3', barn3_state);
    GAME.state.add('barn4', barn4_state);
    GAME.state.add('weddingcountry', weddingcountry_state);
    GAME.state.add('child1', child1_state);
    GAME.state.add('dance1', dance1_state);
    GAME.state.add('apprentice', apprentice_state);
    GAME.state.add('lotta0', lotta0_state);
    GAME.state.add('workaway', workaway_state);
    GAME.state.add('workhome', workhome_state);
    GAME.state.add('conscript', conscript_state);
    GAME.state.add('conscript2', conscript2_state);
    GAME.state.add('conscript3', conscript3_state);
    GAME.state.add('conscriptwife', conscriptwife_state);
    GAME.state.add('beginwar', beginwar_state);
    GAME.state.add('war1', war1_state);
    GAME.state.add('war2', war2_state);
    GAME.state.add('war3', war3_state);
    GAME.state.add('wartime1', wartime1_state);
    GAME.state.add('death', death_state);
    
    // Start with the 'load' state
    GAME.state.start('load');
}

function create() {
    GAME.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    GAME.scale.pageAlignHorizontally = true;
    GAME.scale.pageAlignVertically = true;

    // Define global variables for button positions relative to the center of the world
    var defaultElevation = 1.4; // 0 == top, 1 == center, 2 == bottom
    CENTER        = {x: GAME.world.centerX, y: GAME.world.centerY};
    CENTER_BUTTON = {x: CENTER.x,           y: CENTER.y * defaultElevation};
    LEFT_BUTTON   = {x: CENTER.x * 0.6,     y: CENTER.y * defaultElevation};
    RIGHT_BUTTON  = {x: CENTER.x * 1.4,     y: CENTER.y * defaultElevation};

    PLAYER.diedInChildhood = false;
}

function update() {
}
