// Deshabilitar el zoom con gestos de pellizco en dispositivos móviles
document.addEventListener('gesturestart', function (event) {
    event.preventDefault();
});

// Evitar el zoom en el evento de rueda del mouse
window.addEventListener('wheel', function(event) {
    if (event.ctrlKey) {
        event.preventDefault();
    }
}, { passive: false });
