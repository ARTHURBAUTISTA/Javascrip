let AgregarElemento = document.getElementById('AgregarElemento');
let AgregarLongitud = document.getElementById('AgregarLongitud');
let elementos = [];
let nombres = [];
let contador = 0;
let nombreslist = document.getElementById('InputNombre');



EventListenner();

function EventListenner() {

    btnAgregarElemento.addEventListener('click', AgregarElementos);
    btnAgregarLongitud.addEventListener('click', AgregarLongitud);
}

function AgregarElementos() {
    let imprimir = '';
    let x;
    let valor = document.getElementById('InputArray');
    console.log(valor.value);

    for (x = 0; x < elementos.length; x++) {
        console.log(elementos.length);

        elementos[x] = nombreslist.value;
        imprimir += `<li class="list-group-item"> ${elementos[x]}</li>`
    }
    elementos[x - 1] = valor.value

    document.getElementById('ListaImprimir').innerHTML = imprimir;
}