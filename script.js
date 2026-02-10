// Efecto suave al hacer scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animación simple al cargar
window.addEventListener('load', () => {
    const heroText = document.querySelector('.hero-text');
    heroText.style.opacity = 0;
    heroText.style.transform = "translateY(20px)";
    
    setTimeout(() => {
        heroText.style.transition = "all 1s ease";
        heroText.style.opacity = 1;
        heroText.style.transform = "translateY(0)";
    }, 200);
});
// --- LÓGICA DEL LIGHTBOX (VISOR) ---

const lightbox = document.getElementById('imageModal');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close-btn');

// Seleccionamos TODAS las imágenes que están dentro de las tarjetas de la galería
const galleryImages = document.querySelectorAll('.card-image img');

galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        // 1. Ponemos la ruta de la imagen clickeada en el visor
        lightboxImg.src = image.src;
        // 2. Activamos la clase que lo hace visible
        lightbox.classList.add('active');
        // 3. Bloqueamos el scroll del cuerpo para que no se mueva la web de fondo
        document.body.style.overflow = 'hidden';
    });
});

// Función para cerrar el visor
const closeLightbox = () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto'; // Reactivar scroll
};

// Cerrar al pulsar la X
closeBtn.addEventListener('click', closeLightbox);

// Cerrar al pulsar fuera de la imagen (en el fondo oscuro)
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Cerrar con la tecla ESC (muy buena práctica de usabilidad)
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
    }
});