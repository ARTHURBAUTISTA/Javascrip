let btnComparar = document.getElementById('btnComparar');
let horas = document.getElementById('horas');

EventListener()

function EventListener() {
    btnComparar.addEventListener('click', Calcular);
}

function Calcular() {
    let imprimir = document.getElementById('imprimirNumero1');
    let total = 0;
    let verif = 0;


    if (horas.value <= 2) {

        total = horas.value * 5;
        imprimir.innerHTML = '$' + total;
        return;
    }

    if (horas.value >= 3 && horas.value <= 5) {
        verif
        total = ((horas.value - 2) * 4) + 10;
        imprimir.innerHTML = '$' + total;
        return;

    }
    if (horas.value >= 5 && horas.value <= 10) {
        verif
        total = ((horas.value - 5) * 3) + 22;
        imprimir.innerHTML = '$' + total;
        return;

    }
    if (horas.value > 10) {
        verif
        total = ((horas.value - 10) * 2) + 37;
        imprimir.innerHTML = '$' + total;
        return;

    }



}