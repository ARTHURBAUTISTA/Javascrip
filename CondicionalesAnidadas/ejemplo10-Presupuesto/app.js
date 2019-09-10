let btnComparar = document.getElementById('btnComparar');
let presupuesto = document.getElementById('presupuesto');
let articulo1 = document.getElementById('articulo1');
let articulo2 = document.getElementById('articulo2');
let articulo3 = document.getElementById('articulo3');
let articulo4 = document.getElementById('articulo4');

EventListener()

function EventListener() {
    btnComparar.addEventListener('click', Calcular);
}

function Calcular() {
    let imprimir = document.getElementById('imprimirNumero1');
    let imprimir2 = document.getElementById('imprimirNumero2');
    let total = Number(articulo1.value) + Number(articulo2.value) + Number(articulo3.value) + Number(articulo4.value);

    if (total <= presupuesto.value) {

        imprimir.innerHTML = '$' + total;
        imprimir2.innerText = 'Se Tiene presupuesto suficiente'
        return;
    }
    if (total > presupuesto.value) {
        imprimir.innerHTML = '$' + total;
        imprimir2.innerText = 'Presupuesto Insuficiente!!!'
        return;

    }

}