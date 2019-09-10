let btnComparar = document.getElementById('btnComparar');

eventListener()

function eventListener() {
    btnComparar.addEventListener('click', compararDatos);
}

function compararDatos() {
    let numero1 = Number(document.getElementById('numero1').value);
    let numero2 = Number(document.getElementById('numero2').value);

    let imprimir = document.getElementById('imprimirNumero1');

    if ((numero1 % numero2) == 0) {
        imprimir.innerText = 'Si es multiplo';
    } else {
        imprimir.innerText = 'No es multiplo';
    }
    if ((numero2 % numero1) == 0) {
        imprimir.innerText = 'Si es multiplo';
    } else {
        imprimir.innerText = 'No es multiplo';
    }
}