let MostrarElemento = document.getElementById('MostrarElemento');
let informacionImprimir = '';
let informacionImprimir2 = '';
let mult = 0;
let elementos = [];

EventListenner();

function EventListenner() {

    btnMostrarElemento.addEventListener('click', MostrarElementos);
}

function MostrarElementos() {



    for (let i = 0; i <= 9; i++) {

        let NumberRandom = Math.round(Math.random() * (100 - 50)) + parseInt(50);

        mult = NumberRandom * 0.5;

        elementos[i] = mult;



        informacionImprimir += `<li class="list-group-item">${NumberRandom} </li>`
        document.getElementById('ListaImprimir').innerHTML = informacionImprimir;

        informacionImprimir2 = `<li class="list-group-item">${elementos} </li>`
        document.getElementById('ListaImprimir2').innerHTML = informacionImprimir2;



    }
}