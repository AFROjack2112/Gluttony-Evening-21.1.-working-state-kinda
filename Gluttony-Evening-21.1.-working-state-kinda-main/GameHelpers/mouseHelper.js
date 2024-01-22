import {canvas, canvasContext} from "../GameLayers/canvasLayer.js";

let recentMouseEvent =  0;
/*
    recentMouseEvent:
    0 == hover,
    1 == left down initial, 2 == middle down initial, 3 == right down initial,
    4 == left down held, 5 == middle up held, 6 == right up held,
    7 == left up, 8 == middle up, 9 == right up,
    10 == left click, 11 == middle click, 12 == right click,
    13 == focus lost
*/
let mouseCoordinates = {
    x: 0,
    y: 0
}
let scaleInformation = {
    "x": 1,
    "y": 1
};

function executeSetupWhenCanvasIsReady () {
    setTimeout(() => {
        if (canvasContext != null) {
            calculateCanvasScaling();
            canvas.addEventListener("resize", (eventInformation) => {
                calculateCanvasScaling();
            });
            canvas.addEventListener("mousedown",  (eventInformation) => {
                recentMouseEvent = eventInformation.button + 1;
                eventInformation.preventDefault();
            });
            canvas.addEventListener("mouseup",  (eventInformation) => {
                recentMouseEvent = eventInformation.button + 7;
                eventInformation.preventDefault();
            });
            canvas.addEventListener("click",  (eventInformation) => {
                eventInformation.preventDefault();
            });
            canvas.addEventListener("contextmenu",  (eventInformation) => {
                eventInformation.preventDefault();
            });
            canvas.addEventListener("mousemove",  (eventInformation) => {
                mouseCoordinates.x = eventInformation.offsetX * scaleInformation.x;
                mouseCoordinates.y = eventInformation.offsetY * scaleInformation.y;
            });
        }
        else {
            executeSetupWhenCanvasIsReady();
        }
    }, 500);
}

function calculateCanvasScaling() {
    scaleInformation.x = canvas.width / canvas.clientWidth;
    scaleInformation.y = canvas.height / canvas.clientHeight;
}

function checkObjectMouseEvent (gameObject) {
    let mouseEvent = recentMouseEvent;

    if(gameObject.boundaries.getLeftBoundary() <= mouseCoordinates.x &&
        gameObject.boundaries.getRightBoundary() >= mouseCoordinates.x) {
        if(gameObject.boundaries.getTopBoundary() <= mouseCoordinates.y &&
            gameObject.boundaries.getBottomBoundary() >= mouseCoordinates.y) {
            if (recentMouseEvent >= 1 && recentMouseEvent <= 3) {
                gameObject.hadMemorableMouseEvent = recentMouseEvent;
            }
            else if (recentMouseEvent === 7 || recentMouseEvent === 8 || recentMouseEvent === 9) {
                if (gameObject.hadMemorableMouseEvent > 0) {
                    mouseEvent += 3;
                    gameObject.hadMemorableMouseEvent = 0;
                }
            }
            else if (gameObject.hadMemorableMouseEvent != undefined && gameObject.hadMemorableMouseEvent > 0) {
                mouseEvent = gameObject.hadMemorableMouseEvent + 3;
            }
            else if (recentMouseEvent === 0 && (gameObject.hadMemorableMouseEvent == undefined || gameObject.hadMemorableMouseEvent == -1)) {
                gameObject.hadMemorableMouseEvent = 0;
            }
            gameObject.onMouseEvent(mouseEvent);
        }
        else {
            if (gameObject.hadMemorableMouseEvent != undefined && gameObject.hadMemorableMouseEvent > -1)
                gameObject.onMouseEvent(13);
            gameObject.hadMemorableMouseEvent = -1;
        }
    }
    else {
        if (gameObject.hadMemorableMouseEvent != undefined && gameObject.hadMemorableMouseEvent > -1)
            gameObject.onMouseEvent(13);
        gameObject.hadMemorableMouseEvent = -1;
    }
}

function resetRecentMousePosition () {
    recentMouseEvent = 0;
}

executeSetupWhenCanvasIsReady();

export {checkObjectMouseEvent, mouseCoordinates, resetRecentMousePosition};
