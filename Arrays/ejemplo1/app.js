let AgregarElemento = document.getElementById('AgregarElemento');
let MostrarElemento = document.getElementById('MostrarElemento');
let informacionImprimir = '';
let informacionImprimir2 = '';

//Declaracion global del array
let elementos = [];
//Declarar contador global
let contador = 0;

EventListenner();

function EventListenner() {

    btnAgregarElemento.addEventListener('click', AgregarElementos);
    btnMostrarElemento.addEventListener('click', MostrarElementos);
}

function AgregarElementos() {

    if (contador < 10) {

        let valorInput = document.getElementById('AgregarElemento');

        elementos[contador] = valorInput.value;

        valorInput.value = "";

        contador++;
    }


}

function MostrarElementos() {
    for (let i = 0; i < elementos.length; i++) {
        informacionImprimir += `<li class="list-group-item">${elementos[i]} </li>`
    }

    contador = 0;

    document.getElementById('ListaImprimir').innerHTML = informacionImprimir;
}