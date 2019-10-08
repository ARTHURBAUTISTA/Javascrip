let Velocidad = 0;
let Angulo = 0;

EventListenner()

function EventListenner() {

    btnAgregarElemento.addEventListener('click', AgregarElementos);

}

async function AgregarElementos() {

    let Velocidad = Number(document.getElementById('AgregarVel').value);
    let Angulo = Number(document.getElementById('AgregarAngulo').value);

    let proyectil = new Proyectil(Velocidad, Angulo);


    // console.log(proyectil.velocidadInicial);
    // console.log(proyectil.angulo);

    for (let tiempo = 0; tiempo <= 15; tiempo += 0.1) {

        let posicionX = proyectil.CalcularVelocidadX(tiempo);
        let posicionY = proyectil.CalcularVelocidadY(tiempo);

        if (posicionX >= 0 && posicionY >= 0 && posicionX <= 100 && posicionY <= 100) {
            await stop(proyectil, posicionX, posicionY)
        }
    }
}

function stop(proyectil, posicionX, posicionY) {
    return new Promise((res, rej) => {
        setTimeout(() =>
            res(proyectil.CrearSpan(posicionX, posicionY), 200))
    })
}