let tareas = [];
let tarea = {
    fecha: "",
    descripcion: "",
};

let body = document.getElementById("body");

let descripcionjsinput = document.getElementById("descripcion");
let añadirjsinput = document.getElementById("añadir");
añadirjsinput.addEventListener("click", añadirTarea);

function añadirTarea(event) {
    event.preventDefault();
    //establece la descripción que hay en los inputs del formulario en dos variables diferentes.
    let descripcion =
        event.target.parentElement.parentElement.children[1].children[1].value;
    let fecha =
        event.target.parentElement.parentElement.children[1].children[3].value;
    tarea.fecha = fecha;
    tarea.descripcion = descripcion;
    tareas.push(tarea);
    listarTareas();
    console.log(event);
}

function listarTareas() {
    tareas.forEach((task) => {
        console.log(tareas);
        body.innerHTML += `<tr>
                <th>${task.fecha}</th>
                <th>${task.descripcion}</th>
                <th>
                    <button type="button" class="btn btn-danger">
                        Eliminar
                    </button>
                    <button type="button" class="btn btn-info">
                        Modificar
                    </button>
                    <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"></input>
                </th>
            </tr>`;
    });
}
