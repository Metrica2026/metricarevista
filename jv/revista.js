
/* ==========================================
   MENÚ RESPONSIVE
========================================== */

const btnMenuOpen = document.getElementById("btnMenuOpen");
const btnMenuClose = document.getElementById("btnMenuClose");
const menuResponsive = document.getElementById("menuBar");
const enlaces = document.getElementById("enlaces");

// ABRIR MENÚ
if (btnMenuOpen && menuResponsive) {
    btnMenuOpen.addEventListener("click", function () {
        menuResponsive.classList.add("active");
    });
}

// CERRAR MENÚ
if (btnMenuClose && menuResponsive) {
    btnMenuClose.addEventListener("click", function () {
        menuResponsive.classList.remove("active");
    });
}

// CERRAR MENÚ AL SELECCIONAR UN ENLACE
if (enlaces && menuResponsive) {
    enlaces.addEventListener("click", function (event) {
        if (event.target.closest("a")) {
            menuResponsive.classList.remove("active");
        }
    });
}


/* ==========================================
   SLIDER DE PRODUCTOS
========================================== */

const contenedor = document.querySelector(".slider");
const btnIzquierdo = document.getElementById("btn-izquierda");
const btnDerecho = document.getElementById("btn-derecha");

// AVANZAR UNA EDICIÓN
if (contenedor && btnDerecho) {
    btnDerecho.addEventListener("click", function () {
        contenedor.scrollBy({
            left: contenedor.clientWidth,
            behavior: "smooth"
        });
    });
}

// REGRESAR UNA EDICIÓN
if (contenedor && btnIzquierdo) {
    btnIzquierdo.addEventListener("click", function () {
        contenedor.scrollBy({
            left: -contenedor.clientWidth,
            behavior: "smooth"
        });
    });
}


/* ==========================================
   TARJETAS DESPLEGABLES
========================================== */

const tarjetas = document.querySelectorAll(".tarjeta");

tarjetas.forEach(function (tarjeta) {

    const boton = tarjeta.querySelector(".titulo-tarjeta");

    if (!boton) return;

    boton.addEventListener("click", function () {

        // CERRAR LAS DEMÁS TARJETAS
        tarjetas.forEach(function (otraTarjeta) {
            if (otraTarjeta !== tarjeta) {
                otraTarjeta.classList.remove("activa");
            }
        });

        // ABRIR O CERRAR LA TARJETA SELECCIONADA
        tarjeta.classList.toggle("activa");

    });

});


/* ==========================================
   BOTÓN PARA REGRESAR AL INICIO
========================================== */

const btnTop = document.getElementById("btn-top");
const logo = document.getElementById("logo");

// MOSTRAR Y OCULTAR LA FLECHA AL DESPLAZARSE
if (btnTop) {

    window.addEventListener("scroll", function () {

        const scroll = window.scrollY;
        const fullSize = document.documentElement.scrollHeight;
        const sizeVP = document.documentElement.clientHeight;

        // MOSTRAR LA FLECHA DESPUÉS DE BAJAR 100 PX
        if (scroll > 100) {
            btnTop.classList.add("show");
        } else {
            btnTop.classList.remove("show");
        }

        // DETECTAR CUANDO SE LLEGA AL FINAL DE LA PÁGINA
        const cercaDelFinal =
            scroll + sizeVP >= fullSize - 5;

        if (cercaDelFinal) {
            btnTop.classList.add("scrollFinal");
        } else {
            btnTop.classList.remove("scrollFinal");
        }

    });

    // REGRESAR ARRIBA AL HACER CLIC
    btnTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


// REGRESAR AL INICIO AL HACER CLIC EN EL LOGO
if (logo) {

    logo.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}
