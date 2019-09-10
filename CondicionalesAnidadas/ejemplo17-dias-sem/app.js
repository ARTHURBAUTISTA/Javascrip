let btnComparar = document.getElementById('btnComparar');

eventListener()

function eventListener() {
    btnComparar.addEventListener('click', compararDatos);
}

function compararDatos() {
    let numero1 = Number(document.getElementById('numero1').value);
    let imprimir = document.getElementById('imprimirNumero1');

    if (numero1 == 1) {
        imprimir.innerHTML = 'LUNES';

    }
    if (numero1 == 2) {
        imprimir.innerHTML = 'MARTES';

    }
    if (numero1 == 3) {
        imprimir.innerHTML = 'MIERCOLES';
    }
    if (numero1 == 4) {
        imprimir.innerHTML = 'JUEVES';
    }
    if (numero1 == 5) {
        imprimir.innerHTML = 'VIERNES';
    }
    if (numero1 == 6) {
        imprimir.innerHTML = 'SABADO';
    }
    if (numero1 == 7) {
        imprimir.innerHTML = 'DOMINGO';
    }
    if (numero1 > 7 || numero1 < 0) {

        imprimir.innerHTML = 'Numero invalido';

    }


}