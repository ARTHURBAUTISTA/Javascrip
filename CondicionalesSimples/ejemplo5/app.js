let btnComparar = document.getElementById('btnComparar');
let ladoa = document.getElementById('ladoa');
let ladob = document.getElementById('ladob');
let ladoc = document.getElementById('ladoc');

EventListener();

function EventListener() {

    ladoa.addEventListener('blur', validarDatos);
    ladob.addEventListener('blur', validarDatos);
    ladoc.addEventListener('blur', validarDatos);
    btnComparar.addEventListener('click', compararValores)

}

function validarDatos(event) {


    if (isNaN(event.target.value)) {
        event.target.focus();
    }
}

function compararValores() {


    let imprimir1 = document.getElementById('imprimirNumero1');




    if (Number(ladoa.value) == Number(ladob.value) && Number(ladob.value) == Number(ladoc.value)) {

        imprimir1.innerText = 'Equilatero';
        return;
    } else if (Number(ladoa.value) == Number(ladob.value) || Number(ladoa.value) == Number(ladoc.value) || Number(ladob.value) == Number(ladoc.value)) {

        imprimir1.innerText = 'Isosceles';



    } else {
        imprimir1.innerText = 'Escaleno';
    }

}