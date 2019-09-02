let btnCalcular = document.getElementById('btnCalcular');
let btnCalcular2 = document.getElementById('btnCalcular2');

EventListener();

function EventListener() {

    btnCalcular.addEventListener('click', obtenerArea);
    btnCalcular2.addEventListener('click', obtenerAreaSimplificada);

}

function obtenerAreaSimplificada() {
    console.time('obtenerAreaSimplificada');
    let radio = Number(document.getElementById('radiocirculo').value);
    let resultado = 0;

    //se invoca el objeto Math y se utiliza su propiedad PI(el cual nos m,anda el valor de esa constante ) y su método pow( eleva el valor de dicho elemento numerico
    resultado = Math.PI * Math.pow(radio, 2);

    let resultadoImprimir = document.getElementById('resultado');
    resultadoImprimir.innerHTML = resultado;
    console.timeEnd('obtenerAreaSimplificada');

}

function obtenerArea() {

    console.time('obtenerArea');

    //se declara el elemento constante el cual funcionara para obtener el cálculo de PI

    const pi = 3.1416;

    let radio = Number(document.getElementById('radiocirculo').value);
    let resultado = 0;

    resultado = pi * (radio * radio);

    let resultadoImprimir = document.getElementById('resultado');

    resultadoImprimir.innerHTML = resultado;

    console.timeEnd('obtenerArea');

}