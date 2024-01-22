const canvas = document.querySelector("#canvas");
const canvasContext = canvas.getContext("2d");
canvasContext.imageSmoothingEnabled = false;



// const canvas2 = document.querySelector("#backgroundCanvas");
// const canvasContext2 = canvas.getContext("2d");
// canvasContext.imageSmoothingEnabled = false;

// canvasContext.translate(-200,0);


let canvasBoundaries = {
    "getTopBoundary": () => {
        return 0;
    },
    "getLeftBoundary": () => {
        return 0;
    },
    "getBottomBoundary": () => {
        return canvas.height;
    },
    "getRightBoundary": () => {
        return canvas.width;
    }
}

export {canvas, canvasBoundaries, canvasContext,}