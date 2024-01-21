import { canvasContext } from "../GameLayers/canvasLayer.js";
import { gameObjects } from "../GameLayers/coreLayer.js";
import { PlayerFigure } from "./playerFigure.js";

class GameObject {

  


    active = true;


    isColliding = true

    position = {
        "x": 0,
        "y": 0,
    }

    previousPosition = {
        "x": 0,
        "y": 0
    }


    dimensions = {
        "width": 0,
        "height": 0
    }

    boundaries = {
        "getTopBoundary": () => {
            return this.position.y + this.boundaryOffsets.top;
        },
        "getLeftBoundary": () => {
            return this.position.x + this.boundaryOffsets.left;
        },
        "getBottomBoundary": () => {
            return this.position.y + this.dimensions.height - this.boundaryOffsets.bottom;
        },
        "getRightBoundary": () => {
            return this.position.x + this.dimensions.width - this.boundaryOffsets.right;
        }
    }

    boundaryOffsets = {
        "top": 0,
        "left": 0,
        "bottom": 0,
        "right": 0,
    }

    constructor(x, y, width, height) {
        this.position.x = x;
        this.position.y = y;
        this.previousPosition.x = x;
        this.previousPosition.y = y;
        this.dimensions.width = width;
        this.dimensions.height = height;
        this.gameObjectIndex = gameObjects.length;
        gameObjects.push(this);

    }

    storeCurrentPosition = () => {
        //backup most recent position
        this.previousPosition.x = this.position.x;
        this.previousPosition.y = this.position.y;

    }

    restorePreviousPosition = (otherObject) => {

        //https://spicyyoghurt.com/tutorials/html5-javascript-game-development/collision-detection-physics direction of collision detection
        //https://stackoverflow.com/questions/29861096/detect-which-side-of-a-rectangle-is-colliding-with-another-rectangle
        //here 1.9 because for some reason the position is shifted idk wtf is happening + 40 at the end cause fkcin hell else when walljumping you just clip up all the time couldnt find a bettert way for collision detection

        if (this.boundaries.getBottomBoundary() >= otherObject.boundaries.getTopBoundary() && this.boundaries.getTopBoundary() < otherObject.boundaries.getTopBoundary() && (otherObject.boundaries.getTopBoundary() - this.boundaries.getTopBoundary()) > 40) {
            this.position.y = otherObject.position.y - this.dimensions.height + 1.9;
            this.velocityY = 0



        }

        else {
            this.position.y = this.previousPosition.y;
        }



        // this worksd great for detecting only dropping on floor but gets stuck when left/right and bottom a collsion happens

        // let previousBottomBoundaries = this.previousPosition.y + this.dimensions.height - this.boundaryOffsets.bottom

        // if (this.boundaries.getBottomBoundary() >= otherObject.boundaries.getTopBoundary() &&
        //     previousBottomBoundaries < otherObject.boundaries.getTopBoundary()) {
        //     this.position.y = otherObject.position.y - this.dimensions.height + 1.9;
        //     this.velocityY = 0
        //     // Collision from the top
        // } 
        // else {
        //         this.position.y = this.previousPosition.y;
        //     }
       

        this.position.x = this.previousPosition.x;
        // this.position.y = this.previousPosition.y;

        // var dx = (this.position.x + this.dimensions.width / 2) - (otherObject.position.x + otherObject.dimensions.width / 2);
        // var dy = (this.position.y + this.dimensions.height / 2) - (otherObject.position.y + otherObject.dimensions.height / 2);
        // var width = (this.dimensions.width + otherObject.dimensions.width) / 2;
        // var height = (this.dimensions.height + otherObject.dimensions.height) / 2;
        // var crossWidth = width * dy;
        // var crossHeight = height * dx;
        // var collision = 'none';

        // if(Math.abs(dx) <= width && Math.abs(dy) <= height){
        //     if(crossWidth > crossHeight){
        //         collision = (crossWidth > (-crossHeight)) ? 'top' : 'right';
        //     } else {
        //         collision = (crossWidth > -(crossHeight)) ? 'left' : 'bottom';
        //     }
        // }
        // if(collision !== 'top' && collision !== 'left' && collision !== 'right' ){
        //     this.position.y = otherObject.position.y - this.dimensions.height +1.9
        // }else {this.position.y = this.previousPosition.y}
        // console.log(collision)
    }



    update = () => {


    }

    draw = () => {
        canvasContext.fillStyle = "black";
        canvasContext.fillRect(this.position.x, this.position.y, this.dimensions.width, this.dimensions.height);
    }

    setBoundaryOffsets(top, left, bottom, right) {
        this.boundaryOffsets.top = top;
        this.boundaryOffsets.left = left;
        this.boundaryOffsets.bottom = bottom;
        this.boundaryOffsets.right = right;
    }

    onCollision = () => {

    }


    checkForCollision = () => {
        for (let i = this.gameObjectIndex + 1; i < gameObjects.length; i++) {
            let checkObject = gameObjects[i];
            //overlap on x axis
            if (checkObject.active === false)
                continue;
            if (this.boundaries.getLeftBoundary() <= checkObject.boundaries.getRightBoundary() &&
                this.boundaries.getRightBoundary() >= checkObject.boundaries.getLeftBoundary())
            //links kleiner als rechts
            //rechts größer als links
            {

                //overlap on y axis
                if (this.boundaries.getTopBoundary() <= checkObject.boundaries.getBottomBoundary() &&
                    this.boundaries.getBottomBoundary() >= checkObject.boundaries.getTopBoundary()) {
                    // console.log((this.boundaries.getLeftBoundary()- checkObject.boundaries.getRightBoundary()))



                    //I am colliding with something
                    this.onCollision(checkObject);
                    checkObject.onCollision(this);
                }
            }
        }
    }
    // isCollidingWithObject = (checkObject) => {
    //     if(this.boundaries.getLeftBoundary() <= checkObject.boundaries.getRightBoundary() &&
    //         this.boundaries.getRightBoundary() >= checkObject.boundaries.getLeftBoundary())
    //     {
    //         //overlap on y axis
    //         if(this.boundaries.getTopBoundary() <= checkObject.boundaries.getBottomBoundary() &&
    //             this.boundaries.getBottomBoundary() >= checkObject.boundaries.getTopBoundary())
    //         {
    //             return true;
    //         }
    //     }
    // }
}

export { GameObject }