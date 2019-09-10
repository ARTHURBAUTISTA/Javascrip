sumaCantidades();

function sumaCantidades() {

    let y = 0;
    //estructura ciclica la cual se compone de un inicializador(variable inicializada, condicion logica, incrementador de la variable), la cual nos ayuda a la ejecucion repetitiva de un bloque de codigo.
    for (let x = 1; x <= 10; x++) {

        y = y + x;
        //se crea el elemento "li" por medio del metodo CreateElement y se asigna a la variable newli.

        let newli = document.createElement('li');
        //se asigna el atributo id y class a la variable newli

        newli.setAttribute("id", `listaN${x}`);

        newli.setAttribute("class", "list-group-item");

        let newContent = document.createTextNode(y);
        newli.appendChild(newContent);

        //se crea el nodo de texto por medio del metodo CreateTextNode
        let listaDesordenada = document.getElementById('listaNumerica');

        //se inserta un hijo por medio del metodo appendChild a la variable newli
        listaDesordenada.appendChild(newli);


    }




}