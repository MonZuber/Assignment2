	
window.onload = function(){
var socket = io.connect("http://24.16.255.56:8888");

socket.on("load", function (data) {
    console.log('loaded data');
    console.log(data);
  
});

var text = document.getElementById("text");
  var saveButton = document.getElementById("save");
  var loadButton = document.getElementById("load");
  
  saveButton.onclick = function () {
    console.log("save");
    text.innerHTML = "Saved."
    socket.emit("save", {studentname: "Moneer Marouf", statename: "gamestate-1", data: "bye"});
	};
	
	loadButton.onclick = function () {
    console.log("load");
    text.innerHTML = "Loaded."
    socket.emit("load", { studentname: "Moneer Marouf", statename: "gamestate-1"});
        loadState(data.data);
    };

/*if (saveKey.isDown) {
        var data = saveState();
        console.log('Saved data: ' + data);
        socket.emit("save", {studentname: "Moneer Marouf", statename: "gamestate-1", data: "bye"});
	}
	
	else if (loadKey.isDown) {
		console.log("load");
        socket.emit("load", { studentname: "Moneer Marouf", statename: "gamestate-1"});
        // loadState(data.data);
    }
	*/
function loadState(state) {

    // load the state of entities from Dr. Marriott's  legendary database
    // finch
     leader.position.x = state.leader.position.x;
    leader.position.y = state.leader.position.y;
    leader.destination.x = state.leader.destination.x;
    leader.destination.y = state.leader.destination.y;
    leader.speed = state.leader.speed;
	
    // player 1
    group.getChildAt(0).x = state.player1.position.x;
    group.getChildAt(0).y = state.player1.position.y;
    group.getChildAt(0).destination.x = state.player1.destination.x;
    group.getChildAt(0).destination.y = state.player1.destination.y;
    group.getChildAt(0).speed = state.player1.speed;

    // player 2
    group.getChildAt(1).x = state.player2.position.x;
    group.getChildAt(1).y = state.player2.position.y;
    group.getChildAt(1).destination.x = state.player2.destination.x;
    group.getChildAt(1).destination.y = state.player2.destination.y;
    group.getChildAt(1).speed = state.player2.speed;

    // player 3
    group.getChildAt(2).x = state.player3.position.x;
    group.getChildAt(2).y = state.player3.position.y;
    group.getChildAt(2).destination.x = state.player3.destination.x;
    group.getChildAt(2).destination.y = state.player3.destination.y;
    group.getChildAt(2).speed = state.player3.speed;

    // player 4
    group.getChildAt(3).x = state.player4.position.x;
    group.getChildAt(3).y = state.player4.position.y;
    group.getChildAt(3).destination.x = state.player4.destination.x;
    group.getChildAt(3).destination.y = state.player4.destination.y;
    group.getChildAt(3).speed = state.player4.speed;

    // player 5
    group.getChildAt(4).x = state.player5.position.x;
    group.getChildAt(4).y = state.player5.position.y;
    group.getChildAt(4).destination.x = state.player5.destination.x;
    group.getChildAt(4).destination.y = state.player5.destination.y;
    group.getChildAt(4).speed = state.player5.speed;

    // player 6
    group.getChildAt(5).x = state.player6.position.x;
    group.getChildAt(5).y = state.player6.position.y;
    group.getChildAt(5).destination.x = state.player6.destination.x;
    group.getChildAt(5).destination.y = state.player6.destination.y;
    group.getChildAt(5).speed = state.player6.speed;

    // player 7
    group.getChildAt(6).x = state.player7.position.x;
    group.getChildAt(6).y = state.player7.position.y;
    group.getChildAt(6).destination.x = state.player7.destination.x;
    group.getChildAt(6).destination.y = state.player7.destination.y;
    group.getChildAt(6).speed = state.player7.speed;

    // player 8
    group.getChildAt(7).x = state.player8.position.x;
    group.getChildAt(7).y = state.player8.position.y;
    group.getChildAt(7).destination.x = state.player8.destination.x;
    group.getChildAt(7).destination.y = state.player8.destination.y;
    group.getChildAt(7).speed = state.player8.speed;

    // player 9
    group.getChildAt(8).x = state.player9.position.x;
    group.getChildAt(8).y = state.player9.position.y;
    group.getChildAt(8).destination.x = state.player9.destination.x;
    group.getChildAt(8).destination.y = state.player9.destination.y;
    group.getChildAt(8).speed = state.player9.speed;

    // player 10
    group.getChildAt(9).x = state.player10.position.x;
    group.getChildAt(9).y = state.player10.position.y;
    group.getChildAt(9).destination.x = state.player10.destination.x;
    group.getChildAt(9).destination.y = state.player10.destination.y;
    group.getChildAt(9).speed = state.player10.speed;
	
	
	 // player 11
    group.getChildAt(10).x = state.player11.position.x;
    group.getChildAt(10).y = state.player11.position.y;
    group.getChildAt(10).destination.x = state.player11.destination.x;
    group.getChildAt(10).destination.y = state.player11.destination.y;
    group.getChildAt(10).speed = state.player11.speed;
	
	
	 // player 12
    group.getChildAt(11).x = state.player12.position.x;
    group.getChildAt(11).y = state.player12.position.y;
    group.getChildAt(11).destination.x = state.player12.destination.x;
    group.getChildAt(11).destination.y = state.player12.destination.y;
    group.getChildAt(11).speed = state.player12.speed;

	
	 // player 13
    group.getChildAt(12).x = state.player13.position.x;
    group.getChildAt(12).y = state.player13.position.y;
    group.getChildAt(12).destination.x = state.player13.destination.x;
    group.getChildAt(12).destination.y = state.player13.destination.y;
    group.getChildAt(12).speed = state.player13.speed;
	
	 // player 14
    group.getChildAt(13).x = state.player14.position.x;
    group.getChildAt(13).y = state.player14.position.y;
    group.getChildAt(13).destination.x = state.player14.destination.x;
    group.getChildAt(13).destination.y = state.player14.destination.y;
    group.getChildAt(13).speed = state.player14.speed;
	
	 // player 15
    group.getChildAt(14).x = state.player15.position.x;
    group.getChildAt(14).y = state.player15.position.y;
    group.getChildAt(14).y = state.player15.position.y;
    group.getChildAt(14).destination.x = state.player15.destination.x;
    group.getChildAt(14).destination.y = state.player15.destination.y;
    group.getChildAt(14).speed = state.player15.speed;
	
}

	};
var game;
var group;
var leader;
var game = new Phaser.Game(1350, 640, Phaser.CANVAS, 'playground', { preload: preload, create: create, update: update});



function preload() {
    game.load.image('sky', './assets/sky.png');
	game.load.spritesheet('finch', './assets/finch.png', 120, 120);
	game.load.spritesheet('crow', './assets/crowk.png', 120, 120);
	 game.canvas.oncontextmenu = function (e) { e.preventDefault(); }


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
    leader.destination = {x: 350, y: 500};
    //speed at which the finch will fly
	leader.speed = 80;
    game.physics.arcade.enable(leader);
    createCrow();
	
	saveKey = game.input.keyboard.addKey(Phaser.Keyboard.S);
    loadKey = game.input.keyboard.addKey(Phaser.Keyboard.L);

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
		
		
	
	/*if (saveKey.isDown) {
        var data = saveState();
        console.log('Saved data: ' + data);
        socket.emit("save", {studentname: "Moneer Marouf", statename: "gamestate-1", data: "bye"});
	}
	
	else if (loadKey.isDown) {
		console.log("load");
        socket.emit("load", { studentname: "Moneer Marouf", statename: "gamestate-1"});
        // loadState(data.data);
    }
	*/
}

//creates a crow (15) to follow the finch
function createCrow() {

    for (var i = 0; i < 15; i++) {
      
		var player = group.create(100 + Math.random() * 1300, 50 + Math.random() * 600, 'crow');
        group.add(player);
        player.destination = {x: null, y: null};
        player.speed = getRandomInt(7, 49);
       // console.log(player.speed);

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

//function render(){
	//game.debug.soundInfo(music,20,32);
//}

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

//Save state function for state of the entities 
function saveState() {
    var state = {
        leader: {
            position: {x: leader.x, y: leader.y},
            destination: {x: leader.destination.x, y: leader.destination.y},
            speed: leader.speed
        },
        player1: {
            position: {x: group.getChildAt(0).x, y: group.getChildAt(0).y},
            destination: {x: group.getChildAt(0).destination.x, y: group.getChildAt(0).destination.y},
            speed: group.getChildAt(0).speed
        },
        player2: {
            position: {x: group.getChildAt(1).x, y: group.getChildAt(1).y},
            destination: {x: group.getChildAt(1).destination.x, y: group.getChildAt(1).destination.y},
            speed: group.getChildAt(1).speed
        },
        player3: {
            position: {x: group.getChildAt(2).x, y: group.getChildAt(2).y},
            destination: {x: group.getChildAt(2).destination.x, y: group.getChildAt(2).destination.y},
            speed: group.getChildAt(2).speed
        },
        player4: {
            position: {x: group.getChildAt(3).x, y: group.getChildAt(3).y},
            destination: {x: group.getChildAt(3).destination.x, y: group.getChildAt(3).destination.y},
            speed: group.getChildAt(3).speed
        },
        player5: {
            position: {x: group.getChildAt(4).x, y: group.getChildAt(4).y},
            destination: {x: group.getChildAt(4).destination.x, y: group.getChildAt(4).destination.y},
            speed: group.getChildAt(4).speed
        },
        player6: {
            position: {x: group.getChildAt(5).x, y: group.getChildAt(5).y},
            destination: {x: group.getChildAt(5).destination.x, y: group.getChildAt(5).destination.y},
            speed: group.getChildAt(5).speed
        },
        player7: {
            position: {x: group.getChildAt(6).x, y: group.getChildAt(6).y},
            destination: {x: group.getChildAt(6).destination.x, y: group.getChildAt(6).destination.y},
            speed: group.getChildAt(6).speed
        },
        player8: {
            position: {x: group.getChildAt(7).x, y: group.getChildAt(7).y},
            destination: {x: group.getChildAt(7).destination.x, y: group.getChildAt(7).destination.y},
            speed: group.getChildAt(7).speed
        },
        player9: {
            position: {x: group.getChildAt(8).x, y: group.getChildAt(8).y},
            destination: {x: group.getChildAt(8).destination.x, y: group.getChildAt(8).destination.y},
            speed: group.getChildAt(8).speed
        },
        player10: {
            position: {x: group.getChildAt(9).x, y: group.getChildAt(9).y},
            destination: {x: group.getChildAt(9).destination.x, y: group.getChildAt(9).destination.y},
            speed: group.getChildAt(9).speed
        },
		  player11: {
            position: {x: group.getChildAt(10).x, y: group.getChildAt(10).y},
            destination: {x: group.getChildAt(10).destination.x, y: group.getChildAt(10).destination.y},
            speed: group.getChildAt(10).speed
        },
		  player12: {
            position: {x: group.getChildAt(11).x, y: group.getChildAt(11).y},
            destination: {x: group.getChildAt(11).destination.x, y: group.getChildAt(11).destination.y},
            speed: group.getChildAt(11).speed
        },
		  player13: {
            position: {x: group.getChildAt(12).x, y: group.getChildAt(12).y},
            destination: {x: group.getChildAt(12).destination.x, y: group.getChildAt(12).destination.y},
            speed: group.getChildAt(12).speed
        },
		  player14: {
            position: {x: group.getChildAt(13).x, y: group.getChildAt(13).y},
            destination: {x: group.getChildAt(13).destination.x, y: group.getChildAt(13).destination.y},
            speed: group.getChildAt(13).speed
        },
		  player15: {
            position: {x: group.getChildAt(14).x, y: group.getChildAt(14).y},
            destination: {x: group.getChildAt(14).destination.x, y: group.getChildAt(14).destination.y},
            speed: group.getChildAt(14).speed
        }

    };

    return state;
}
/*

function loadState(state) {

    // load the state of entities from Dr. Marriott's  legendary database
    // finch
     leader.position.x = state.leader.position.x;
    leader.position.y = state.leader.position.y;
    leader.destination.x = state.leader.destination.x;
    leader.destination.y = state.leader.destination.y;
    leader.speed = state.leader.speed;
	
    // player 1
    group.getChildAt(0).x = state.player1.position.x;
    group.getChildAt(0).y = state.player1.position.y;
    group.getChildAt(0).destination.x = state.player1.destination.x;
    group.getChildAt(0).destination.y = state.player1.destination.y;
    group.getChildAt(0).speed = state.player1.speed;

    // player 2
    group.getChildAt(1).x = state.player2.position.x;
    group.getChildAt(1).y = state.player2.position.y;
    group.getChildAt(1).destination.x = state.player2.destination.x;
    group.getChildAt(1).destination.y = state.player2.destination.y;
    group.getChildAt(1).speed = state.player2.speed;

    // player 3
    group.getChildAt(2).x = state.player3.position.x;
    group.getChildAt(2).y = state.player3.position.y;
    group.getChildAt(2).destination.x = state.player3.destination.x;
    group.getChildAt(2).destination.y = state.player3.destination.y;
    group.getChildAt(2).speed = state.player3.speed;

    // player 4
    group.getChildAt(3).x = state.player4.position.x;
    group.getChildAt(3).y = state.player4.position.y;
    group.getChildAt(3).destination.x = state.player4.destination.x;
    group.getChildAt(3).destination.y = state.player4.destination.y;
    group.getChildAt(3).speed = state.player4.speed;

    // player 5
    group.getChildAt(4).x = state.player5.position.x;
    group.getChildAt(4).y = state.player5.position.y;
    group.getChildAt(4).destination.x = state.player5.destination.x;
    group.getChildAt(4).destination.y = state.player5.destination.y;
    group.getChildAt(4).speed = state.player5.speed;

    // player 6
    group.getChildAt(5).x = state.player6.position.x;
    group.getChildAt(5).y = state.player6.position.y;
    group.getChildAt(5).destination.x = state.player6.destination.x;
    group.getChildAt(5).destination.y = state.player6.destination.y;
    group.getChildAt(5).speed = state.player6.speed;

    // player 7
    group.getChildAt(6).x = state.player7.position.x;
    group.getChildAt(6).y = state.player7.position.y;
    group.getChildAt(6).destination.x = state.player7.destination.x;
    group.getChildAt(6).destination.y = state.player7.destination.y;
    group.getChildAt(6).speed = state.player7.speed;

    // player 8
    group.getChildAt(7).x = state.player8.position.x;
    group.getChildAt(7).y = state.player8.position.y;
    group.getChildAt(7).destination.x = state.player8.destination.x;
    group.getChildAt(7).destination.y = state.player8.destination.y;
    group.getChildAt(7).speed = state.player8.speed;

    // player 9
    group.getChildAt(8).x = state.player9.position.x;
    group.getChildAt(8).y = state.player9.position.y;
    group.getChildAt(8).destination.x = state.player9.destination.x;
    group.getChildAt(8).destination.y = state.player9.destination.y;
    group.getChildAt(8).speed = state.player9.speed;

    // player 10
    group.getChildAt(9).x = state.player10.position.x;
    group.getChildAt(9).y = state.player10.position.y;
    group.getChildAt(9).destination.x = state.player10.destination.x;
    group.getChildAt(9).destination.y = state.player10.destination.y;
    group.getChildAt(9).speed = state.player10.speed;
	
	
	 // player 11
    group.getChildAt(10).x = state.player11.position.x;
    group.getChildAt(10).y = state.player11.position.y;
    group.getChildAt(10).destination.x = state.player11.destination.x;
    group.getChildAt(10).destination.y = state.player11.destination.y;
    group.getChildAt(10).speed = state.player11.speed;
	
	
	 // player 12
    group.getChildAt(11).x = state.player12.position.x;
    group.getChildAt(11).y = state.player12.position.y;
    group.getChildAt(11).destination.x = state.player12.destination.x;
    group.getChildAt(11).destination.y = state.player12.destination.y;
    group.getChildAt(11).speed = state.player12.speed;

	
	 // player 13
    group.getChildAt(12).x = state.player13.position.x;
    group.getChildAt(12).y = state.player13.position.y;
    group.getChildAt(12).destination.x = state.player13.destination.x;
    group.getChildAt(12).destination.y = state.player13.destination.y;
    group.getChildAt(12).speed = state.player13.speed;
	
	 // player 14
    group.getChildAt(13).x = state.player14.position.x;
    group.getChildAt(13).y = state.player14.position.y;
    group.getChildAt(13).destination.x = state.player14.destination.x;
    group.getChildAt(13).destination.y = state.player14.destination.y;
    group.getChildAt(13).speed = state.player14.speed;
	
	 // player 15
    group.getChildAt(14).x = state.player15.position.x;
    group.getChildAt(14).y = state.player15.position.y;
    group.getChildAt(14).y = state.player15.position.y;
    group.getChildAt(14).destination.x = state.player15.destination.x;
    group.getChildAt(14).destination.y = state.player15.destination.y;
    group.getChildAt(14).speed = state.player15.speed;
	
}
*/
