let btnAgregar = document.getElementById('btnAgregar');

EventListenner()

function EventListenner() {

    btnAgregar.addEventListener('click', calcular);

}

function calcular() {

    let contador = 0;
    let n = Number(document.getElementById('numero').value);

    for (let x = 0; x <= n; x++) {



        if (x % 2 == 0) {

            let newli = document.createElement('li');
            newli.setAttribute("id", `listaN${x}`);

            newli.setAttribute("class", "list-group-item");

            let newContent = document.createTextNode(x);
            newli.appendChild(newContent);

            let listaDesordenada = document.getElementById('listaNumerica');
            listaDesordenada.appendChild(newli);


        }

    }


}