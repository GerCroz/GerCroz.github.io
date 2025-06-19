// Aplica estilo al enlace seleccionado y oculta el menú responsive
function seleccionar(link) {
    const opciones = document.querySelectorAll("#links a");

    opciones.forEach(opcion => opcion.classList.remove("seleccionado"));
    link.classList.add("seleccionado");

    // Oculta el menú en vista responsive
    document.getElementById("nav").classList.remove("responsive");
}

// Muestra u oculta el menú responsive
function responsiveMenu() {
    const nav = document.getElementById("nav");
    nav.classList.toggle("responsive");
}
