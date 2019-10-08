let input = 0;
let imp;

let Res = 0;


let voto = new votos();
EventListenner()

function EventListenner() {

    btnAgregar.addEventListener('click', Agregar);
    // btnSalir.addEventListener('click', Salir);
    btnAfavor.addEventListener('click', Afavor);
    btnEncontra.addEventListener('click', Encontra);
    btnAbstencion.addEventListener('click', Abstencion);
    btnFinalizar.addEventListener('click', Finalizar);


}

function Agregar() {

    input = document.getElementById('inputPregunta').value;
    document.getElementById('casilla').innerText = input;

}

function Afavor() {

    voto.calcularAfavor();
    console.log(voto);

}

function Encontra() {

    voto.calcularEnContra();

}

function Abstencion() {

    voto.calcularAbstencion();

}

function Finalizar() {

    let impr = voto.Imprimir();

    console.log(impr);


}