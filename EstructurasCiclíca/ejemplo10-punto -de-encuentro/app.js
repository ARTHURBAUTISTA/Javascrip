let btnAgregar = document.getElementById('btnCalcular');


EventListenner()

function EventListenner() {

    btnCalcular.addEventListener('click', calcularRango);
}


function calcularRango() {

    let kma = 0;
    let kmb = 0;
    let distancia = 0;
    let a = Number(document.getElementById('puntoa').value);
    let b = Number(document.getElementById('puntob').value);

    for (let a = 0; a <= 150; a++) {




    }
    for (let b = 0; b >= 70; b--) {




    }

    distancia = b - a;
    console.log(a);
    console.log(b);
    console.log(distancia);


    if (distancia == 0 && kmb == kma) {

        let imprimir = document.getElementById('imprimir');
        let imprimir1 = document.getElementById('imprimir1');
        imprimir.innerHTML = '' + 'Km' + '' + kma;
        imprimir1.innerText = '' + 'El punto A y B se han encontrado'


    } else {

        let imprimir = document.getElementById('imprimir');
        let imprimir1 = document.getElementById('imprimir1');
        imprimir.innerHTML = '' + 'Km' + '' + distancia;
        imprimir1.innerText = '' + 'El punto A y B aun no se encuentran'

    }



}