let btnAgregar = document.getElementById('btnCalcular');
let imprimir = document.getElementById('imprimir1');



EventListenner()

function EventListenner() {

    btnCalcular.addEventListener('click', calcularRango);
}

function calcularRango() {
    let cont = 1,
        cont2 = 0,
        bandera = 0;

    let numero = Number(document.getElementById('N').value);

    while (cont <= numero) {
        while (cont2 < cont) {
            if (cont % cont2 == 0 && cont2 != 1 && cont2 != cont) {
                bandera = 1;



            }
            cont2++;
        }
        if (bandera == 0) {
            imprimir.innerText += ` ${cont2} `;
            console.log(cont2);


        } else {
            bandera = 0;
        }
        cont++;
        cont2 = 0;

    }

}