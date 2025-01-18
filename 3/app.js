function agregarTarea(){

const tarea = document.getElementById('nuevaTarea').value;

if(tarea === ""){
    alert("Ingrese una tarea");
    return;
} 

let nuevaTarea = document.createElement("li");

nuevaTarea.textContent = tarea + " ";

let botonEliminar = document.createElement("button");

botonEliminar.className = "btn btn-danger"

botonEliminar.textContent = "Eliminar";

botonEliminar.onclick = function(){ nuevaTarea.remove()};

nuevaTarea.appendChild(botonEliminar);

document.getElementById("listaDeTareas").appendChild(nuevaTarea);

document.getElementById("nuevaTarea").value = "";


}