class Prize {
    posicionX = 0;
    posicionY = 0;
    sizeMargin = 50;

    constructor() {

        this.calculateSizeMargin();
    }


    PositionX(posicionX) {
        this.posicionX = posicionX;
    }

    PositionY(posicionY) {
        this.posicionY = posicionY;
    }

    // get PositionX() {
    //     return this.posicionX;
    // }

    // get posicionY() {
    //     return this.posicionY;
    // }

    createElementImg() {
        let imageCreate = document.createElement('img');
        imageCreate.setAttribute('src', './img/LadRight.png');
        imageCreate.style.width = "70px";

        let posX = this.posicionX - this.sizeMargin;
        let posY = this.posicionY - 30;

        imageCreate.style.left = `${posX}px`;
        imageCreate.style.top = `${posY}px`;

        document.getElementById('contenedor').appendChild(imageCreate);

        return { posX, posY }


    }

    calculateSizeMargin() {

        let marginContainer = window.getComputedStyle(document.getElementById('contenedor'));

        let marginLeft = marginContainer.getPropertyValue('margin-left');

        marginLeft = marginLeft.substring(0, marginLeft.length - 2);




    }



}