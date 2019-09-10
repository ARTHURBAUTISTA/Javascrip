let btnComparar = document.getElementById('btnComparar');

eventListener()

function eventListener() {
    btnComparar.addEventListener('click', compararDatos);
}

function compararDatos() {
    let numero1 = Number(document.getElementById('numero1').value);
    let numero2 = Number(document.getElementById('numero2').value);
    let numero3 = Number(document.getElementById('numero3').value);

    let mayor = document.getElementById('imprimirNumero1');
    let medio = document.getElementById('imprimirNumero2');
    let menor = document.getElementById('imprimirNumero3');

    if (numero1 <= numero2 && numero1 <= numero3) {

        menor.innerHTML = numero1;
        if (numero2 <= numero3) {

            medio.innerHTML = numero2;
            mayor.innerHTML = numero3;
        } else {
            medio.innerHTML = numero3;
            mayor.innerHTML = numero2;
        }
    } else if (numero2 <= numero1 && numero2 <= numero3) {

        menor.innerHTML = numero2;

        if (numero1 <= numero3) {
            medio.innerHTML = numero1;
            mayor.innerHTML = numero3;
        } else {
            medio.innerHTML = numero3;
            mayor.innerHTML = numero1;
        }

    } else {
        menor = numero3;
        if (numero1 <= numero2) {
            medio.innerHTML = numero1;
            mayor.innerHTML = numero2

        } else {
            medio.innerHTML = numero2;
            mayor.innerHTML = numero1;
        }
    }




}