import { canvasContext } from "../GameLayers/canvasLayer.js";
import { ImageObject } from "./imageObject.js";
import { gameObjects } from "../GameLayers/coreLayer.js";
import { HungerBar } from "./hungerBar.js";
import {changeSound, floor} from "../script.js";
import { levelBoundaryLeft, camera} from "../script.js";

let onground = false
class PlayerFigure extends ImageObject {

//     draw = () => {
        
//         canvasContext.fillStyle = "green";
//         canvasContext.fillRect(this.position.x, this.position.y, this.dimensions.width, this.dimensions.height);
    

// }


    jumping = false;
    velocityY = 0;

    lastCollisionObstacle = []

    friction = 0.9;
    slideDuration = 0

    moveBy = {
        "left": 0,
        "top": 0
    }

    previousMoveBy = {
        x: 1,
        y: 1,
    }

    // checkWorldPosition = () => {
    //     if (this.boundaries.getBottomBoundary() <= canvasBoundaries.getTopBoundary()) {
    //         this.position.y = canvasBoundaries.getBottomBoundary();
    //     }
    //     else if (this.boundaries.getRightBoundary() <= canvasBoundaries.getLeftBoundary()) {
    //         this.position.x = canvasBoundaries.getRightBoundary();
    //     }
    //     else if (this.boundaries.getTopBoundary() >= canvasBoundaries.getBottomBoundary()) {
    //         this.position.y = canvasBoundaries.getTopBoundary() - this.dimensions.width;
    //     }
    //     else if (this.boundaries.getLeftBoundary() >= canvasBoundaries.getRightBoundary()) {
    //         this.position.x = canvasBoundaries.getLeftBoundary() - this.dimensions.height;
    //     }
    // }

    storeCurrentMoveByPosition = () => {

    this.previousMoveBy.x = this.moveBy.left;
    this.previousMoveBy.y = this.moveBy.top;}


    AdjustMoveBy = () => {
        if(this.moveBy.left > 5){
            this.moveBy.left = 5
        }
        else if (this.moveBy.left < -5){
            this.moveBy.left = -5
        }
    }

    update = () => {
        // console.log(this.slideDuration)

        // //checks now for player position and moves objects accordinglay to create moving canvas
        // if (this.moveBy.left > 5) this.moveBy.left = 5
        // if (this.moveBy.left < -5) this.moveBy.left = -5
        // // console.log(this.moveBy.left)

        // if(this.jumping === false && this.slideDuration > 0){
        //     // console.log(this.previousMoveBy.x)
        //     // console.log(this.friction)
        //     // this.previousMoveBy.x = this.previousMoveBy.x * this.friction
        //     this.moveBy.left = this.moveBy.left * this.friction
        //     this.slideDuration = this.slideDuration - 1
        //     // console.log(this.moveBy.left)
        // }
        //  if (this.slideDuration = 0) {
        //     console.log('it is 0')
            
        



        this.AdjustMoveBy()

        //camera translating ... 

        if (this.position.x > camera.x+400 && this.moveBy.left > 0) {
            canvasContext.translate(-this.moveBy.left,0)
            camera.x+=(this.moveBy.left)
            camera.backgroundX += (this.moveBy.left/3)

            }
        
        else if (this.position.x < (camera.x+150) && this.moveBy.left < 0 && this.position.x>150) {
            canvasContext.translate(-this.moveBy.left,0)
            camera.x+=(this.moveBy.left)
            camera.backgroundX += (this.moveBy.left/3)


        }        


        if (this.position.y < camera.y + 50 && this.velocityY < 0) {
            canvasContext.translate(0,-this.velocityY)
            camera.y+=(this.velocityY)
            camera.backgroundY+=(this.velocityY/1.5)


            }
        
        else if (this.position.y > (camera.y+300) && this. velocityY > 0 &&camera.y<0) {
            canvasContext.translate(0,-this.velocityY)
            camera.y+=(this.velocityY)
            camera.backgroundY+=(this.velocityY/1.5)

            if(camera.y > 0){
                canvasContext.translate(0,camera.y)
                camera.y=(0)
            }

        }    
            
            

        this.position.x += this.moveBy.left 


        this.position.y += this.velocityY
        

        if (this.jumping) {
            this.velocityY += 0.5; // Adjust this value as needed
        } 
        
        

        else if(this.stillColliding(this.lastCollisionObstacle[0]) && !this.jumping){
            this.velocityY = 0
            
        }
        
        else{  
            this.velocityY += 0.5
            this.lastCollisionObstacle = []
        }

       

        
    }



    onCollision = (otherObject) => {
        if (otherObject.classname === "Obstacle") {
            if((otherObject.position.y - 5)> this.position.y){  //Means is ground so set jumping to false - Also store other Object for function stillColliding
                this.jumping = false
                this.lastCollisionObstacle.unshift(otherObject)
                // this.position.y = otherObject.position.y - this.dimensions.height;

            }

            this.velocityY = 0
            

            //Walljumping/Sliding // if registered as on wall clear the lastCollisionObstacle array - so you cant keep walking in the air after sliding and your velocity actually increases agfain
            if(this.boundaries.getLeftBoundary() >= otherObject.boundaries.getRightBoundary() || this.boundaries.getRightBoundary() <= otherObject.boundaries.getLeftBoundary()){
                
                this.position.y += 1
                this.jumping = false
                this.lastCollisionObstacle = []
            }
            



            // if(this.slideDuration===0 && this.previousMoveBy.x !== 0)
            // this.slideDuration = 5
        }
        
    }


    stillColliding = (otherObject) => {
        if (otherObject === undefined){
            return false
        }
        else if(this.boundaries.getRightBoundary() >= otherObject.boundaries.getLeftBoundary() 
        && this.boundaries.getLeftBoundary() <= otherObject.boundaries.getRightBoundary()
        ){
            return true
        }
        

    }

    jump = () => {
        if (!this.jumping) {
            changeSound('./Audio/jump.mp3')
            this.lastCollisionObstacle = []
            this.jumping = true;
            this.velocityY = -12; // Adjust this value as needed
        }

    }

}


    

export { PlayerFigure }
