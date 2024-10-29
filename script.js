const btnCancelar = document.querySelector("cancelar");
const inputs = document.querySelectorAll("input");
const botonFormulario = document.querySelector(".ir-a-formulario");
const cerrarFormulario = document.querySelector("cerrarFormulario");
const form = document.getElementsByTagName("form");
const inicioDeSesion = document.querySelector(".inicio-de-sesion")

const menuButton = document.querySelector(".menuButton");
const sideBar = document.querySelector(".sidebar");
const closeMenu = document.querySelector(".closeMenu");
const menuLinks = document.querySelectorAll(".sidebar a[href^='#']");
const scrollBtn = document.getElementById("scrollBtn");

inputs.forEach(input => {
    input.required = true
})

botonFormulario.addEventListener('click', function () {
    window.location.href = 'formulario.html';
});

inicioDeSesion.addEventListener('click', function () {
    window.location.href = 'sesion.html';
});


menuButton.addEventListener("click", (showSideBAR) => {
    sideBar.style.display = "block";
});

closeMenu.addEventListener("click", (hideSideBar) => {
    sideBar.style.display = "none";
});

menuLinks.forEach((menuLinks) => {
    menuLinks.addEventListener("click", function () {
        sideBar.style.display = "none";
    });
});

scrollBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});