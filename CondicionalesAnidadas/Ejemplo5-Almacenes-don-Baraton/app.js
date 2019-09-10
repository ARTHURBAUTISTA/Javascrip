let btnComparar = document.getElementById('btnComparar');
let precio = document.getElementById('precio');

EventListener()

function EventListener() {
    btnComparar.addEventListener('click', Calcular);

    function Calcular() {
        let imprimir = document.getElementById('imprimirNumero1');

        let total = 0;
        let precio1 = 16;
        let precio2 = 7;
        let desc1 = 0;
        let desc2 = 0;

        if (precio.value >= 3600) {
            total = (precio1 * precio.value) / 100
            desc1 = precio.value - total;
            imprimir.innerHTML = desc1;
            return
        }

        if (precio.value < 3600) {

            total2 = (precio2 * precio.value) / 100
            desc2 = precio.value - total2;
            imprimir.innerHTML = desc2;
            return



        }




    }



}