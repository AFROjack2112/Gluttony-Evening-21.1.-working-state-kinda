import {GameObject} from "./gameObject.js";
import { canvasContext } from "../GameLayers/canvasLayer.js";
import {changeSound, gameOver, keyEventDown} from "../script.js";
import { camera } from "../script.js";

class HungerBar extends GameObject
{
    getHungrierTick = 10;
    
    // draw = () => {
            
    //         canvasContext.fillStyle = "green";
    //         canvasContext.fillRect(this.position.x, this.position.y, this.dimensions.width, this.dimensions.height - this.currentHungerSubtrahend);


        

    // }

    constructor(x, y, width, height, imagePath, imagePath2) {
        super(x, y, width, height);
        this.imageObject = new Image();
        this.imageObject.src = imagePath;
        this.imageObject2 = new Image()
        this.imageObject2.src = imagePath2;


        
    } 


    //here the cameraposition is updated in draw, because we acces the thisgethungriertick not via the gameloop but a setintervall
    //this can otherwise cause a unwanted shift in the y axis of hungerbar when it is drawn before updfated 

    draw = () => {
        this.position.x = camera.x+ 20         
        this.position.y = camera.y+ 10    + this.getHungrierTick 
        canvasContext.drawImage(this.imageObject, 0, 0 + this.getHungrierTick , this.dimensions.width, this.dimensions.height  , this.position.x, this.position.y, this.dimensions.width, this.dimensions.height);        
        canvasContext.drawImage(this.imageObject2, 0, 0, this.dimensions.width+4, this.dimensions.height +4  , this.position.x-2, this.position.y-2 -this.getHungrierTick, this.dimensions.width+4, this.dimensions.height+4);        

    }

    update = () => {
            


    }
    
    
    getHungrier = (increaseValue) => {
        this.getHungrierTick -= increaseValue
        this.getHungrierTick +=0.4
        if (this.getHungrierTick >= 100){
            changeSound('./Audio/starve.mp3')

            gameOver()
            this.getHungrierTick = 0
        }       


    }

     

   
}

export {HungerBar}