import {GameObject} from "./gameObject.js";
import { canvasContext } from "../GameLayers/canvasLayer.js";
import { PlayerFigure } from "./playerFigure.js";
class doubleJumpPickUp extends GameObject {

    constructor(x, y, width, height, imagePath) {
        super(x, y, width, height);
        this.imageObject = new Image();
        this.imageObject.src = imagePath;
    }

   

    draw = () => {
        canvasContext.drawImage(this.imageObject, this.position.x, this.position.y, this.dimensions.width, this.dimensions.height);        
    }

    onCollision = (otherObject) => {
        if (otherObject instanceof PlayerFigure){
        this.active = false
        otherObject.jumping = false}
    
    }

}

export {doubleJumpPickUp}