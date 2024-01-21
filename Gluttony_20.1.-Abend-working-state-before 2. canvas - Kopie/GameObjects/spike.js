import { GameObject } from "./gameObject.js";
import { canvasContext } from "../GameLayers/canvasLayer.js";
import { Grass } from "./grass.js"
import {PlayerFigure} from "./playerFigure.js";
import {gameOver, changeSound} from "../script.js";

;
class Spike extends Grass {

    onCollision = (otherObject) => {
        if (otherObject instanceof PlayerFigure) {
            changeSound('./Audio/spike.mp3')
            gameOver()
        }
    }


    
}

export {Spike}