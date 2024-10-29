// Variables de referencias a elementos HTML
const infoParrafo = document.getElementById("info");
const modificarBtn = document.getElementById("modificar-btn");
const guardarBtn = document.getElementById("guardar-btn");
const crearParrafoBtn = document.getElementById("crear-parrafo-btn");
const crearBotonBtn = document.getElementById("crear-boton-btn");
const contenedor = document.getElementById("contenedor");

// Cargando texto almacenado al iniciar la página
window.onload = function(){
    const textoGuardado = localStorage.getItem("textoInfo");
    if (textoGuardado) {
        infoParrafo.textContent = textoGuardado;
    }

    const elementosGuardados = localStorage.getItem("contenedorHTML");
    if(elementosGuardados) {
        contenedor.innerHTML = elementosGuardados;
    }
};

// Función para moficar el contenido del párrafo "info"
function modificarTexto() {
    const nuevoTexto = prompt("Introduce el nuevo texto: ");
    if(nuevoTexto) {
        infoParrafo.textContent = nuevoTexto;
        console.log("Texto modificado: ", infoParrafo.textContent);
    }
}

// Función para guardar cambios en localStorage
function guardarCambios() {
    localStorage.setItem("textoInfo", infoParrafo.textContent); //Guardar el texto modificado
    localStorage.setItem("contenedorHTML", contenedor.innerHTML); // Guardar el contenido de los nuevos elementos
    alert("Cambios guardados con exito!");
}

// Función para agregar un nuevo párrafo al contenedor
function agregarParrafo() {
    const nuevoParrafo = document.createElement("p");
    nuevoParrafo.textContent = "Este es un nuevo párrafo creado dinámicamente";
    contenedor.appendChild(nuevoParrafo);
    console.log("Párrafo añadido: ", nuevoParrafo);
}

// Función para crear y agregar un botón con evento al contenedor
function agregarBotonEvento() {
    const nuevoBoton = document.createElement("button");
    nuevoBoton.textContent = "Botón Dinámico";

    // Evento del botón que muestra una alerta
    nuevoBoton.addEventListener("click", () => {
        alert("Has hecho click en el botón dinámico!");
    });

    contenedor.appendChild(nuevoBoton);
    console.log("Botón añadido con evento: ", nuevoBoton);
}

    // Agregando eventos a los botones
    modificarBtn.addEventListener("click", modificarTexto);
    guardarBtn.addEventListener("click", guardarCambios);
    crearParrafoBtn.addEventListener("click", agregarParrafo);
    crearBotonBtn.addEventListener("click",agregarBotonEvento);

