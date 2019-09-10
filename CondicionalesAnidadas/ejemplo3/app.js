let btnComparar = document.getElementById('btnComparar');
let calif1 = document.getElementById('calif1');
let calif2 = document.getElementById('calif2');
let calif3 = document.getElementById('calif3');

EventListener()

function EventListener() {
    btnComparar.addEventListener('click', Calcular);

}

function Calcular() {
    let imprimir = document.getElementById('imprimirNumero1');
    let imprimir2 = document.getElementById('imprimirNumero2');
    let resultado = Number(calif1.value) + Number(calif2.value) + Number(calif3.value);


    //esta operacion es similar a escribir resultado/=3
    resultado = resultado / 3;

    imprimir2.innerHTML = resultado;

    if (resultado >= 9) {

        imprimir.innerText = 'APROBADO'
    } else if (resultado < 9 && resultado >= 6) {
        imprimir.innerText = 'REGULAR'
    } else {
        imprimir.innerText = 'REPROBADO'


    }

}