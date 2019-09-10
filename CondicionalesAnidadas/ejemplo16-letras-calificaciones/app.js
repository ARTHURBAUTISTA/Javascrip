let btnComparar = document.getElementById('btnComparar');

eventListener()

function eventListener() {
    btnComparar.addEventListener('click', compararDatos);
}

function compararDatos() {
    let numero1 = Number(document.getElementById('numero1').value);
    let imprimir = document.getElementById('imprimirNumero1');

    if (numero1 == 10) {
        imprimir.innerHTML = 'A';
    }
    if (numero1 == 9) {
        imprimir.innerHTML = 'B';
    }
    if (numero1 == 8) {
        imprimir.innerHTML = 'C';
    }
    if (numero1 == 7 || numero1 == 6) {
        imprimir.innerHTML = 'D';
    }
    if (numero1 <= 5) {
        imprimir.innerHTML = 'F';
    }
    if (numero1 > 10 || numero1 < 0) {

        imprimir.innerHTML = 'Numero invalido';

    }


}