let btnCalcular = document.getElementById('btnCalcular');
EventListener();

function EventListener() {

    btnCalcular.addEventListener('click', obtenerPuntos);

}

function obtenerPuntos() {

    let aciertos = Number(document.getElementById('aciertos').value),
        errores = Number(document.getElementById('errores').value),
        nulos = Number(document.getElementById('nulos').value);

    let resultado1 = 0,
        resultado2 = 0,
        resultado3 = 0,
        total = 0;

    resultado1 = aciertos * 4;
    resultado2 = errores * (-1);
    resultado3 = nulos * 0;

    total = resultado1 + resultado2 + resultado3;
    let imprimirResultado = document.getElementById('total');
    imprimirResultado.innerHTML = total;

}