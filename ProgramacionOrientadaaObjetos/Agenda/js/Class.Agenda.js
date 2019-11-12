class Agenda {

    nombre = "";
    telefono = "";
    fecha = "";

    constructor() {



    }


    addPersona(Nombre, Telefono) {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        var hh = String(today.getHours());
        var mm = String(today.getMinutes());


    }


}