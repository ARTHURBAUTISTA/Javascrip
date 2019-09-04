let btnCalcular = document.getElementById('btnCalcular');
EventListener();

function EventListener() {

    btnCalcular.addEventListener('click', obtenerCosto);
}

function obtenerCosto() {

    let A = Number(document.getElementById('A').value),
        B = Number(document.getElementById('B').value),
        C = Number(document.getElementById('C').value),
        costo = Number(document.getElementById('costo').value);


    let metros = 0,
        litros = 0,
        resultado = 0;


    metros = (A * B * C);
    litros = metros * 1000;
    resultado = litros * costo;

    let imprimirResultado = document.getElementById('resultado1');
    imprimirResultado.innerHTML = litros + ('Litros');

    let imprimirResultado2 = document.getElementById('resultado2');
    imprimirResultado2.innerHTML = ('$') + resultado;
}