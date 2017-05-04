var GAME = new Phaser.Game(1280, 720, Phaser.AUTO, 'gameArea', { preload: preload, create: create, update: update });
var PLAYER = {};
var BACKGROUND_MUSIC;
var PREVIOUS_BACKGROUND;
var INFO_VISIBLE = false;

var CENTER;

var CENTER_BUTTON;
var LEFT_BUTTON;
var RIGHT_BUTTON;

/* Global text styles are defined here */
var STYLE        = {font: "40px Alegreya Sans", fill: "#1e1711", wordWrap: true, wordWrapWidth: 750};
var INFO_STYLE2  = {font: "30px Alegreya Sans", fill: "#eeeeee", wordWrap: true, wordWrapWidth: 750};
var HELP_STYLE   = {font: "40px Alegreya Sans", fill: "#eeeeee", wordWrap: true, wordWrapWidth: 1220};
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
    GAME.state.add('credits', credits_state);
    GAME.state.add('help', help_state);
    GAME.state.add('load', load_state);
    GAME.state.add('menu', menu_state);
    GAME.state.add('gender', gender_state);
    GAME.state.add('beginning', beginning_state);
    GAME.state.add('school0', school0_state);
    GAME.state.add('school1', school1_state);
    GAME.state.add('school2', school2_state);
    GAME.state.add('homechores0', homechores0_state);
    GAME.state.add('homechores1', homechores1_state);
    GAME.state.add('youthwork1', youthwork1_state);
    GAME.state.add('youthwork3', youthwork3_state);
    GAME.state.add('countrywork1', countrywork1_state);
    GAME.state.add('citywork0', citywork0_state);
    GAME.state.add('citywork1', citywork1_state);
    GAME.state.add('citywork2', citywork2_state);
    GAME.state.add('citywork3', citywork3_state);
    GAME.state.add('citywork4', citywork4_state);
    GAME.state.add('studies0', studies0_state);
    GAME.state.add('studies1', studies1_state);
    GAME.state.add('studies2', studies2_state);
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
    GAME.state.add('barn5', barn5_state);
    GAME.state.add('weddingcountry', weddingcountry_state);
    GAME.state.add('weddingpeace', weddingpeace_state);
    GAME.state.add('child1', child1_state);
    GAME.state.add('lotta0', lotta0_state);
    GAME.state.add('lotta1', lotta1_state);
    GAME.state.add('lotta2', lotta2_state);
    GAME.state.add('workaway', workaway_state);
    GAME.state.add('workhome', workhome_state);
    GAME.state.add('conscript', conscript_state);
    GAME.state.add('conscript2', conscript2_state);
    GAME.state.add('conscript3', conscript3_state);
    GAME.state.add('conscript4', conscript4_state);
    GAME.state.add('conscript5', conscript5_state);
    GAME.state.add('noconscript', noconscript_state);
    GAME.state.add('conscriptwife', conscriptwife_state);
    GAME.state.add('conscriptwife2', conscriptwife2_state);
    GAME.state.add('beforewar', beforewar_state);
    GAME.state.add('beginwar', beginwar_state);
    GAME.state.add('beginwar2', beginwar2_state);
    GAME.state.add('war1', war1_state);
    GAME.state.add('war2', war2_state);
    GAME.state.add('war3', war3_state);
    GAME.state.add('war4', war4_state);
    GAME.state.add('war5', war5_state);
    GAME.state.add('war6', war6_state);
    GAME.state.add('war7', war7_state);
    GAME.state.add('wartime1', wartime1_state);
    GAME.state.add('wartime2', wartime2_state);
    GAME.state.add('wartime3', wartime3_state);
    GAME.state.add('wartime4', wartime4_state);
    GAME.state.add('wartime5', wartime5_state);
    GAME.state.add('wartime6', wartime6_state);
    GAME.state.add('wartime7', wartime7_state);
    GAME.state.add('warcrush1', warcrush1_state);
    GAME.state.add('warcrush2', warcrush2_state);
    GAME.state.add('warcrush3', warcrush3_state);
    GAME.state.add('warromance1', warromance1_state);
    GAME.state.add('warromance2', warromance2_state);
    GAME.state.add('warromance3', warromance3_state);
    GAME.state.add('warcrush4', warcrush4_state);
    GAME.state.add('warcrush5', warcrush5_state);
    GAME.state.add('warchoice1', warchoice1_state);
    GAME.state.add('warchoice2', warchoice2_state);
    GAME.state.add('warchoice3', warchoice3_state);
    GAME.state.add('warchoice4', warchoice4_state);
    GAME.state.add('peacetime1', peacetime1_state);
    GAME.state.add('peacetime2', peacetime2_state);
    GAME.state.add('peacesoldier1', peacesoldier1_state);
    GAME.state.add('peacesoldier2', peacesoldier2_state);
    GAME.state.add('peacesoldier3', peacesoldier3_state);
    GAME.state.add('peacecrush1', peacecrush1_state);
    GAME.state.add('peacecrush2', peacecrush2_state);
    GAME.state.add('peacecrush3', peacecrush3_state);
    GAME.state.add('peaceend1', peaceend1_state);
    GAME.state.add('peaceend2', peaceend2_state);
    GAME.state.add('prewar1', prewar1_state);
    GAME.state.add('prewar2', prewar2_state);
    GAME.state.add('map1', map1_state);
    GAME.state.add('endwar', endwar_state);
    GAME.state.add('warend1', warend1_state);
    GAME.state.add('warend2', warend2_state);
    GAME.state.add('warend3', warend3_state);
    GAME.state.add('newchoice1', newchoice1_state);
    GAME.state.add('newchoice2', newchoice2_state);
    GAME.state.add('newchoice3', newchoice3_state);
    GAME.state.add('newchoice4', newchoice4_state);
    GAME.state.add('newchoice5', newchoice5_state);
    GAME.state.add('newpath1', newpath1_state);
    GAME.state.add('newpath2', newpath2_state);
    GAME.state.add('newpath3', newpath3_state);
    GAME.state.add('newpath4', newpath4_state);
    GAME.state.add('sixties', sixties_state);
    GAME.state.add('oldyears1', oldyears1_state);
    GAME.state.add('oldyears2', oldyears2_state);
    GAME.state.add('oldyears3', oldyears3_state);
    GAME.state.add('oldyears4', oldyears4_state);
    GAME.state.add('oldyears5', oldyears5_state);
    GAME.state.add('heinalato4ever', heinalato4ever_state);
    GAME.state.add('death', death_state);
    
    // Start with the 'load' state
    GAME.state.start('load');
}

function create() {
    GAME.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    GAME.scale.pageAlignHorizontally = true;
    GAME.scale.pageAlignVertically = true;

    // Define global variables for button positions relative to the center of the world
    var defaultElevation = 1.5; // 0 == top, 1 == center, 2 == bottom
    CENTER        = {x: GAME.world.centerX, y: GAME.world.centerY};
    CENTER_BUTTON = {x: CENTER.x,           y: CENTER.y * defaultElevation};
    LEFT_BUTTON   = {x: CENTER.x * 0.6,     y: CENTER.y * defaultElevation};
    RIGHT_BUTTON  = {x: CENTER.x * 1.4,     y: CENTER.y * defaultElevation};

    PLAYER.diedInChildhood = false;
    PLAYER.previousClass = '';
}

function update() {
}
