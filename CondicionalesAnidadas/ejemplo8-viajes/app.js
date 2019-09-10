let btnComparar = document.getElementById('btnComparar');
let dinero = document.getElementById('dinero');

EventListener()

function EventListener() {
    btnComparar.addEventListener('click', Calcular);
}

function Calcular() {
    let imprimir = document.getElementById('imprimirNumero1');
    let x = 0;

    x = dinero.value / 1.5;

    if (x <= 1500) {

        imprimir.innerText = 'Mejor quedate en casa!!!!';
        return;

    }
    if (x > 1500 && x < 1600) {

        imprimir.innerText = 'CDMX';
        return;
    }

    if (x > 1600 && x < 2400) {

        imprimir.innerText = 'CDMX o Puerto Vallarta';
        return;

    }
    if (x > 2400 && x < 3600) {

        imprimir.innerText = 'CDMX, Puerto Vallarta o Acapulco';
        return;

    }

    if (x > 3600) {

        imprimir.innerText = 'CDMX , Puerto Vallarta ,Acapulco o Cancún';
        return;

    }


}