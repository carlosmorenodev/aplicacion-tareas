/* 

var formulario = document.getElementById("formulario");
var nuevaTareaInput = document.getElementById("nuevaTarea");
var listaTareas = document.getElementById("listaTareas");

// Obtener tareas guardadas en localStorage al cargar la página
var tareas = obtenerTareasDeLocalStorage();

// Mostrar tareas en la lista al cargar la página
mostrarTareasEnLista();

// Agregar una tarea al array y actualizar la lista y localStorage
function agregarTarea(event) {
  event.preventDefault(); // Evitar que el formulario se envíe

  var nuevaTarea = nuevaTareaInput.value;

  if (nuevaTarea !== "") {
    tareas.push({
      nombre: nuevaTarea,
      realizada: false
    });
    guardarTareasEnLocalStorage();

    var nuevoItem = crearElementoTarea(nuevaTarea, tareas.length - 1);
    listaTareas.appendChild(nuevoItem);

    nuevaTareaInput.value = ""; // Limpiar el campo de texto después de agregar la tarea
  }
}

// Eliminar una tarea del array y actualizar la lista y localStorage
function eliminarTarea(indice) {
  tareas.splice(indice, 1);
  guardarTareasEnLocalStorage();
  mostrarTareasEnLista();
}

// Marcar o desmarcar una tarea como realizada
function cambiarEstadoTarea(indice) {
  tareas[indice].realizada = !tareas[indice].realizada;
  guardarTareasEnLocalStorage();
  mostrarTareasEnLista();
}

// Obtener las tareas guardadas en localStorage
function obtenerTareasDeLocalStorage() {
  var tareasGuardadas = localStorage.getItem("tareas");
  return tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
}

// Guardar las tareas en localStorage
function guardarTareasEnLocalStorage() {
  localStorage.setItem("tareas", JSON.stringify(tareas));
}

// Crear un elemento de tarea en el DOM
function crearElementoTarea(nombre, indice) {
  var item = document.createElement("li");

  var textoTarea = document.createElement("span");
  textoTarea.textContent = nombre;

  item.addEventListener("click", function() {
    cambiarEstadoTarea(indice);
    actualizarEstiloTarea(item, tareas[indice].realizada);
  });

  var botonEliminar = document.createElement("button");
  botonEliminar.textContent = "Eliminar";
  botonEliminar.className = "eliminar";
  botonEliminar.addEventListener("click", function(event) {
    event.stopPropagation(); // Evitar que el clic se propague al elemento de tarea
    eliminarTarea(indice);
  });

  item.appendChild(textoTarea);
  item.appendChild(botonEliminar);

  actualizarEstiloTarea(item, tareas[indice].realizada);

  return item;
}

// Actualizar el estilo de una tarea según su estado
function actualizarEstiloTarea(item, realizada) {
  if (realizada) {
    item.classList.add("realizada");
  } else {
    item.classList.remove("realizada");
  }
}

// Mostrar las tareas en la lista al cargar la página
function mostrarTareasEnLista() {
  listaTareas.innerHTML = "";

  tareas.forEach(function(tarea, indice) {
    var nuevoItem = crearElementoTarea(tarea.nombre, indice);
    listaTareas.appendChild(nuevoItem);
  });
}

// Agregar evento al formulario para añadir una tarea al enviarlo
formulario.addEventListener("submit", agregarTarea); */



/* ################## */

/* var formulario = document.getElementById("formulario");
var nuevaTareaInput = document.getElementById("nuevaTarea");
var listaTareas = document.getElementById("listaTareas");

// Obtener tareas guardadas en localStorage al cargar la página
var tareas = obtenerTareasDeLocalStorage();

// Mostrar tareas en la lista al cargar la página
mostrarTareasEnLista();

// Agregar una tarea al array y actualizar la lista y localStorage
function agregarTarea(event) {
  event.preventDefault(); // Evitar que el formulario se envíe

  var nuevaTarea = nuevaTareaInput.value;

  if (nuevaTarea !== "") {
    tareas.push({
      nombre: nuevaTarea,
      realizada: false
    });
    guardarTareasEnLocalStorage();

    var nuevoItem = crearElementoTarea(nuevaTarea, tareas.length - 1);
    listaTareas.appendChild(nuevoItem);

    nuevaTareaInput.value = ""; // Limpiar el campo de texto después de agregar la tarea
  }
}

// Eliminar una tarea del array y actualizar la lista y localStorage
function eliminarTarea(indice) {
  tareas.splice(indice, 1);
  guardarTareasEnLocalStorage();
  mostrarTareasEnLista();
}

// Marcar o desmarcar una tarea como realizada
function cambiarEstadoTarea(indice) {
  tareas[indice].realizada = !tareas[indice].realizada;
  guardarTareasEnLocalStorage();
  mostrarTareasEnLista();
}

// Obtener las tareas guardadas en localStorage
function obtenerTareasDeLocalStorage() {
  var tareasGuardadas = localStorage.getItem("tareas");
  return tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
}

// Guardar las tareas en localStorage
function guardarTareasEnLocalStorage() {
  localStorage.setItem("tareas", JSON.stringify(tareas));
}

// Crear un elemento de tarea en el DOM
function crearElementoTarea(nombre, indice) {
  var item = document.createElement("li");

  var textoTarea = document.createElement("span");
  textoTarea.textContent = nombre;

  item.addEventListener("click", function() {
    cambiarEstadoTarea(indice);
    actualizarEstiloTarea(item, tareas[indice].realizada);
  });

  var botonEliminar = document.createElement("button");
  botonEliminar.textContent = "Eliminar";
  botonEliminar.className = "eliminar";
  botonEliminar.addEventListener("click", function(event) {
    event.stopPropagation(); // Evitar que el clic se propague al elemento de tarea
    eliminarTarea(indice);
  });

  item.appendChild(textoTarea);
  item.appendChild(botonEliminar);

  actualizarEstiloTarea(item, tareas[indice].realizada);

  return item;
}

// Actualizar el estilo de una tarea según su estado
function actualizarEstiloTarea(item, realizada) {
  if (realizada) {
    item.classList.add("realizada");
  } else {
    item.classList.remove("realizada");
  }
}

// Mostrar las tareas en la lista al cargar la página
function mostrarTareasEnLista() {
  listaTareas.innerHTML = "";

  tareas.forEach(function(tarea, indice) {
    var nuevoItem = crearElementoTarea(tarea.nombre, indice);
    listaTareas.appendChild(nuevoItem);
  });
}

// Agregar evento al formulario para añadir una tarea al enviarlo
formulario.addEventListener("submit", agregarTarea); */


/* ########### */

var formulario = document.getElementById("formulario");
var nuevaTareaInput = document.getElementById("nuevaTarea");
var listaTareas = document.getElementById("listaTareas");

// Obtener tareas guardadas en localStorage al cargar la página
var tareas = obtenerTareasDeLocalStorage();

// Mostrar tareas en la lista al cargar la página
mostrarTareasEnLista();

// Agregar una tarea al array y actualizar la lista y localStorage
function agregarTarea(event) {
  event.preventDefault(); // Evitar que el formulario se envíe

  var nuevaTarea = nuevaTareaInput.value;

  if (nuevaTarea !== "") {
    tareas.push({
      nombre: nuevaTarea,
      realizada: false
    });
    guardarTareasEnLocalStorage();

    var nuevoItem = crearElementoTarea(nuevaTarea, tareas.length - 1);
    nuevoItem.classList.add("agregado"); // Agregar la clase de animación al elemento
    listaTareas.appendChild(nuevoItem);

    nuevaTareaInput.value = ""; // Limpiar el campo de texto después de agregar la tarea
  }
}

// Eliminar una tarea del array y actualizar la lista y localStorage
function eliminarTarea(indice) {
  /* tareas.splice(indice, 1);
  guardarTareasEnLocalStorage();
  mostrarTareasEnLista(); */

  var elementoTarea = listaTareas.children[indice];
  elementoTarea.classList.add("eliminado");

  setTimeout(function() {
    tareas.splice(indice, 1);
    guardarTareasEnLocalStorage();
    mostrarTareasEnLista();
  }, 300); // Esperar 300ms antes de eliminar la tarea de manera definitiva

}

// Marcar o desmarcar una tarea como realizada
function cambiarEstadoTarea(indice) {
  tareas[indice].realizada = !tareas[indice].realizada;
  guardarTareasEnLocalStorage();
  mostrarTareasEnLista();
}

// Obtener las tareas guardadas en localStorage
function obtenerTareasDeLocalStorage() {
  var tareasGuardadas = localStorage.getItem("tareas");
  return tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
}

// Guardar las tareas en localStorage
function guardarTareasEnLocalStorage() {
  localStorage.setItem("tareas", JSON.stringify(tareas));
}

// Crear un elemento de tarea en el DOM
function crearElementoTarea(nombre, indice) {
  var item = document.createElement("li");

  var textoTarea = document.createElement("span");
  textoTarea.textContent = nombre;

  item.addEventListener("click", function() {
    cambiarEstadoTarea(indice);
    actualizarEstiloTarea(item, tareas[indice].realizada);
  });

  var botonEliminar = document.createElement("button");
  botonEliminar.textContent = "Eliminar";
  botonEliminar.className = "eliminar";
  botonEliminar.addEventListener("click", function(event) {
    event.stopPropagation(); // Evitar que el clic se propague al elemento de tarea
    eliminarTarea(indice);
  });

  item.appendChild(textoTarea);
  item.appendChild(botonEliminar);

  actualizarEstiloTarea(item, tareas[indice].realizada);

  return item;
}

// Actualizar el estilo de una tarea según su estado
function actualizarEstiloTarea(item, realizada) {
  if (realizada) {
    item.classList.add("realizada");
  } else {
    item.classList.remove("realizada");
  }
}

// Mostrar las tareas en la lista al cargar la página
function mostrarTareasEnLista() {
  listaTareas.innerHTML = "";

  tareas.forEach(function(tarea, indice) {
    var nuevoItem = crearElementoTarea(tarea.nombre, indice);
    listaTareas.appendChild(nuevoItem);
  });
}

// Agregar evento al formulario para añadir una tarea al enviarlo
formulario.addEventListener("submit", agregarTarea);




  






