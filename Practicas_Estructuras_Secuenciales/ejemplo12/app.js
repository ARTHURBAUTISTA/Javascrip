let btnCalcular = document.getElementById('btnCalcular');
EventListener();


function EventListener() {

    btnCalcular.addEventListener('click', obtenerViaticos);
}


function obtenerViaticos() {

    let dias = Number(document.getElementById('dias').value),
        hotel = Number(document.getElementById('hotel').value),
        comida = Number(document.getElementById('comida').value);


    let total = 0;

    total = (dias * hotel) + (dias * comida) + (dias * 100);

    let imprimirResultado = document.getElementById('resultado');
    imprimirResultado.innerHTML = ('$') + total;

}