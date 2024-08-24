// JavaScript Document// script.js
document.getElementById('copy-button').addEventListener('click', function() {
    // Selecciona el campo de texto
    var emailInput = document.getElementById('email-input');
    
    // Selecciona el contenido del campo de texto
    emailInput.select();
    emailInput.setSelectionRange(0, 99999); // Para dispositivos móviles

    // Copia el contenido al portapapeles
    document.execCommand('copy');

    // Muestra un mensaje de confirmación (puedes eliminar este código si no lo necesitas)
    alert('Correo electrónico copiado: ' + emailInput.value);
});
// JavaScript Document