import {GameObject} from "./gameObject.js";
import { canvasContext } from "../GameLayers/canvasLayer.js";
import { keyEventDown } from "../script.js";
import { PlayerFigure } from "./playerFigure.js";

class Obstacle extends GameObject
{

    classname = 'Obstacle'

    draw = () => {
        
            canvasContext.fillStyle = "#660000";
            canvasContext.fillRect(this.position.x, this.position.y, this.dimensions.width, this.dimensions.height);
        

    }

    onCollision = (otherObject) => {

        
                    // otherObject.velovityY = 0

                    if (otherObject instanceof PlayerFigure)
                   otherObject.restorePreviousPosition(this);
                //    otherObject.isColliding = true
                                   //    this.restorePreviousPosition()
       
    }

}

export {Obstacle}



