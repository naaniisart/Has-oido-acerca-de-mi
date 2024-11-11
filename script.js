// Obtener el video y el marcador
var video = document.getElementById('video');
var marcador = document.getElementById('marcador');

// Cuando el marcador es detectado
marcador.addEventListener('markerFound', function() {
    // Hacer visible el video y reproducirlo
    video.setAttribute('visible', 'true');  // Hacer visible el video
    if (video.paused) {
        video.play();  // Reproducir el video si está pausado
    }
});

// Cuando el marcador deja de ser detectado
marcador.addEventListener('markerLost', function() {
    // Detener el video y ocultarlo
    video.setAttribute('visible', 'false');  // Ocultar el video
    if (!video.paused) {
        video.pause();  // Pausar el video
    }
});
