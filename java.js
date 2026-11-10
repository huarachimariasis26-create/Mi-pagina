
// Obtener los elementos del HTML
const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const asunto = document.getElementById("asunto");
const mensaje = document.getElementById("mensaje");

const mensajeEstado = document.getElementById("mensajeEstado");
const listaUsuarios = document.getElementById("listaUsuarios");

// Recuperar los mensajes almacenados
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

// Mostrar los mensajes al abrir la página
mostrarUsuarios();

// Detectar el envío del formulario
formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    // Obtener los datos escritos
    const nombreUsuario = nombre.value.trim();
    const correoUsuario = correo.value.trim();
    const asuntoUsuario = asunto.value;
    const mensajeUsuario = mensaje.value.trim();

    // Crear un objeto
    const usuario = {
        nombre: nombreUsuario,
        correo: correoUsuario,
        asunto: asuntoUsuario,
        mensaje: mensajeUsuario
    };

    // Agregar el objeto al arreglo
    usuarios.push(usuario);

    // Guardar los datos en localStorage
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    // Actualizar la lista
    mostrarUsuarios();

    // Mostrar mensaje de confirmación
    mensajeEstado.textContent = "¡Mensaje registrado correctamente!";

    // Limpiar el formulario
    formulario.reset();
});

// Función para mostrar los mensajes registrados
function mostrarUsuarios() {

    listaUsuarios.innerHTML = "";

    usuarios.forEach(function(usuario) {

        const elemento = document.createElement("li");

        elemento.textContent =
            "Nombre: " + usuario.nombre +
            " | Correo: " + usuario.correo +
            " | Asunto: " + usuario.asunto +
            " | Mensaje: " + usuario.mensaje;

        listaUsuarios.appendChild(elemento);
    });
}

// Obtener los elementos del buscador
const buscarProducto = document.getElementById("buscarProducto");
const btnBuscar = document.getElementById("btnBuscar");
const mensajeBusqueda = document.getElementById("mensajeBusqueda");

// Función para buscar productos
function buscar() {

    // Obtener el texto escrito
    const texto = buscarProducto.value.toLowerCase().trim();

    // Obtener todas las tarjetas de productos
    const productos = document.querySelectorAll(".producto");

    let encontrados = 0;

    // Recorrer los productos
    productos.forEach(function(producto) {

        const nombreProducto = producto.textContent.toLowerCase();

        if (nombreProducto.includes(texto) && texto !== "") {

            producto.style.display = "block";
            encontrados++;

        } else if (texto === "") {

            producto.style.display = "block";

        } else {

            producto.style.display = "none";

        }

    });

    // Mostrar resultado
    if (texto === "") {
        mensajeBusqueda.textContent = "Escribe el nombre de un producto.";
    } else if (encontrados > 0) {
        mensajeBusqueda.textContent = "Se encontraron " + encontrados + " producto(s).";
    } else {
        mensajeBusqueda.textContent = "No se encontraron productos.";
    }
}

// Detectar el clic en el botón
btnBuscar.addEventListener("click", buscar);

// Buscar mientras se escribe
buscarProducto.addEventListener("input", buscar);