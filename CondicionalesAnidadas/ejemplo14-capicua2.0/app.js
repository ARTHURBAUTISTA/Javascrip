let btnComparar = document.getElementById('btnComparar');

eventListener()

function eventListener() {
    btnComparar.addEventListener('click', compararDatos);
}

function compararDatos() {
    let numero = Number(document.getElementById('numero').value);
    let imprimir = document.getElementById('imprimirNumero1');
    let millar = 0,
        centena = 0,
        decena = 0,
        unidad = 0;

    millar = Math.floor(numero / 1000);
    console.log(millar);

    centena = Math.floor((numero % 1000) / 100);
    decena = Math.floor((numero % 1000) / 100);
    console.log(centena);

    unidad = Math.floor((numero % 1000) % 10);
    console.log(unidad);



    if (millar == unidad) {

        imprimir.innerText = 'Es igual al revés'
        return;
    } else {
        imprimir.innerText = 'No es igual'


    }
    if (centena == unidad) {
        imprimir.innerText = 'Es igual al revés'
        return;
    }
}