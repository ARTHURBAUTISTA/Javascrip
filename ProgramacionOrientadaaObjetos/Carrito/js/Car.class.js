class Car {
    poscicionX = 0;
    poscicionY = 0;


    constructor(poscicionX, poscicionY) {
        this.poscicionX = poscicionX;
        this.poscicionY = poscicionY;
    }

    moveRight(Img) {

        Img.src = "./img/rigth.png"
        Img.style.width = "120px";
        Img.style.height = "85px";

        if (this.poscicionX <= 89) {

            Img.style.left = `${this.poscicionX++}%`;
        }

    }

    moveLeft(Img) {

        Img.src = "./img/left.png"
        Img.style.width = "120px";
        Img.style.height = "85px";

        if (this.poscicionX >= 0) {
            Img.style.left = (this.poscicionX--) + "%";
        }



    }

    moveTop(Img) {

        Img.src = "./img/up2.png"

        Img.style.width = "85px";
        Img.style.height = "120px";

        if (this.poscicionY >= 0) {
            Img.style.top = `${this.poscicionY--}%`;
        }
    }

    moveBottom(Img) {

        Img.src = "./img/bottom2.png"
        Img.style.width = "85px";
        Img.style.height = "120px";
        if (this.poscicionY <= 82) {
            Img.style.top = `${this.poscicionY++}%`;
        }

    }

    currentPosition(arrayPositionPrize, image) {

        let positionCarX = image.x;
        let positionCarY = image.y;

        console.log(arrayPositionPrize);

        for (let i = 0; i < arrayPositionPrize.length; i++) {
            let PositionXPrize = arrayPositionPrize[i].posX;
            let PositionYPrize = arrayPositionPrize[i].posY;

            console.log(`coordenadas carrito`, positionCarX, positionCarY)
            console.log(`coordenadas imagen`, PositionXPrize, PositionYPrize)

            if (positionCarX >= PositionXPrize - 25 && positionCarX <= PositionXPrize + 25 && positionCarY >= PositionYPrize - 25 && positionCarY <= PositionYPrize + 25) {
                return true;
            }
        }
        return false;


    }




}