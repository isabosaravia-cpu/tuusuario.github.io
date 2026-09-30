// Esperar a que cargue el DOM
document.addEventListener("DOMContentLoaded", function () {
    
    // Formulario de Contacto
    const formContacto = document.getElementById("formContacto");
    if (formContacto) {
        formContacto.addEventListener("submit", function (e) {
            e.preventDefault();
            
            // Simulación de envío exitoso
            alert("¡Gracias por comunicarte con Pastelería Tortaza! Te responderemos muy pronto.");
            formContacto.reset();
        });
    }

    // Efecto de desplazamiento suave (Smooth Scroll)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});