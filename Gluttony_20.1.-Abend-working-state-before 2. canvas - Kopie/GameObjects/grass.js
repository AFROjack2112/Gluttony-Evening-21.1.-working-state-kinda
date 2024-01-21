import { GameObject } from "./gameObject.js";
import { canvasContext } from "../GameLayers/canvasLayer.js";
import { Obstacle } from "./obstacle.js"

;
class Grass extends Obstacle {

    constructor(x, y, width, height, middleTile, startTile, endTile, tilenumber, verticaltilenumber) {
        super(x, y, width, height);
        this.middleTileImage = new Image();
        this.middleTileImage.src = middleTile;
        this.startTileImage = new Image();
        this.startTileImage.src = startTile;
        this.endTileImage = new Image();
        this.endTileImage.src = endTile;
        this.tilenumber = tilenumber
        this.verticaltilenumber = verticaltilenumber

        this.tilewidth = this.dimensions.width
        this.tileheight = this.dimensions.height


        if(tilenumber !==0){        
            this.dimensions.width += (tilenumber-1) * this.dimensions.width
        }else{        
            this.dimensions.height += (verticaltilenumber-1) * this.dimensions.height
        }

    }

    // draw = () => {
    //     canvasContext.fillStyle = "#660000";
    //     canvasContext.fillRect(this.position.x, this.position.y, this.dimensions.width, this.dimensions.height);
    // }

    draw = () => {
        if(this.verticaltilenumber === 0){
        //draw left tile
        canvasContext.drawImage(this.startTileImage, this.position.x, this.position.y, this.tilewidth, this.dimensions.height); 
        let currentTile = 1
        let i = 0
       
        //draw all midtiles
        while (this.tilenumber > currentTile+1){
            canvasContext.drawImage(this.middleTileImage, this.position.x + this.tilewidth * currentTile, this.position.y, this.tilewidth, this.tileheight);        
            currentTile++
        }
        //set right/endtile
        canvasContext.drawImage(this.endTileImage, this.position.x + this.tilewidth * currentTile, this.position.y, this.tilewidth, this.tileheight);        
    }

    else {
        //draw top tile
        canvasContext.drawImage(this.endTileImage, this.position.x, this.position.y, this.tilewidth, this.tileheight); 
        let currentTile = 1
        let i = 0
       
        //draw all midtiles
        while (this.verticaltilenumber > currentTile+1){
            canvasContext.drawImage(this.middleTileImage, this.position.x, this.position.y + this.tileheight * currentTile, this.tilewidth, this.tileheight);        
            currentTile++
        }
        //set top/endtile
        canvasContext.drawImage(this.startTileImage, this.position.x , this.position.y + this.tileheight * currentTile, this.tilewidth, this.tileheight);       

    }}


    
}

export {Grass}