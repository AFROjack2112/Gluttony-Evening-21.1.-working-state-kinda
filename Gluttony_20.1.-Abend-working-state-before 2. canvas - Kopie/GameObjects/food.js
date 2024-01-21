import {GameObject} from "./gameObject.js";
import { canvasContext } from "../GameLayers/canvasLayer.js";
import { hungerBar } from "../script.js";
class Food extends GameObject {



    constructor(x, y, width, height, imagePath) {
        super(x, y, width, height);
        this.imageObject = new Image();
        this.imageObject.src = imagePath;
    }

    // draw = () => {
    //     canvasContext.fillStyle = "#660000";
    //     canvasContext.fillRect(this.position.x, this.position.y, this.dimensions.width, this.dimensions.height);
    // }

    draw = () => {
        canvasContext.drawImage(this.imageObject, this.position.x, this.position.y, this.dimensions.width, this.dimensions.height);        
    }

    onCollision = () => {
        this.active = false
        hungerBar.getHungrier(10)
    
    }

}

export {Food}