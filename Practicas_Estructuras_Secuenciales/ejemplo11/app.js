let btnCalcular = document.getElementById('btnCalcular');
EventListener();


function EventListener() {

    btnCalcular.addEventListener('click', obtenerPulgadas);
}


function obtenerPulgadas() {

    let mts = Number(document.getElementById('mts').value);

    let pulgadas = 0;

    pulgadas = mts * 39.3071;

    let imprimirResultado = document.getElementById('resultado');
    imprimirResultado.innerHTML = pulgadas;


}