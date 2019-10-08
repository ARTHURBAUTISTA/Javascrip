let btnAgregar = document.getElementById('btnCalcular');
let inicio = 5
let acum = 0;

EventListenner()

function EventListenner() {

    btnCalcular.addEventListener('click', calcularRango);
}

function calcularRango() {


    for (let i = 1; i <= 100; i++) {

        if (acum % 2) {
            acum += 2;
            acum += inicio
        }
        if (acum % 3) {
            acum += 3;
        }

        acum += inicio



        console.log(inicio, acum);






    }
    let imprimir = document.getElementById('imprimir1');



}