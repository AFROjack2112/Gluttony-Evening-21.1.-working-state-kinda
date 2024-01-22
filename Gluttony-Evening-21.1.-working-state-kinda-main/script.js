import {canvas} from "./GameLayers/canvasLayer.js";
import {gameLoop} from "./GameLayers/coreLayer.js";
import {Obstacle} from "./GameObjects/obstacle.js";
import {PlayerFigure} from "./GameObjects/playerFigure.js";
import { HungerBar } from "./GameObjects/hungerBar.js";
import { Food } from "./GameObjects/food.js";
import { Floor} from "./GameObjects/floor.js";
import { doubleJumpPickUp } from "./GameObjects/doubleJump.js";
import { Tile } from "./GameObjects/tile.js";
import  {FlyingObstacle} from "./GameObjects/flyingObstacle.js";
import {Spike} from "./GameObjects/spike.js";
import { Grass } from "./GameObjects/grass.js";


let camera = {
    x: 0,
	y: 0,
	backgroundX: 0,
	backgroundY : 0,
}












function getMousePos(evt) {
	console.log(evt)
    var rect = canvas.getBoundingClientRect();
    let coordinates =  {
        x: ((evt.clientX - rect.left) / (rect.right - rect.left) * canvas.width) + camera.x,
        y: (evt.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height + camera.y
    };

	console.log('coordinates X =        ' + coordinates.x)
	console.log('coordinates Y =        ' + coordinates.y)}


window.addEventListener("click", getMousePos)

//Find mous position https://stackoverflow.com/questions/17130395/real-mouse-position-in-canvas

//Flying chillis or obstacle thingies that end the game

new FlyingObstacle(1000, 100, 50, 20, "./images/flyingObstacles/carrot.png", 1000, 0, 5)
new FlyingObstacle(1200, 100, 50, 20, "./images/flyingObstacles/salad.png", 1000, 0, 5)
new FlyingObstacle(1400, 100, 50, 20, "./images/flyingObstacles/watermelon.png", 1000, 0, 5)
new FlyingObstacle(1600, 100, 50, 20, "./images/flyingObstacles/banana.png", 1000, 0, 5)




//note to self - never draw 1 tile always minimum 2 - also make 3 deperate classes and but images in allready - easyier for building

// new Grass(238, 388,25, 30, "./images/grasstiles/grass.png", "./images/grasstiles/grassleft.png","./images/grasstiles/grassright.png", 5,0);
new Tile(238, 388,25, 30, 5,0, 'cloud');

new Tile(100, 250, 25, 30, 3,0, 'stone');
new Tile(100, 250, 25, 30, 3,0, 'grass');


// new Obstacle(100, 250, 25, 30,)
// new Grass(600, 250, 25, 30, "./images/grasstiles/vgrass.png", "./images/grasstiles/vgrassbottom.png","./images/grasstiles/vgrasstop.png", 0,3);


//new Grass(350, 150,25, 30, "./images/stonetiles/vstone.png", "./images/stonetiles/vstonebottom.png","./images/stonetiles/vstonetop.png", 0,7)


//Spikes
new Spike(170, 200,25, 30, 5,0, 'spike');




//going high 
new Obstacle(150, 20, 153, 14);
new Obstacle(500, 20, 153, 14);


//top first level

new Tile(150, -300, 25, 30, 3,0, 'stone');
//top second level
new Tile(150, -1100, 25, 30, 3,0, 'stone');


//top 3rd level
new Tile(150, -1900, 25, 30, 3,0, 'stone');


new Obstacle(450, 388, 153, 14);
new Food(400, 300, 20 , 20, "./images/creampuff.png" ) 
new Food(700, 400,20,20, "./images/creampuff.png")
new Food(900, 400,20,20, "./images/creampuff.png")

new Food(200, 400,20,20, "./images/creampuff.png")

//doublejumps
new doubleJumpPickUp(50, 150,20, 20, "./images/doublejump2.png") 
new doubleJumpPickUp(100, 110,20, 20, "./images/doublejump2.png") 

new doubleJumpPickUp(100, 0,20, 20, "./images/doublejump2.png") 
new doubleJumpPickUp(170, -100,20, 20, "./images/doublejump2.png") 
new doubleJumpPickUp(100, -200,20, 20, "./images/doublejump2.png") 
new doubleJumpPickUp(100, -300,20, 20, "./images/doublejump2.png") 
new doubleJumpPickUp(100, -400,20, 20, "./images/doublejump2.png") 
new doubleJumpPickUp(100, -500,20, 20, "./images/doublejump2.png") 
new doubleJumpPickUp(100, -600,20, 20, "./images/doublejump2.png") 
new doubleJumpPickUp(100, -700,20, 20, "./images/doublejump2.png") 
new doubleJumpPickUp(100, -800,20, 20, "./images/doublejump2.png") 
new doubleJumpPickUp(100, -900,20, 20, "./images/doublejump2.png") 
new doubleJumpPickUp(100, -1000,20, 20, "./images/doublejump2.png") 
new doubleJumpPickUp(100, -1100,20, 20, "./images/doublejump2.png") 
new doubleJumpPickUp(100, -1200,20, 20, "./images/doublejump2.png") 
new doubleJumpPickUp(100, -1300,20, 20, "./images/doublejump2.png") 
new doubleJumpPickUp(100, -1400,20, 20, "./images/doublejump2.png") 
new doubleJumpPickUp(100, -1500,20, 20, "./images/doublejump2.png") 
new doubleJumpPickUp(100, -1600,20, 20, "./images/doublejump2.png") 
new doubleJumpPickUp(100, -1700,20, 20, "./images/doublejump2.png") 
new doubleJumpPickUp(100, -1800,20, 20, "./images/doublejump2.png") 
new doubleJumpPickUp(100, -1900,20, 20, "./images/doublejump2.png") 
new doubleJumpPickUp(100, -2000,20, 20, "./images/doublejump2.png") 
new doubleJumpPickUp(100, -1200,20, 20, "./images/doublejump2.png") 
new doubleJumpPickUp(100, -1000,20, 20, "./images/doublejump2.png") 
new doubleJumpPickUp(100, -1100,20, 20, "./images/doublejump2.png") 
new doubleJumpPickUp(100, -1200,20, 20, "./images/doublejump2.png") 
new doubleJumpPickUp(100, -1000,20, 20, "./images/doublejump2.png") 
new doubleJumpPickUp(100, -1100,20, 20, "./images/doublejump2.png") 
new doubleJumpPickUp(100, -1200,20, 20, "./images/doublejump2.png") 
new doubleJumpPickUp(100, -1000,20, 20, "./images/doublejump2.png") 
new doubleJumpPickUp(100, -1100,20, 20, "./images/doublejump2.png") 
new doubleJumpPickUp(100, -1200,20, 20, "./images/doublejump2.png") 






new Tile(450, 0,50, 60, 0,7, 'stone')
//floor stone long
new Tile(0, 480, 25, 30, 100,0, 'stone');

// new Obstacle(500, 457, 1000, 43);


// let floor = new Floor(0,500, 2000,1)

//Left levelBoundary
new Tile(0,0, 25,30, 0, 20, 'stone')

//Load PLayerfigure last

let playerFigureObject = new PlayerFigure(50, 350, 64, 64, "./images/BODY_Charlie_test2.png", 4, 1);
//the following function call is not covered in the videos.
//it enables you to add offsets to the boundary offets,
//so if sprites have transparent border, that transparent border
//can be "ignored" for collision detection. You just have
//to set the four right values for the offsets from each site:
//[GameObject].setBoundaryOffsets(topOffset, leftOffset, bottomOffset, rightOffset)
playerFigureObject.setBoundaryOffsets(5,20,2,20);
// new Obstacle(0, 457, 2000, 43);





let hungerBar = new HungerBar(20,10,40, 100, "./images/hungerbar.png", "./images/hungerbarframe.png")



// let keyUphappened = true

function keyEventDown(eventInformation) {
	// keyUphappened = false

	
	switch (eventInformation.key) {
		// case "w":
		// 	playerFigureObject.moveBy.left = 0;
		// 	playerFigureObject.moveBy.top = -2;
		// 	playerFigureObject.startAnimation(0,8);
		// 	break;
		case "a":
			playerFigureObject.moveBy.left = -5;
			playerFigureObject.moveBy.top = 0;
			// playerFigureObject.startAnimation(9,17);
			playerFigureObject.slideDuration = 0
			break;
		// case "s":
		// 	playerFigureObject.moveBy.left = 0;
		// 	playerFigureObject.moveBy.top = 2;
		// 	playerFigureObject.startAnimation(18,26);
		// 	break;
		case "d":
			playerFigureObject.moveBy.left = 5;
			playerFigureObject.moveBy.top = 0;
			// playerFigureObject.startAnimation(28,35);
			playerFigureObject.slideDuration = 0

			break;
		case  " ":
			playerFigureObject.jump()
			// playerFigureObject.startAnimation(0,0);


			break;
	}
}

function stopMovement() {
	playerFigureObject.isMoving = false;
	playerFigureObject.moveBy.left = 0;
	playerFigureObject.moveBy.top = 0;
}
function keyEventUp(eventInformation) {
	// keyUphappened = true

	switch (eventInformation.key) {
		// case "w":
		// 	stopMovement();
		// 	playerFigureObject.startAnimation(0,0);
		// 	break;
		case "a":
			playerFigureObject.moveBy.left += 5;
			playerFigureObject.slideDuration = 50
			playerFigureObject.startAnimation(9,9);
			break;
		// case "s":
		// 	stopMovement();
		// 	playerFigureObject.startAnimation(18,18);
		// 	break;
		case "d":
			playerFigureObject.slideDuration = 50
			playerFigureObject.moveBy.left += -5;


			playerFigureObject.startAnimation(27,27);
			break;
	}
}



// addEventListener("keypress", function(event){
// 	if(keyUphappened)keyEventDown(event)})

let myRequest = {
	currentRequest: 0,
	stopRequest: false,
}

window.addEventListener("keypress", keyEventDown)
window.addEventListener("keyup", keyEventUp);



let hungryInterval;

function startGame(){

	hungryInterval = setInterval(function(){hungerBar.getHungrier(0)},50)
	changeSound('./Audio/jazzmusic.mp3')

	document.querySelector('#startScreen').style.display = "none"

	document.querySelector('canvas').style.display = "block"
	// document.querySelector('#backgroundImage').style.display = "block"
	document.querySelector('#gameOver').style.display = "none"


	myRequest.stopRequest = false

	myRequest.currentRequest = window.requestAnimationFrame(gameLoop)
}





function gameOver(){
	window.cancelAnimationFrame(myRequest.currentRequest)
	setTimeout(function () {document.querySelector('#gameOver').style.display = "block"}, 500)

	myRequest.stopRequest = true

	clearInterval(hungryInterval)
	console.log('sajkhakjdshjkhkjhjhkjssssssssssssssssssssssss')
}


let startScreen = document.getElementById("startScreen")
let endScreen = document.getElementById("gameOver")

//start game with eventlistener
startScreen.addEventListener("click", startGame);
endScreen.addEventListener("click", function (e){
	location.reload()
});


let currSound = new Audio

let jumpSound = new Audio
jumpSound.src = './Audio/jump.mp3'



//function change the sound and play it




function changeSound(soundSrc){
	currSound = new Audio(soundSrc);
	currSound.play();
	// eval("jumpSound").play

	//https://stackoverflow.com/questions/46836692/delay-in-javascript-audio-playback

}


//changeSound('./audio/draw.mp3')







export{keyEventDown, hungerBar, camera, gameOver, myRequest, changeSound}

