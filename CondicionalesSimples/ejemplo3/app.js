let btnComparar = document.getElementById('btnComparar');
let edad1 = document.getElementById('edad1');
let edad2 = document.getElementById('edad2');

EventListener();

function EventListener() {

    edad1.addEventListener('blur', validarDatos);
    edad2.addEventListener('blur', validarDatos);
    btnComparar.addEventListener('click', compararValores)

}

function validarDatos(event) {


    if (isNaN(event.target.value)) {
        event.target.focus();
    }
}

function compararValores() {


    let imprimir2 = document.getElementById('imprimirNumero2');

    let imprimir1 = document.getElementById('imprimirNumero1');

    let diferencia = 0



    if (Number(edad1.value) == Number(edad2.value)) {

        imprimir1.innerText = 'El primer numero es igual al segundo';
        imprimir2.innerText = diferencia;
        return;
    }
    if (Number(edad1.value) > Number(edad2.value)) {

        diferencia = edad1.value - edad2.value;

        imprimir1.innerHTML = edad1.value;
        imprimir2.innerHTML = diferencia;

    } else {
        diferencia = edad2.value - edad1.value;
        imprimir1.innerHTML = edad2.value;
        imprimir2.innerHTML = diferencia;
    }

}