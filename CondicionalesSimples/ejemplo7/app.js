let btnVerificar = document.getElementById('btnVerificar');
let cantidad = document.getElementById('cantidad');


EventListener();

function EventListener() {

    cantidad.addEventListener('blur', validarDatos);
    btnVerificar.addEventListener('click', compararValores)

}

function validarDatos(event) {


    if (isNaN(event.target.value)) {
        event.target.focus();
    }
}

function compararValores() {


    let imprimir2 = document.getElementById('imprimir');
    let res1 = 0;
    let res2 = 0;
    let por = 20;





    if (Number(cantidad.value) > 1000) {
        res1 = por / 100;
        res2 = cantidad.value * res1
        imprimir2.innerHTML = '$' + (cantidad.value - res2);
    } else {
        imprimir2.innerText = 'No aplica el 20% de descuento';

    }

}