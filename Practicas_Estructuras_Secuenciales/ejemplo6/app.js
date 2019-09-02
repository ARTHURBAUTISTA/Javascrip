let btnCalcular = document.getElementById('btnCalcular');

EventListener();

function EventListener() {

    btnCalcular.addEventListener('click', obtenerDistancia);

}

function obtenerDistancia() {

    let velocidad = Number(document.getElementById('velocidad').value),
        tiempo = Number(document.getElementById('tiempo').value);

    let distancia = 0;

    distancia = velocidad * tiempo;

    let imprimirResultado = document.getElementById('resultado');
    imprimirResultado.innerHTML = distancia + ('mts');
}