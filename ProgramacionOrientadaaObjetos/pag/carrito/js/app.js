const carrito = document.getElementById('carrito');

const cursos = document.getElementById('lista-cursos');

const listaCursos = document.querySelector('#lista-carrito  tbody');

const objectCar = new Carrito();

const vaciarCarrito = document.getElementById('vaciar-carrito')


EventListener()

function EventListener() {
    cursos.addEventListener('click', GetCourse);

    carrito.addEventListener('click', EliminarCourse);

    vaciarCarrito.addEventListener('click', vaciarCarritoCursos);

    carrito.addEventListener('DOMContentLoader', MostrarCursosCarrito);


}

function GetCourse(event) {

    event.preventDefault();

    if (event.target.classList.contains('agregar-carrito')) {
        let Courses = event.target.parentElement.parentElement;
        // console.log(Courses);
        objectCar.readDataCourse(Courses, listaCursos);
    }

}

function EliminarCourse(event) {
    objectCar.EliminarCursoCarrito(event);



}

function MostrarCursosCarrito() {
    objectCar.showCoursesLSCar();

}

function vaciarCarritoCursos() {
    objectCar.vaciarCarrito(listaCursos)
}