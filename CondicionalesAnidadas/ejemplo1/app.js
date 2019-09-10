let btnComparar = document.getElementById('btnComparar');

eventListener()

function eventListener() {
    btnComparar.addEventListener('click', compararDatos);
}

function compararDatos() {
    let numero1 = Number(document.getElementById('numero1').value);
    let numero2 = Number(document.getElementById('numero2').value);
    let numero3 = Number(document.getElementById('numero3').value);

    let imprimirResultado = document.getElementById('resultado');

    if (numero1 > numero2) {
        if (numero1 > numero3) {
            imprimirResultado.innerHTML = `
            <h4 class="alert-heading text-center text-info"> El numero ${numero1} es el numero mayor</h4>
            `
        } else {
            imprimirResultado.innerHTML = `
            <h4 class="alert-heading text-center text-info"> El numero ${numero3} es el numero mayor</h4>
            `
        }
    } else {
        if (numero2 > numero3) {
            imprimirResultado.innerHTML = `
                <h4 class="alert-heading text-center text-info"> El numero ${numero2} es el numero mayor</h4>
                
        `
        } else {

            imprimirResultado.innerHTML = `
                <h4 class="alert-heading text-center text-info"> El numero ${numero3} es el numero mayor</h4>
                `

        }



    }






}