let btnComparar = document.getElementById('btnComparar');

eventListener()

function eventListener() {
    btnComparar.addEventListener('click', compararDatos);
}

function compararDatos() {
    let numero = Number(document.getElementById('numero').value);
    let imprimir = document.getElementById('imprimirNumero1');
    let centena = 0,
        decena = 0,
        unidad = 0;

    centena = Math.floor(numero / 100);
    decena = Math.floor((numero % 100) / 10);
    unidad = Math.floor((numero % 100) % 10);


    if (centena == unidad) {

        imprimir.innerText = 'Es igual al revés'
        return;
    } else {
        imprimir.innerText = 'No es igual'


    }


}