let btnCalcular = document.getElementById('btnCalcular');

EventListener();


function EventListener() {

    btnCalcular.addEventListener('click', obtenerDistancia);
}

function obtenerDistancia() {

    let x1 = Number(document.getElementById('x1').value),
        y1 = Number(document.getElementById('y1').value),
        x2 = Number(document.getElementById('x2').value),
        y2 = Number(document.getElementById('y2').value);

    let distancia = 0;

    distancia = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));

    let imprimirResultado = document.getElementById('resultado');
    imprimirResultado.innerHTML = distancia;


}