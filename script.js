const btnCancelar = document.querySelector("cancelar");
const inputs = document.querySelectorAll("input");
const botonFormulario = document.querySelector(".ir-a-formulario");
const cerrarFormulario = document.querySelector("cerrarFormulario");
const form = document.getElementsByTagName("form");
const inicioDeSesion = document.querySelector(".inicio-de-sesion")

inputs.forEach(input => {
    input.required = true
})

botonFormulario.addEventListener('click', function () {
    window.location.href = 'formulario.html';
});

inicioDeSesion.addEventListener('click', function () {
    window.location.href = 'sesion.html';
});


