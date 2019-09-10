let inputNumber = document.getElementById('numero');
let imprimir = document.getElementById('resultado');

EventListener()

function EventListener() {
    inputNumber.addEventListener('keypress', calcularCifras);
    inputNumber.addEventListener('blur', calcularCifrasBlur);

}

function calcularCifrasBlur() {

    if (Number(inputNumber.value) <= 9) {
        imprimir.innerHTML = `
        <h4 class="alert-heading text-center text-info">1 digito</h4>
        `
        return
    }

    if (Number(inputNumber.value) <= 99) {
        imprimir.innerHTML = `
        <h4 class="alert-heading text-center text-info">2 digitos</h4>
        `
        return
    }

    if (Number(inputNumber.value) <= 999) {
        imprimir.innerHTML = `
        <h4 class="alert-heading text-center text-info">3 digitos</h4>
        `
        return
    }

    if (Number(inputNumber.value) <= 10000) {
        imprimir.innerHTML = `
        <h4 class="alert-heading text-center text-info">Error</h4>
        `
        return
    }

}

function calcularCifras(event) {

    if (event.key == "Enter") {


        if (Number(inputNumber.value) > 999) {
            imprimir.innerHTML = `
            <h4 class="alert-heading text-center text-info">Error</h4>
            `
        }

        if (Number(inputNumber.value) <= 999) {

            imprimir.innerHTML = `
            <h4 class="alert-heading text-center text-info">3 cifras</h4>
            `

        }
        if (Number(inputNumber.value) <= 99) {

            imprimir.innerHTML = `
            <h4 class="alert-heading text-center text-info">2 cifras</h4>
            `

        }
        if (Number(inputNumber.value) <= 9) {

            imprimir.innerHTML = `
            <h4 class="alert-heading text-center text-info">1 cifra</h4>
            `

        }

    }
}