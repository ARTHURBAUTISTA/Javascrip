let btnComparar = document.getElementById('btnComparar');
let personas = document.getElementById('personas');

EventListener()

function EventListener() {
    btnComparar.addEventListener('click', Calcular);
}

function Calcular() {
    let imprimir = document.getElementById('imprimirNumero1');
    let imprimir2 = document.getElementById('imprimirNumero2');
    let resultado = 0;
    let precio1 = 95;
    let precio2 = 85;
    let precio3 = 75;

    if (personas.value <= 200) {

        imprimir.innerText = '$95.00'
        resultado = personas.value * precio1;
        imprimir2.innerHTML = '$' + resultado;

    } else if (personas.value > 200 && personas.value <= 300) {

        imprimir.innerText = '$85.00'
        resultado = personas.value * precio2;
        imprimir2.innerHTML = '$' + resultado;

    } else {
        imprimir.innerText = '$75.00'
        resultado = personas.value * precio3;
        imprimir2.innerHTML = '$' + resultado;
    }

}