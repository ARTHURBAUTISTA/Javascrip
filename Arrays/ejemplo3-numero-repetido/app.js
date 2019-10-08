let AgregarElemento = document.getElementById('AgregarElemento');



//Declaracion global del array
let elementos = [];
//Declarar contador global
let contador = 0;

EventListenner();

function EventListenner() {

    btnAgregarElemento.addEventListener('click', AgregarElementos);
}

function AgregarElementos() {
    let valor = document.getElementById('InputNumero');
    let i = 0;

    for (i = 0; i <= elementos.length; i++) {
        console.log(elementos.length);


        if (Number(valor.value) === elementos[i]) {
            document.getElementById('ListaImprimir').innerHTML = 'Esta Repetido';
            return
        }

    }

    elementos[i - 1] = Number(valor.value);

    let imprimir = '';

    for (let x = 0; x < elementos.length; x++) {
        imprimir += `<li class="list-group-item"> ${elementos[x]}</li>`
    }

    document.getElementById('ListaImprimir').innerHTML = imprimir;
}