import { GameObject } from "./gameObject.js";
import { canvasContext } from "../GameLayers/canvasLayer.js";
import { Tile } from "./tile.js"
import {PlayerFigure} from "./playerFigure.js";
import {gameOver, changeSound} from "../script.js";








// middleTile = './images/grasstiles/grass.png'
// middleTile = './images/grasstiles/grass.png'


// new Tile(350, 150,50, 60, "./images/grasstiles/vgrass.png", "./images/grasstiles/vgrassbottom.png","./images/grasstiles/vgrasstop.png", 0,7)


class Grass extends Tile {

    //preload horizontal tileimages
middleTileImage = new Image();
startTileImage = new Image();
endTileImage = new Image();
vmiddleTileImage = new Image();
vstartTileImage = new Image();
vendTileImage = new Image();





settile = ()=>{
    this.middleTileImage.src = './images/grasstiles/grass.png';
    this.startTileImage.src = './images/grasstiles/grassleft.png';
    this.endTileImage.src = './images/grasstiles/grassright.png';
    this.vmiddleTileImage.src = './images/grasstiles/grass.png';
    this.vstartTileImage.src = './images/grasstiles/grassleft.png';
    this.vendTileImage.src = './images/grasstiles/grassright.png';
    console.log('ajhdsakjhdkjasdkjhhhhhhhhhhhhhhhhhhhhhhhhh')
}


//preload vertical tile images


    constructor(x, y, width, height, tilenumber, verticaltilenumber) {
        super(x, y, width, height, tilenumber, verticaltilenumber);

        this.tilenumber = tilenumber
        this.verticaltilenumber = verticaltilenumber

        this.tilewidth = this.dimensions.width
        this.tileheight = this.dimensions.height
        this.settile()

        //change collision width for number of tiles
        //set images if vertical tilenumber not 0
        if(tilenumber !==0){        
            this.dimensions.width += (tilenumber-1) * this.dimensions.width

        }else{        
            this.dimensions.height += (verticaltilenumber-1) * this.dimensions.height
            this.middleTileImage = vmiddleTileImage
            this.startTileImage = vstartTileImage
            this.endTileImage = vendTileImage
        }

    }


    draw = () => {
        console.log(this.tilenumber)
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