// Función para deshabilitar el zoom
function disableZoom() {
    document.body.addEventListener('wheel', function (event) {
        event.preventDefault();
    }, { passive: false });

    document.body.addEventListener('gesturestart', function (event) {
        event.preventDefault();
    });
}

// Establece el zoom inicial (alejado)
function setInitialZoom() {
    document.body.style.transform = 'scale(0.8)'; // Ajusta el valor según lo necesites
    document.body.style.transformOrigin = '0 0';
}

// Llama a las funciones cuando la página se carga
window.onload = function () {
    disableZoom();
    setInitialZoom();
};
