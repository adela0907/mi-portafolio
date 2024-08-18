// Selecciona todos los campos requeridos y el contenedor de mensajes de error
const camposDeFormulario = document.querySelectorAll("[required]");
const error = document.querySelector('#error');

// Copia el texto del campo de entrada al portapapeles
function copyText() {
    const inputText = document.getElementById("myInput");

    inputText.select();
    inputText.setSelectionRange(0, 99999); // Para dispositivos móviles

    navigator.clipboard.writeText(inputText.value)
        .then(() => console.log('Texto copiado'))
        .catch(err => console.error('Error al copiar el texto: ', err));
}

// Verifica los campos al perder el foco
camposDeFormulario.forEach(campo => {
    campo.addEventListener("blur", () => verificarCampo(campo));
});

// Muestra un mensaje de error en caso de que no se completen todos los campos
function mostrarMensajeError(mensaje) {
    error.textContent = mensaje;
    error.style.display = 'block';
}

// Oculta el mensaje de error
function ocultarMensajeError() {
    error.textContent = '';
    error.style.display = 'none';
}

// Verifica el valor del campo y actualiza el borde y el mensaje de error
function verificarCampo(campo) {
    if (campo.value.trim().length < 3) { // Verifica si el valor es menor a 3 caracteres después de eliminar espacios en blanco
        campo.style.borderColor = "red";
        mostrarMensajeError("Complete todos los campos correctamente");
    } else {
        campo.style.borderColor = ""; // Resetea el borde al valor por defecto
        ocultarMensajeError();
    }

    console.log("Verificación de campo:", campo.name);
}
