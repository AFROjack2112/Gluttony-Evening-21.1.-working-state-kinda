import {canvas, canvasContext} from "./canvasLayer.js";
import { PlayerFigure } from "../GameObjects/playerFigure.js";
import {applyPhysics} from "../physics.js"
import { camera } from "../script.js";
import {myRequest} from "../script.js"
import { animateBackgroundCanvas } from "../GameObjects/backgroundCanvas.js"; 




let gameObjects = [];

function gameLoop() {

    
    console.log('ssssssssssssssssssssssssssssssssssssssssssssssssssssssss')
    canvasContext.clearRect(camera.x, camera.y, canvas.width, canvas.height);
    
    // animateBackgroundCanvas(camera.x, camera.y)


    //pann background image - refactor - load image somewhere else- crop image so that not the whole image has to be drwan every frame ...
    let imageObject = new Image();
    imageObject.src = './images/backgroundnew.png'
    canvasContext.drawImage(imageObject, camera.backgroundX, camera.backgroundY-imageObject.height+canvas.height, imageObject.width, imageObject.height);
    // canvasContext.drawImage(imageObject, camera.backgroundX, imageObject.height - canvas.height + camera.backgroundY, canvas.width, canvas.height, camera.backgroundX, camera.backgroundY-imageObject.height+canvas.height, 2500, 1875); 
    // canvasContext.drawImage(imageObject, 0, imageObject.height -canvas.height, canvas.width, canvas.height, camera.backgroundX, camera.backgroundY+imageObject.height-canvas.height, imageObject.width, imageObject.height); 

    // canvasContext.drawImage(this.imageObject, 0, 0 + this.getHungrierTick , this.dimensions.width, this.dimensions.height  , this.position.x, this.position.y, this.dimensions.width, this.dimensions.height);        


    // console.log(camera.y)
         

    
    for (let gameLoopState = 0; gameLoopState < 5; gameLoopState++) {
        for (let singleGameObject of gameObjects) {
            if (singleGameObject.active === true) {
                if (gameLoopState === 0) {
                    singleGameObject.storeCurrentPosition();
                    // singleGameObject.storeCurrentMoveByPosition();

                    singleGameObject.update();
                    
                }
                else if (gameLoopState === 1) {
                    singleGameObject.checkForCollision();

                }
                else if (gameLoopState === 2) {
                    if (singleGameObject instanceof PlayerFigure) {
                        applyPhysics(singleGameObject);
                        // console.log('this previous' + singleGameObject.previousPosition.y)

                        // console.log(singleGameObject.position.y)

                    }
                }
                
                
                else if (gameLoopState === 4) {

                    singleGameObject.draw();
                    canvasContext.fillStyle = "green";
// canvasContext.fillRect(0, 457 ,1000, 10);

                    if (singleGameObject instanceof PlayerFigure){
                        // console.log(singleGameObject.currentAnimation.currentSprite)
                    }
                }
            }
        }
    }

      

    if(myRequest.stopRequest === false)
    myRequest.currentRequest = requestAnimationFrame(gameLoop);
}

export {gameObjects, gameLoop}


// else if (gameLoopState === 2) {
                //     if (singleGameObject.gravityAttributes.useGravity === true) {
                //         applyGravityForces(singleGameObject);
                //     }
                // }
                // else if (gameLoopState === 3) {
                //     if (singleGameObject.gravityAttributes.useGravity === true) {
                //         let shouldBeStopped = checkForStoppingObjects(singleGameObject);
                //         if (shouldBeStopped) {
                //             stopObject(singleGameObject);
                //         }
                //     }
                // }