let btnComparar = document.getElementById('btnComparar');
let nombre = document.getElementById('nombre');
let edad = document.getElementById('edad');
let nombre2 = document.getElementById('nombre2');
let edad2 = document.getElementById('edad2');

EventListener();

function EventListener() {

    edad.addEventListener('click', compararValores);
    edad2.addEventListener('click', compararValores);
    nombre.addEventListener('click', compararValores);
    nombre2.addEventListener('click', compararValores);

    btnComparar.addEventListener('click', compararValores)

}

// function validarDatos(event) {


//     if (isNaN(event.target.value)) {
//         event.target.focus();
//     }
// }

function compararValores() {




    let imprimir1 = document.getElementById('imprimirNumero1');





    if (Number(edad.value) == Number(edad2.value)) {

        imprimir1.innerText = 'Ambos tienen la misma edad';

        return;
    }
    if (Number(edad.value) > Number(edad2.value)) {



        imprimir1.innerHTML = nombre.value;


    } else {

        imprimir1.innerHTML = nombre2.value;

    }

}