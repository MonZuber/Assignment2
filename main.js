
var game;
var group;
var leader;
var music
var game = new Phaser.Game(1350, 640, Phaser.CANVAS, 'playground', { preload: preload, create: create, update: update});



function preload() {
    game.load.image('sky', './assets/sky.png');
	game.load.spritesheet('finch', './assets/finch.png', 120, 120);
	game.load.spritesheet('crow', './assets/crowk.png', 120, 120);
	 game.canvas.oncontextmenu = function (e) { e.preventDefault(); }

	game.load.audio('naruto',['assets/audio/naruto.mp3']);
	music = game.add.audio('naruto');
		music.play();
	game.input.onDown.add(changeVolume, this);
	
	function changeVolume(pointer) {

    if (pointer.y < 100)
    {
        music.mute = false;
    }
    else if (pointer.y < 300)
    {
        music.volume += 0.1;
    }
    else
    {
        music.volume -= 0.1;
    }

}
function render() {
    game.debug.soundInfo(music, 20, 32);
}

   
	
	window.onload = function() {
	var context = new AudioContext();
	var play = new Audio("./assets/audio/naruto.mp3");
	play.volume = .1;
	var myCurrentVolume = play.volume;
	
	playSound = function() {
	play.play();
	}
	}
}

function create() {
	
	//adds sky background
    game.add.tileSprite(0, 0, 1350, 640, 'sky');
    game.physics.startSystem(Phaser.Physics.ARCADE);
	
    group = game.add.group();
    group.enableBody = true;

    // create finch which is to be followed by the crows
    leader = game.add.sprite(800, 250, 'finch');
    addAnimation(leader);
    leader.animations.play('Right');
    leader.destination = {x: 400, y: 500};
    //speed at which the finch will fly
	leader.speed = 80;
    game.physics.arcade.enable(leader);
    createCrow();
}

//crows will flock or aim for the center point of the finch
function update() {

    playAnimation(leader);
    getDestinationPoint();

    for (var i = 0; i < group.children.length; i++) {
        var player = group.children[i];
        player.destination.x = leader.centerX;
        player.destination.y = leader.centerY;

        playAnimation(player);
    }
}

//creates a crow (15) to follow the finch
function createCrow() {

    for (var i = 0; i < 15; i++) {
      
		var player = group.create(100 + Math.random() * 1300, 50 + Math.random() * 600, 'crow');
        group.add(player);
        player.destination = {x: null, y: null};
        player.speed = getRandomInt(7, 49);
        console.log(player.speed);

        addAnimation(player);
		player.animations.play('Left');
    }

}

function addAnimation (player) {
	
	//Animations from sheet to fly right
	player.animations.add('Right',  [0, 1, 2, 3, 4], 10, true);
	//Animations from sheet to fly left
	player.animations.add('Left',  [5, 6, 7, 8, 9], 10, true);
}


function playAnimation(player) {

    player.angle = game.physics.arcade.moveToXY(player, player.destination.x - 40, player.destination.y - 47, player.speed);


    // Fly Right or Left depending on angle and direction
	if (player.angle >= -0.3 && player.angle <= 0.3) {
		player.animations.play('Right');
	}
	else if (player.angle > 0.3 && player.angle <= 1.2) {
		player.animations.play('Right');
	}
	else if (player.angle > 1.2 && player.angle <= 1.9) {
		player.animations.play('Right');
	}
	else if (player.angle > -1.3 && player.angle < -0.3) {
		player.animations.play('Right');
	}
	else if (player.angle > 1.9 && player.angle <= 2.7) {
		player.animations.play('Left');
	}
	else if (player.angle > 2.7 && player.angle <= Math.PI) {
		player.animations.play('Left');
	}
	else if ( (player.angle >= (Math.PI * -1) ) && player.angle <= -2.8) {
		player.animations.play('Left');
	}
	else if (player.angle > -2.8 && player.angle <= -1.9) {
		player.animations.play('Left');
	}
	else if (player.angle > -1.9 && player.angle <= -1.3) {
		player.animations.play('Left');
	}
	
}

function render(){
	game.debug.soundInfo(music,20,32);
}

//creates a new destination for the finch once it reaches initial destination
function getDestinationPoint() {
    var differenceX = Math.abs(leader.destination.x - leader.centerX);
	var differenceY = Math.abs(leader.destination.y - leader.centerY);

    // Once at destination, create a new destination point
	if ( (differenceX <= 60) && (differenceY <= 60) ) {
        leader.destination.x = getRandomInt(0, 1350);
        leader.destination.y = getRandomInt(0, 640);
	}
}

//random num generator so that destinations are random
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
