let AgregarElemento = document.getElementById('AgregarElemento');
let MostrarElemento = document.getElementById('MostrarElemento');
let informacionImprimir = '';

//Declaracion global del array
let elementos = [];
//Declarar contador global
let contador = 0;

EventListenner();

function EventListenner() {

    btnAgregarElemento.addEventListener('click', AgregarElementos);
    btnMostrarElemento.addEventListener('click', CalcularMedia);
}

function AgregarElementos() {

    if (contador < 10) {

        let valorInput = document.getElementById('AgregarElemento');

        elementos[contador] = Number(valorInput.value);

        valorInput.value = "";

        contador++;
    }


}

function CalcularMedia() {

    let promedio = 0;
    for (let i = 0; i < elementos.length; i++) {

        promedio += elementos[i];
    }

    promedio /= elementos.length;

    //reiniciando todos los valores.
    contador = 0;
    elementos = [];

    let imprimir = `<li class="list-group-item">El promedio de los números otorgados es: ${promedio}</li>`

    document.getElementById('ListaImprimir').innerHTML = imprimir;

}