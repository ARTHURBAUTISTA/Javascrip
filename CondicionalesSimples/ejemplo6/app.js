let btnVerificar = document.getElementById('btnVerificar');
let clave1 = document.getElementById('clave1');

EventListener();

function EventListener() {

    clave1.addEventListener('blur', validarDatos);
    btnVerificar.addEventListener('click', compararValores)

}

function validarDatos(event) {


    if (isNaN(event.target.value)) {
        event.target.focus();
    }
}

function compararValores() {
    let imprimir1 = document.getElementById('clave');
    let imprimir2 = document.getElementById('producto');
    let imprimir3 = document.getElementById('original');
    let imprimir4 = document.getElementById('descuento');
    let res = 0;
    let res2 = 0;
    let por1 = 10;
    let por2 = 20;
    let imp1 = 500;
    let imp2 = 350;

    if (Number(clave1.value) == 01) {
        //res=10/100
        res = por1 / 100;
        //res2=500*0.1
        res2 = imp1 * res;
        imprimir1.innerText = '01';
        imprimir2.innerText = 'playera';
        imprimir3.innerText = '$' + imp1;
        imprimir4.innerText = '$' + (imp1 - res2);

    } else {
        res = por2 / 100;
        res2 = imp2 * res;
        imprimir1.innerText = '02';
        imprimir2.innerText = 'gorra';
        imprimir3.innerText = '$' + imp2;
        imprimir4.innerText = '$' + ((imp2) - res2);
    }


}