const canvas2 = document.querySelector("#backgroundCanvas");
const canvasContext2 = canvas2.getContext("2d");
canvasContext2.imageSmoothingEnabled = false;

let imageObject = new Image();
    imageObject.src = './images/backgroundbig.jpeg'
    // canvasContext2.drawImage(imageObject, 0, 0, 2500, 1875);
    
    
function animateBackgroundCanvas(camerax, cameray){



    // canvasContext2.drawImage(imageObject, camerax, imageObject.height - canvas2.height + cameray, camerax, cameray);
    // canvasContext2.drawImage(imageObject, 0, 0, 2500, 1875); 

}

export {canvas2, canvasContext2, animateBackgroundCanvas}