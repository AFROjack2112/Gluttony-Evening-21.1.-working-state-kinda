import { GameObject } from "./gameObject.js";
import { canvasContext } from "../GameLayers/canvasLayer.js";
import { Obstacle } from "./obstacle.js"

;
class Tile extends Obstacle {

middleTileImage = new Image();
startTileImage = new Image();
endTileImage = new Image();
vmiddleTileImage = new Image();
vstartTileImage = new Image();
vendTileImage = new Image();





setTileImage = (tileStyle)=>{
    if (tileStyle === 'grass'){
        this.middleTileImage.src = './images/grasstiles/grass.png';
        this.startTileImage.src = './images/grasstiles/grassleft.png';
        this.endTileImage.src = './images/grasstiles/grassright.png';
        this.vmiddleTileImage.src = './images/grasstiles/vgrass.png';
        this.vstartTileImage.src = './images/grasstiles/vgrasstop.png';
        this.vendTileImage.src = './images/grasstiles/vgrassbottom.png';}
    else if (tileStyle === 'stone'){
        this.middleTileImage.src = './images/stonetiles/stone.png';
        this.startTileImage.src = './images/stonetiles/stoneleft.png';
        this.endTileImage.src = './images/stonetiles/stoneright.png';
        this.vmiddleTileImage.src = './images/stonetiles/vstone.png';
        this.vstartTileImage.src = './images/stonetiles/vstonetop.png';
        this.vendTileImage.src = './images/stonetiles/vstonebottom.png';}
    else if (tileStyle === 'cloud'){
        this.middleTileImage.src = './images/cloudtiles/cloud.png';
        this.startTileImage.src = './images/cloudtiles/cloudleft.png';
        this.endTileImage.src = './images/cloudtiles/cloudright.png';
        this.vmiddleTileImage.src = './images/cloudtiles/vcloud.png';
        this.vstartTileImage.src = './images/cloudtiles/vcloudtop.png';
        this.vendTileImage.src = './images/cloudtiles/vcloudbottom.png';}
    else if (tileStyle === 'spike'){
        this.middleTileImage.src = './images/spiketiles/spike.png';
        this.startTileImage.src = './images/spiketiles/spikeleft.png';
        this.endTileImage.src = './images/spiketiles/spikeright.png';
        this.vmiddleTileImage.src = './images/spiketiles/spike.png';
        this.vstartTileImage.src = './images/spiketiles/spikeleft.png';
        this.vendTileImage.src = './images/spiketiles/spikeright.png';}
        
}

    constructor(x, y, width, height, tilenumber, verticaltilenumber, tileStyle) {
        super(x, y, width, height);
        this.setTileImage(tileStyle)
        this.tilenumber = tilenumber
        this.verticaltilenumber = verticaltilenumber

        this.tilewidth = this.dimensions.width
        this.tileheight = this.dimensions.height


        if(tilenumber !==0){        
            this.dimensions.width += (tilenumber-1) * this.dimensions.width
        }else{        
            this.dimensions.height += (verticaltilenumber-1) * this.dimensions.height
            this.middleTileImage = this.vmiddleTileImage
            this.startTileImage = this.vstartTileImage
            this.endTileImage = this.vendTileImage        }

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
        canvasContext.drawImage(this.startTileImage, this.position.x, this.position.y, this.tilewidth, this.tileheight); 
        let currentTile = 1
        let i = 0
       
        //draw all midtiles
        while (this.verticaltilenumber > currentTile+1){
            canvasContext.drawImage(this.middleTileImage, this.position.x, this.position.y + this.tileheight * currentTile, this.tilewidth, this.tileheight);        
            currentTile++
        }
        //set top/endtile
        canvasContext.drawImage(this.endTileImage, this.position.x , this.position.y + this.tileheight * currentTile, this.tilewidth, this.tileheight);       

    }}


    
}

export {Tile}