import {GameObject} from "../GameObjects/gameObject.js";
import {canvasContext} from "../GameLayers/canvasLayer.js";
import {mouseCoordinates} from "./mouseHelper.js";

class MarkRectangle extends GameObject {
    static markRectangles = [];
    static name = "markRect";
    static htmlAddButton = null;

    #positionMode = true;
    #isConfirmed = false;
    #htmlInfoDisplay = null;
    #htmlInfoOccupied = false;

    constructor(x, y, width, height,) {
        super(width, height, x, y);
        MarkRectangle.setAllConfirmed();
        MarkRectangle.markRectangles.push(this);
        this.#positionMode = true;
        this.#htmlInfoDisplay = document.getElementById(MarkRectangle.name + "Info");
    }

    update = () =>  {
        if (this.#isConfirmed)
            return;
        else {
            if (this.#positionMode) {
                this.position.x = mouseCoordinates.x - this.dimensions.width / 2;
                this.position.y = mouseCoordinates.y - this.dimensions.height / 2;
            }
            else {
                this.dimensions.width = Math.max(10, mouseCoordinates.x - this.position.x);
                this.dimensions.height = Math.max(10, mouseCoordinates.y - this.position.y);
            }
        }
    }

    draw = () => {
        let color = "rgba(90,80,255,.4)";
        if (this.#htmlInfoOccupied && this.#isConfirmed) {
            color = "rgba(80,190,0,.28)";
        }
        if (this.#htmlInfoOccupied && !this.#isConfirmed && this.#positionMode) {
            color = "rgba(200,0,150,.75)";
        }
        if (this.#htmlInfoOccupied && !this.#isConfirmed && !this.#positionMode) {
            color = "rgba(200,0,150,.75)";
            ///color = "rgba(200,80,0,.75)";
        }
        canvasContext.beginPath();
        canvasContext.fillStyle = color;
        canvasContext.strokeStyle = "#000000";
        canvasContext.rect(this.position.x, this.position.y, this.dimensions.width, this.dimensions.height);
        // canvasContext.rect(50,150, 100, 100);
        canvasContext.fill();
        canvasContext.stroke();
        canvasContext.closePath();
    }

    confirm = () => {
        this.#isConfirmed = true;
    }

    unConfirm = () => {
        MarkRectangle.setAllConfirmed();
        if (this.active)
            this.#isConfirmed = false;
    }

    static setAllConfirmed = () => {
        for (let markRectangle of MarkRectangle.markRectangles) {
            markRectangle.confirm();
        }
    }

    onMouseEvent = (recentMouseEvent) => {
        console.log(recentMouseEvent);
       if (recentMouseEvent === 0) {
            if (this.#htmlInfoDisplay != null && !this.#htmlInfoOccupied)
                this.#htmlInfoOccupied = true;
                this.#htmlInfoDisplay.innerHTML = `
                    <span style='display: block'> X: ${this.position.x}</span>
                    <span style='display: block'> Y: ${this.position.y}</span>
                    <span style='display: block'> WIDTH: ${this.dimensions.width}</span>
                    <span style='display: block'> HEIGHT: ${this.dimensions.height}</span>
                `;
       }
       if (recentMouseEvent >= 12)  {
            this.#htmlInfoOccupied = false;
            if (this.#htmlInfoDisplay != null)
                this.#htmlInfoDisplay.innerHTML = ``;
        }
        /*
            mouseEvent:
            0 == hover,
            1 == left down initial, 2 == middle down initial, 3 == right down initial,
            4 == left down held, 5 == middle up held, 6 == right up held,
            7 == left up, 8 == middle up, 9 == right up,
            10 == left click, 11 == middle click, 12 == right click
        */
        if (recentMouseEvent < 10 || recentMouseEvent > 12)
            return;

        let previousPositionMode = this.#positionMode;
        let previousConfirmStatus = this.#isConfirmed;

        this.#htmlInfoOccupied = false;

        if (recentMouseEvent === 12)
            this.active = false;

        this.unConfirm();

        if (recentMouseEvent === 10)
            this.#positionMode = true;

        if (recentMouseEvent === 11)
            this.#positionMode = false;


        if (previousPositionMode === this.#positionMode && previousConfirmStatus === false) {
            this.confirm();
        }
    }
}
MarkRectangle.htmlAddButton = document.getElementById(MarkRectangle.name + "Button");
MarkRectangle.htmlAddButton.addEventListener("click", () => { console.log(123); new MarkRectangle(40, 40, 40,40);});


export {MarkRectangle}