let btnVerificar = document.getElementById('btnVerificar');

eventListener()

function eventListener() {
    btnVerificar.addEventListener('click', verificarEstatus);
}

function verificarEstatus() {
    let calificacion = Number(document.getElementById('unidades').value);
    let imprimirResultado = document.getElementById('imprimir');

    if (calificacion > 100) {
        imprimirResultado.innerHTML = 'Recibirá Incentivo';

    } else {

        imprimirResultado.innerHTML = 'No Recibirá Incentivo';
    }
}