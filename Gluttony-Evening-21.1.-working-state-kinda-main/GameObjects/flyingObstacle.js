import {GameObject} from "./gameObject.js";
import {canvasContext} from "../GameLayers/canvasLayer.js";
import {Obstacle} from "./obstacle.js";
import {changeSound, gameOver} from "../script.js";
import {PlayerFigure} from "./playerFigure.js";


class FlyingObstacle extends GameObject {
    constructor(x, y, width, height, imageSrc, restoreposition, endposition, movementspeed) {
        super(x, y, width, height);
        this.restoreposition = restoreposition
        this.endposition = endposition
        this.movementspeed = movementspeed
        this.image = new Image();
        this.image.src = imageSrc;

    }

    //Note: here restoreposition differs from x startposition, so we can controll the intervals between the objects if we want to make a line of flying objects

    update = () => {
        this.position.x -= this.movementspeed;
        if (this.position.x + this.dimensions.width < this.endposition) {
        this.position.x =  this.restoreposition   }

    }

    onCollision = (otherObject) => {

        if (otherObject instanceof PlayerFigure){
            changeSound('./Audio/spike.mp3')
            console.log('reeeeeeeeeeeeeeeeeeeeeeeeeeee')
            gameOver()

//        console.log('end game hereeeeeeeeeeeeeeeeeeeeeeee')
    }

        //endgame

    }

    draw = () => {
        canvasContext.drawImage(this.image, this.position.x, this.position.y, this.dimensions.width, this.dimensions.height);

        // canvasContext.fillStyle = "#660000";
        // canvasContext.fillRect(this.position.x, this.position.y, this.dimensions.width, this.dimensions.height);


    }
}


export {FlyingObstacle}