let btnComparar = document.getElementById('btnComparar');

eventListener()

function eventListener() {
    btnComparar.addEventListener('click', compararDatos);
}

function compararDatos() {
    let numero1 = Number(document.getElementById('number1').value);
    let numero2 = Number(document.getElementById('number2').value);
    let numero3 = Number(document.getElementById('number3').value);
    let numero4 = Number(document.getElementById('number4').value);
    let imprimir = document.getElementById('imprimirNumero1');
    let promedio = 0;

    if (numero1 >= numero2 && numero1 >= numero3 && numero1 >= numero4 && numero2 >= numero3 && numero2 >= numero4 && numero3 >= numero4) {
        menor = numero1;
        promedio = (numero1 + numero2 + numero3 + numero4);
        promedio /= 4;
        imprimir.innerHTML = promedio;
        return
    }

    if (numero1 <= numero2 && numero1 <= numero3 && numero1 <= numero4) {
        menor = numero1;
        promedio = (numero2 + numero3 + numero4);
        promedio /= 3;
        imprimir.innerHTML = promedio;
        return
    }
    if (numero2 <= numero1 && numero2 <= numero3 && numero2 <= numero4) {
        menor = numero2;
        promedio = (numero1 + numero3 + numero4);
        promedio /= 3;
        imprimir.innerHTML = promedio;
        return;
    }
    if (numero3 <= numero1 && numero3 <= numero2 && numero3 <= numero4) {
        menor = numero3;
        promedio = (numero1 + numero2 + numero4);
        promedio /= 3;
        imprimir.innerHTML = promedio;
        return;
    }
    if (numero4 <= numero1 && numero4 <= numero2 && numero4 <= numero3) {
        menor = numero4;
        promedio = (numero1 + numero2 + numero3);
        promedio /= 3;
        imprimir.innerHTML = promedio;
        return;
    }


}