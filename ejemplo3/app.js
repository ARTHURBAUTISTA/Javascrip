let btnCalcular = document.getElementById('btnCalcular');

//se invoca la funcion "eventLister"
eventListener();

// se crea la funcion eventListener para encapsular los objetos que llevaran el metodo de "eventListener"

function eventListener() {

    btnCalcular.addEventListener('click', ObtenerArea)

}

function ObtenerArea() {

    console.log('fygjugui');


    //se obtiene el valor de los input´s y se convierte su tipo de dato dato a number y se le asigna el valor a la variable correspondiente
    let Base = Number(document.getElementById('Base').value);
    let Altura = Number(document.getElementById('Altura').value);

    let resultado = 0;
    resultado = (Base * Altura) / 2;

    let imprimirResultado = document.getElementById('Resultado');

    imprimirResultado.innerHTML = resultado;

}