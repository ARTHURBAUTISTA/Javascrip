let btnAgregar = document.getElementById('btnCalcular');
let total = 0
let acum = 0;

EventListenner()

function EventListenner() {

    btnCalcular.addEventListener('click', calcularRango);
}

function calcularRango() {


    for (let mes = 1; mes <= 20; mes++) {



        total = mes * 10;

        acum += total;

        console.log(acum);



    }
    let imprimir = document.getElementById('imprimir1');
    imprimir.innerHTML = acum;


}