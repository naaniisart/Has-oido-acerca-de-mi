// Asegúrate de que el marcador sea accesible al cargar el DOM
window.onload = function() {
    var marcador = document.getElementById('marcador');
    
    // Si tienes alguna animación con GSAP, puede ir aquí
    if (marcador) {
        // Ejemplo de animación usando GSAP en el marcador
        gsap.from(marcador, {
            duration: 2,
            scale: 0.5,
            opacity: 0,
            ease: "bounce"
        });
    }
};
