let btncalcular = document.getElementById('btncalcular');


btncalcular.addEventListener('click', multiplicacion);



function multiplicacion() {


    let Numero1 = document.getElementById('numero1').value;
    let Numero2 = document.getElementById('numero2').value;


    Numero1 = Number(Numero1);
    Numero2 = Number(Numero2);


    let resultado = 0;


    resultado = Numero1 * Numero2;


    let imprimirResultado = document.getElementById('resultado');

    imprimirResultado.innerHTML = ('$') + resultado;
}