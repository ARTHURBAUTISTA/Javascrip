let btnCalcular = document.getElementById('btnCalcular');
EventListener();

function EventListener() {

    btnCalcular.addEventListener('click', obtenerPerimetro);

}

function obtenerPerimetro() {

    let A = Number(document.getElementById('A').value),
        B = Number(document.getElementById('B').value),
        C = Number(document.getElementById('C').value);

    let semiperimetro = 0,
        area = 0,
        resultado = 0;



    semiperimetro = (A + B + C) / 2;
    area = Math.sqrt(semiperimetro * (semiperimetro - A) * (semiperimetro - B) * (semiperimetro - C));

    let imprimirResultado = document.getElementById('resultado');
    imprimirResultado.innerHTML = area + ('cm2');


}