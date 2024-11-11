// Obtener el marcador y el video
var video = document.getElementById('video');
var marcador = document.getElementById('marcador');

// Cuando el marcador sea encontrado, reproducir el video
marcador.addEventListener('markerFound', function() {
    if (video.paused) {
        video.play();
    }
});

// Cuando el marcador se pierda, pausar el video
marcador.addEventListener('markerLost', function() {
    video.pause();
});
