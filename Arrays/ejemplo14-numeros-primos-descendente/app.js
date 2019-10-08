let MostrarElemento = document.getElementById('MostrarElemento');
let informacionImprimir = '';
let j = 1000;

let numerosprimos = [];


EventListenner();

function EventListenner() {

    btnMostrarElemento.addEventListener('click', MostrarElementos);
}

function MostrarElementos() {


    for (let i = 1000; i >= 1; i--) {
        if (primo(i)) {
            //numerosprimos.push(i);
            numerosprimos[i] = i;
            informacionImprimir += `<li class="list-group-item">${numerosprimos[i]} </li>`
        }

    }
    // informacionImprimir += `<li class="list-group-item">1</li>`
    informacionImprimir += `<li class="list-group-item">0</li>`
    document.getElementById('ListaImprimir').innerHTML = informacionImprimir;
    console.log(numerosprimos);


}

function primo(numero) {
    for (let x = 2; x < numero; x++) {

        if (numero % x === 0) {
            return false;
        }

    }

    return numero !== 0;
}