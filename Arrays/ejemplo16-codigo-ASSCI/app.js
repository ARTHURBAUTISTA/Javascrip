let AgregarElementos = document.getElementById('AgregarElemento');
let MostrarElementos = document.getElementById('MostrarElemento');
let informacionImprimir = '';
let informacionImprimir2 = '';
let frase = [];
let contador = 0;

EventListenner();

function EventListenner() {

    btnAgregarElemento.addEventListener('click', AgregarElemento);
    btnMostrarElemento.addEventListener('click', MostrarElemento);
}

function AgregarElemento() {

    if (contador < 10) {

        let valorInput = document.getElementById('AgregarElemento');

        frase[contador] = valorInput.value;

        valorInput.value = "";

        contador++;
    }


}

function MostrarElemento() {

    for (let x = 0; x < 1; x++) {
        frase =
            frase[x] = String.fromCharCode();

        if (frase[x] == 0) {

            frase[x] = frase[x] + 3
        }


    }
    console.log(frase);
}