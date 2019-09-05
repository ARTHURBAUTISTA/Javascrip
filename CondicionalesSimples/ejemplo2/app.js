let btnComparar = document.getElementById('btnComparar');
let numero1 = document.getElementById('numero1');
let numero2 = document.getElementById('numero2');

EventListener();


function EventListener() {
    //se le esta asignando al evento el input que pertenece el id "numero1"
    numero1.addEventListener('blur', validarDatos);
    numero2.addEventListener('blur', validarDatos);
    btnComparar.addEventListener('click', compararValores)

}
//estamos recibiendo el parametro event debido a que el metodo "addEventListener" esta invocando la funcion validarDatos.
function validarDatos(event) {

    console.log();
    //se utilizo la funcion isNaN para comprobar si el valor obtenido es un numero,en caspo de que no sea un numero, se utilizo el metodo focus para no permitirle al usuario cambiar el input.
    if (isNaN(event.target.value)) {
        event.target.focus();
    }
}

function compararValores() {

    let imprimir = document.getElementById('imprimirNumero');

    if (Number(numero1.value) == Number(numero2.value)) {

        imprimir.innerText = 'El primer numero es igual al segundo'
        return;
    }

    if (Number(numero1.value) > Number(numero2.value)) {

        imprimir.innerText = 'El primer numero es el valor mas grande'

    } else {
        imprimir.innerText = 'El segundo numero es el valor mas grande'
    }

}