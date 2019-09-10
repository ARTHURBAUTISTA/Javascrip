let btnComparar = document.getElementById('btnComparar');
let tipo = document.getElementById('tipo');
let km = document.getElementById('km');
let personas = document.getElementById('personas');

EventListener()

function EventListener() {
    btnComparar.addEventListener('click', Calcular);
}

function Calcular() {
    let imprimir = document.getElementById('imprimirNumero1');
    let imprimir2 = document.getElementById('imprimirNumero2');

    let costop = 0;
    let costot = 0;

    if (tipo.value == 1.5) {

        costop = 1.5 * km.value;
        costot = costop * 20;
        imprimir.innerHTML = costop;
        imprimir2.innerHTML = costot;
        return;

    }
    if (tipo.value == 2) {

        costop = 2 * km.value;
        costot = costop * 20;
        imprimir.innerHTML = costop;
        imprimir2.innerHTML = costot;
        return;

    }

    if (tipo.value == 2.5) {

        costop = 2.5 * km.value;
        costot = costop * 20;
        imprimir.innerHTML = costop;
        imprimir2.innerHTML = costot;
        return;

    }

    if (tipo.value == 3) {

        costop = 3 * km.value;
        costot = costop * 20;
        imprimir.innerHTML = costop;
        imprimir2.innerHTML = costot;
        return;

    }




}