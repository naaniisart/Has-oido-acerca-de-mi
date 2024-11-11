<script>
    // Obtener el video y marcador
    var video = document.getElementById('video');
    var marcador = document.getElementById('marcador');

    // Verificar si los elementos se cargaron correctamente
    if (!video) {
        console.error('No se pudo encontrar el elemento de video');
    }
    if (!marcador) {
        console.error('No se pudo encontrar el marcador');
    }

    // Reproducir el video cuando el marcador es detectado
    if (marcador) {
        marcador.addEventListener('markerFound', function() {
            // Comprobamos que el video esté listo para reproducirse
            if (video && video.paused) {
                video.play();
            }
        });

        // Detener el video cuando el marcador desaparece
        marcador.addEventListener('markerLost', function() {
            // Pausamos el video
            if (video && !video.paused) {
                video.pause();
                video.currentTime = 0;  // Reinicia el video cuando se pierde el marcador
            }
        });
    }
</script>
