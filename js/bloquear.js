// Deshabilitar el zoom con gestos de pellizco en dispositivos móviles
document.addEventListener('gesturestart', function (event) {
    event.preventDefault();
});
