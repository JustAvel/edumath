/* ================================
   EduMath - JavaScript Principal
   Universidad Técnica de Machala
   ================================ */

// ================================
// Configuración de rutas de diapositivas
// Coloca tus diapositivas en la carpeta: assets/slides/tema{N}/
// Ejemplo: assets/slides/tema1/slide1.jpg, slide2.jpg, etc.
// ================================
const slidesConfig = {
    1: {
        title: "Sucesiones multiplicativas y con división",
        folder: "assets/slides/tema1/",
        // Indica cuántas diapositivas tiene este tema
        count: 3,
        // Extensión de las imágenes (jpg, png, etc.)
        extension: "png"
    },
    2: {
        title: "Significado de la fracción",
        folder: "assets/slides/tema2/",
        count: 2,
        extension: "png"
    },
    3: {
        title: "Fracciones equivalentes por amplificación y simplificación",
        folder: "assets/slides/tema3/",
        count: 2,
        extension: "png"
    },
    4: {
        title: "Relaciones de orden en los números fraccionarios",
        folder: "assets/slides/tema4/",
        count: 3,
        extension: "png"
    },
    5: {
        title: "Múltiplos y divisores",
        folder: "assets/slides/tema5/",
        count: 2,
        extension: "png"
    },
    6: {
        title: "Criterios de divisibilidad",
        folder: "assets/slides/tema6/",
        count: 2,
        extension: "png"
    },
    7: {
        title: "Unidades de área convencionales",
        folder: "assets/slides/tema7/",
        count: 3,
        extension: "png"
    }
};

// Datos de los profesores
const professorsData = {
    1: {
        name: "Luiggi Cabrera",
        role: "Desarrollador - Estudiante UTMACH",
        avatar: "fas fa-user-graduate",
        image: "assets/img/luiggi.png",
        description: "Estudiante de la Universidad Técnica de Machala, apasionado por la tecnología y la educación. Comprometido con el desarrollo de herramientas innovadoras para el aprendizaje.",
        details: {
            institution: "Universidad Técnica de Machala",
            career: null,
            role: "Desarrollador del proyecto EduMath",
            location: "El Guabo - El Oro - Ecuador",
            email: "cabreraluiggi09@gmail.com",
            phone: "+593 98 963 9187",
            skills: ["Desarrollo Web", "Diseño de Interfaces", "Programación", "Educación Digital"]
        }
    },
    2: {
        name: "Justin Martínez",
        role: "Desarrollador - Estudiante UTMACH",
        avatar: "fas fa-user-graduate",
        image: "assets/img/justin.png",
        description: "Estudiante de la Universidad Técnica de Machala, enfocado en crear soluciones educativas innovadoras que faciliten el aprendizaje de las matemáticas.",
        details: {
            institution: "Universidad Técnica de Machala",
            career: "Tecnólogo en Desarrollo de Software",
            role: "Desarrollador del proyecto EduMath",
            location: "Machala - El Oro - Ecuador",
            email: "justin.pg.avelino@gmail.com",
            phone: "+593 96 781 5518",
            skills: ["Desarrollo Web", "Bases de Datos", "Gamificación", "UX/UI"]
        }
    }
};

// Estado de la aplicación
let currentSlide = 0;
let currentTopic = null;
let isLoggedIn = false;
let currentUser = null;

// ================================
// Inicialización
// ================================
document.addEventListener('DOMContentLoaded', function() {
    // Ocultar loader después de cargar
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if (loader) loader.classList.add('hidden');
    }, 1500);

    // Inicializar navegación
    initNavigation();
    
    // Inicializar formularios de autenticación
    initAuthForms();
    
    // Verificar si hay usuario guardado
    checkSavedUser();
    
    // Mostrar tutorial en primera visita
    checkFirstVisit();
    
    // Actualizar contador de estrellas
    updateTotalStars();
    
    // Actualizar tarjetas de acceso rápido
    updateQuickAccess();
});

// ================================
// Navegación
// ================================
function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item[data-section]');
    
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('data-section');
            
            // Actualizar navegación activa
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
            
            // Mostrar sección correspondiente
            showSection(sectionId);
            
            // Cerrar sidebar en móvil
            document.getElementById('sidebar').classList.remove('active');
        });
    });
    
    // Toggle sidebar en móvil
    document.getElementById('sidebarToggle').addEventListener('click', function() {
        document.getElementById('sidebar').classList.toggle('active');
    });
    
    // Cerrar sidebar al hacer click fuera
    document.addEventListener('click', function(e) {
        const sidebar = document.getElementById('sidebar');
        const toggle = document.getElementById('sidebarToggle');
        
        if (!sidebar.contains(e.target) && !toggle.contains(e.target)) {
            sidebar.classList.remove('active');
        }
    });
}

function showSection(sectionId) {
    // Ocultar todas las secciones
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('hidden');
    });
    
    // Mostrar la sección seleccionada
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.remove('hidden');
    }
}

function scrollToSection(sectionId) {
    // Actualizar navegación
    document.querySelectorAll('.nav-item').forEach(nav => {
        nav.classList.remove('active');
        if (nav.getAttribute('data-section') === sectionId) {
            nav.classList.add('active');
        }
    });
    
    // Mostrar sección
    showSection(sectionId);
}

// Función para navegar a una sección (usada por el tour y otras funciones)
function navigateTo(sectionId) {
    // Actualizar navegación activa
    document.querySelectorAll('.nav-item[data-section]').forEach(nav => {
        nav.classList.remove('active');
        if (nav.getAttribute('data-section') === sectionId) {
            nav.classList.add('active');
        }
    });
    
    // Mostrar la sección
    showSection(sectionId);
}

// ================================
// Temas de Estudio (Acordeón)
// ================================
function toggleTopic(topicId) {
    const topicCard = document.querySelector(`.topic-card[data-topic="${topicId}"]`);
    const isExpanded = topicCard.classList.contains('expanded');
    
    // Cerrar todos los temas
    document.querySelectorAll('.topic-card').forEach(card => {
        card.classList.remove('expanded');
    });
    
    // Abrir el tema seleccionado si estaba cerrado
    if (!isExpanded) {
        topicCard.classList.add('expanded');
    }
}

// ================================
// Modal de Contenido (Visor de Diapositivas)
// ================================
function openContentModal(topicId) {
    currentTopic = topicId;
    currentSlide = 0;
    
    const topic = slidesConfig[topicId];
    if (!topic) return;
    
    // Guardar como último tema visto
    saveLastTopic(topicId);
    
    document.getElementById('contentTitle').textContent = topic.title;
    updateSlide();
    
    document.getElementById('contentModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

// closeContentModal está definida al final del archivo

function updateSlide() {
    const topic = slidesConfig[currentTopic];
    if (!topic) return;
    
    const contentBody = document.getElementById('contentBody');
    const slideNumber = currentSlide + 1;
    const imagePath = `${topic.folder}slide${slideNumber}.${topic.extension}`;
    
    contentBody.innerHTML = `
        <div class="slides-viewer">
            <div class="slides-container">
                <img src="${imagePath}" 
                     alt="Diapositiva ${slideNumber}" 
                     onerror="this.onerror=null; this.parentElement.innerHTML='<div class=\\'slides-placeholder\\'><i class=\\'fas fa-image\\'></i><p>Diapositiva no encontrada</p><p style=\\'font-size: 0.875rem; margin-top: 10px;\\'>Coloca tu imagen en:<br><code>${imagePath}</code></p></div>';">
            </div>
            <div class="slides-thumbnails" id="slidesThumbnails">
                ${generateThumbnails(topic)}
            </div>
        </div>
    `;
    
    // Actualizar indicador
    document.getElementById('slideIndicator').textContent = 
        `${slideNumber} / ${topic.count}`;
    
    // Actualizar botones de navegación
    document.getElementById('prevSlide').disabled = currentSlide === 0;
    document.getElementById('nextSlide').disabled = currentSlide === topic.count - 1;
    
    // Actualizar thumbnail activo
    updateActiveThumbnail();
}

function generateThumbnails(topic) {
    let thumbnails = '';
    for (let i = 1; i <= topic.count; i++) {
        const imagePath = `${topic.folder}slide${i}.${topic.extension}`;
        const isActive = i === currentSlide + 1 ? 'active' : '';
        thumbnails += `
            <div class="slide-thumb ${isActive}" onclick="goToSlide(${i - 1})">
                <img src="${imagePath}" alt="Miniatura ${i}" onerror="this.style.display='none'">
            </div>
        `;
    }
    return thumbnails;
}

function updateActiveThumbnail() {
    document.querySelectorAll('.slide-thumb').forEach((thumb, index) => {
        thumb.classList.toggle('active', index === currentSlide);
    });
}

function goToSlide(index) {
    const topic = slidesConfig[currentTopic];
    if (index >= 0 && index < topic.count) {
        currentSlide = index;
        updateSlide();
    }
}

function nextSlide() {
    const topic = slidesConfig[currentTopic];
    if (currentSlide < topic.count - 1) {
        currentSlide++;
        updateSlide();
        updateFullscreenSlide();
    }
}

function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
        updateSlide();
        updateFullscreenSlide();
    }
}

// ================================
// Modo Pantalla Completa para Diapositivas
// ================================
let isFullscreenMode = false;

function toggleFullscreenSlide() {
    const fullscreenContainer = document.getElementById('fullscreenSlides');
    
    if (!isFullscreenMode) {
        // Activar pantalla completa
        isFullscreenMode = true;
        fullscreenContainer.classList.add('active');
        document.body.style.overflow = 'hidden';
        updateFullscreenSlide();
    } else {
        closeFullscreenSlide();
    }
}

function closeFullscreenSlide() {
    const fullscreenContainer = document.getElementById('fullscreenSlides');
    isFullscreenMode = false;
    fullscreenContainer.classList.remove('active');
    // Restaurar el scroll del body
    document.body.style.overflow = '';
}

function updateFullscreenSlide() {
    if (!isFullscreenMode) return;
    
    const topic = slidesConfig[currentTopic];
    if (!topic) return;
    
    const slideNumber = currentSlide + 1;
    const imagePath = `${topic.folder}slide${slideNumber}.${topic.extension}`;
    
    // Actualizar imagen
    const fullscreenImage = document.getElementById('fullscreenImage');
    if (fullscreenImage) {
        fullscreenImage.src = imagePath;
        fullscreenImage.alt = `Diapositiva ${slideNumber}`;
    }
    
    // Actualizar indicador
    const indicator = document.getElementById('fullscreenIndicator');
    if (indicator) {
        indicator.textContent = `${slideNumber} / ${topic.count}`;
    }
    
    // Actualizar estado de botones de navegación
    const prevBtn = document.querySelector('.fullscreen-prev');
    const nextBtn = document.querySelector('.fullscreen-next');
    
    if (prevBtn) prevBtn.disabled = currentSlide === 0;
    if (nextBtn) nextBtn.disabled = currentSlide === topic.count - 1;
}

// Cerrar pantalla completa con tecla Escape
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && isFullscreenMode) {
        closeFullscreenSlide();
    }
});

// ================================
// Gestos táctiles para pantalla completa
// ================================
let touchStartX = 0;
let touchStartY = 0;
let touchEndX = 0;
let touchEndY = 0;

function initFullscreenTouchGestures() {
    const fullscreenContainer = document.getElementById('fullscreenSlides');
    if (!fullscreenContainer) return;
    
    fullscreenContainer.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });
    
    fullscreenContainer.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        touchEndY = e.changedTouches[0].screenY;
        handleFullscreenSwipe();
    }, { passive: true });
}

function handleFullscreenSwipe() {
    if (!isFullscreenMode) return;
    
    // Detectar si estamos en modo rotado (portrait)
    const isRotated = window.matchMedia('(max-width: 768px) and (orientation: portrait)').matches;
    
    let deltaX = touchEndX - touchStartX;
    let deltaY = touchEndY - touchStartY;
    
    // En modo rotado, intercambiar ejes (el swipe vertical en pantalla es horizontal en contenido rotado)
    if (isRotated) {
        const temp = deltaX;
        deltaX = -deltaY;
        deltaY = temp;
    }
    
    const minSwipeDistance = 50;
    const maxVerticalMovement = 100;
    
    // Solo procesar swipes horizontales significativos
    if (Math.abs(deltaX) > minSwipeDistance && Math.abs(deltaY) < maxVerticalMovement) {
        if (deltaX > 0) {
            // Swipe derecha -> diapositiva anterior
            prevSlide();
        } else {
            // Swipe izquierda -> diapositiva siguiente
            nextSlide();
        }
    }
}

// Inicializar gestos cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    initFullscreenTouchGestures();
});

// ================================
// Modal de Juegos
// ================================
function openGameModal(topicId) {
    const topic = slidesConfig[topicId];
    if (!topic) return;
    
    document.getElementById('gameTitle').textContent = `Juegos: ${topic.title}`;
    
    // Mostrar selector de juegos (función definida en games.js)
    if (typeof renderGameSelector === 'function') {
        document.getElementById('gameBody').innerHTML = renderGameSelector(topicId);
    } else {
        document.getElementById('gameBody').innerHTML = `
            <div class="game-loading">
                <i class="fas fa-spinner fa-spin"></i>
                <p>Cargando juegos...</p>
            </div>
        `;
    }
    
    document.getElementById('gameModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeGameModal() {
    // Cerrar cualquier tour de Shepherd activo
    if (typeof Shepherd !== 'undefined' && Shepherd.activeTour) {
        Shepherd.activeTour.cancel();
    }
    
    // Detener cualquier temporizador activo
    if (typeof stopGameTimer === 'function') {
        stopGameTimer();
    }
    
    // Limpiar el contenido del juego
    const gameBody = document.getElementById('gameBody');
    if (gameBody) {
        gameBody.innerHTML = '';
    }
    
    document.getElementById('gameModal').classList.remove('active');
    document.body.style.overflow = '';
}

// ================================
// Modal de Profesores
// ================================
function openProfessorModal(professorId) {
    const professor = professorsData[professorId];
    if (!professor) return;
    
    const modalContent = document.getElementById('professorFullInfo');
    
    modalContent.innerHTML = `
        <div class="professor-photo">
            <img src="${professor.image}" alt="${professor.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="professor-avatar-fallback" style="display: none;">
                <i class="${professor.avatar}"></i>
            </div>
        </div>
        <h2>${professor.name}</h2>
        <p class="professor-role">${professor.role}</p>
        <p style="color: var(--gray-600); margin-bottom: var(--spacing-lg);">${professor.description}</p>
        
        <div class="professor-details">
            <h4><i class="fas fa-info-circle"></i> Información</h4>
            <ul>
                <li><i class="fas fa-university"></i> ${professor.details.institution}</li>
                ${professor.details.career ? `<li><i class="fas fa-graduation-cap"></i> ${professor.details.career}</li>` : ''}
                <li><i class="fas fa-briefcase"></i> ${professor.details.role}</li>
                <li><i class="fas fa-map-marker-alt"></i> ${professor.details.location}</li>
                <li><i class="fas fa-envelope"></i> <a href="mailto:${professor.details.email}" style="color: var(--primary-color); text-decoration: none;">${professor.details.email}</a></li>
                <li><i class="fas fa-phone"></i> <a href="tel:${professor.details.phone.replace(/\s/g, '')}" style="color: var(--primary-color); text-decoration: none;">${professor.details.phone}</a></li>
            </ul>
            
            <h4 style="margin-top: var(--spacing-lg);"><i class="fas fa-star"></i> Habilidades</h4>
            <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: 8px;">
                ${professor.details.skills.map(skill => 
                    `<span style="background: var(--primary-pale); color: var(--primary-color); padding: 4px 12px; border-radius: 20px; font-size: 0.875rem;">${skill}</span>`
                ).join('')}
            </div>
        </div>
    `;
    
    document.getElementById('professorModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProfessorModal() {
    document.getElementById('professorModal').classList.remove('active');
    document.body.style.overflow = '';
}

// ================================
// Modal de Términos y Condiciones
// ================================
function openTermsModal() {
    document.getElementById('termsModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeTermsModal() {
    document.getElementById('termsModal').classList.remove('active');
    document.body.style.overflow = '';
}

// ================================
// Modal de Ayuda
// ================================
function openHelpModal() {
    document.getElementById('helpModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeHelpModal() {
    document.getElementById('helpModal').classList.remove('active');
    document.body.style.overflow = '';
    
    // Marcar como visitado
    localStorage.setItem('edumath_visited', 'true');
}

function checkFirstVisit() {
    const visited = localStorage.getItem('edumath_visited');
    const tourCompleted = localStorage.getItem('edumath_tour_completed');
    
    if (!visited && !tourCompleted) {
        // Mostrar tutorial guiado automáticamente para nuevos usuarios
        setTimeout(() => {
            startGuidedTour();
        }, 2000);
    }
}

// ================================
// Tutorial Guiado con Shepherd.js
// ================================

let tour = null;

function startGuidedTour() {
    // Cerrar modal de ayuda si está abierto
    closeHelpModal();
    
    // Verificar que Shepherd esté cargado
    if (typeof Shepherd === 'undefined') {
        console.error('Shepherd.js no está cargado');
        showToast('Error al cargar el tutorial. Por favor recarga la página.', 'error');
        return;
    }
    
    // Crear una nueva instancia del tour
    tour = new Shepherd.Tour({
        useModalOverlay: true,
        defaultStepOptions: {
            cancelIcon: {
                enabled: true
            },
            classes: 'shepherd-theme-edumath',
            scrollTo: { behavior: 'smooth', block: 'center' }
        }
    });
    
    // Asegurarse de estar en la sección de inicio
    navigateTo('inicio');
    
    // Esperar a que se cargue la sección
    setTimeout(() => {
        // Paso 1: Panel de EduMath
        tour.addStep({
            id: 'sidebar',
            text: '<div class="shepherd-title">📚 Panel de EduMath</div><div class="shepherd-text">Este es el panel principal de navegación. Desde aquí puedes acceder a todas las secciones de la plataforma educativa de la Universidad Técnica de Machala.</div>',
            attachTo: {
                element: '.sidebar',
                on: 'right'
            },
            buttons: [
                {
                    text: 'Siguiente →',
                    action: tour.next,
                    classes: 'shepherd-button-primary'
                }
            ]
        });
        
        // Paso 2: Página de Inicio
        tour.addStep({
            id: 'inicio',
            text: '<div class="shepherd-title">🏠 Página de Inicio</div><div class="shepherd-text">Haz clic aquí para acceder a la página de inicio. Es tu punto de partida donde encontrarás un resumen general de la plataforma.</div>',
            attachTo: {
                element: '.nav-item[data-section="inicio"]',
                on: 'right'
            },
            buttons: [
                {
                    text: '← Anterior',
                    action: tour.back,
                    classes: 'shepherd-button-secondary'
                },
                {
                    text: 'Siguiente →',
                    action: tour.next,
                    classes: 'shepherd-button-primary'
                }
            ]
        });
        
        // Paso 3: Recursos Disponibles
        tour.addStep({
            id: 'recursos',
            text: '<div class="shepherd-title">📦 Recursos Disponibles</div><div class="shepherd-text">Estas tarjetas te muestran los recursos de la plataforma: <strong>7 temas</strong> de matemáticas disponibles y <strong>14 juegos</strong> interactivos para practicar. Son solo informativas.</div>',
            attachTo: {
                element: '#recursosSection',
                on: 'bottom'
            },
            buttons: [
                {
                    text: '← Anterior',
                    action: tour.back,
                    classes: 'shepherd-button-secondary'
                },
                {
                    text: 'Siguiente →',
                    action: tour.next,
                    classes: 'shepherd-button-primary'
                }
            ]
        });
        
        // Paso 4: Tu Progreso
        tour.addStep({
            id: 'progreso',
            text: '<div class="shepherd-title">⭐ Tu Progreso</div><div class="shepherd-text">Aquí verás las <strong>estrellas</strong> que ganas al completar los juegos. ¡Mientras más practiques, más estrellas acumularás!</div>',
            attachTo: {
                element: '#progresoSection',
                on: 'bottom'
            },
            buttons: [
                {
                    text: '← Anterior',
                    action: tour.back,
                    classes: 'shepherd-button-secondary'
                },
                {
                    text: 'Siguiente →',
                    action: tour.next,
                    classes: 'shepherd-button-primary'
                }
            ]
        });
        
        // Paso 5: Temas de Estudio
        tour.addStep({
            id: 'temas-nav',
            text: '<div class="shepherd-title">📖 Temas de Estudio</div><div class="shepherd-text">Este botón te lleva a la sección de Temas de Estudio. Aquí encontrarás todos los contenidos educativos organizados por tema.</div>',
            attachTo: {
                element: '.nav-item[data-section="temas"]',
                on: 'right'
            },
            buttons: [
                {
                    text: '← Anterior',
                    action: tour.back,
                    classes: 'shepherd-button-secondary'
                },
                {
                    text: 'Siguiente →',
                    action: () => {
                        navigateTo('temas');
                        setTimeout(() => {
                            const firstTopic = document.querySelector('.topic-card[data-topic="1"]');
                            if (firstTopic && !firstTopic.classList.contains('expanded')) {
                                toggleTopic(1);
                            }
                            setTimeout(() => tour.next(), 300);
                        }, 300);
                    },
                    classes: 'shepherd-button-primary'
                }
            ]
        });
        
        // Paso 6: Tarjeta de Tema
        tour.addStep({
            id: 'topic-card',
            text: '<div class="shepherd-title">📋 Tarjeta de Tema</div><div class="shepherd-text">Cada tema está organizado en una tarjeta como esta. Contiene el título del tema, un ícono representativo y una insignia con el número de tema.</div>',
            attachTo: {
                element: '.topic-card[data-topic="1"]',
                on: 'top'
            },
            buttons: [
                {
                    text: '← Anterior',
                    action: () => {
                        navigateTo('inicio');
                        setTimeout(() => tour.back(), 300);
                    },
                    classes: 'shepherd-button-secondary'
                },
                {
                    text: 'Siguiente →',
                    action: tour.next,
                    classes: 'shepherd-button-primary'
                }
            ]
        });
        
        // Paso 7: Desplegar Tema
        tour.addStep({
            id: 'topic-header',
            text: '<div class="shepherd-title">👆 Desplegar Tema</div><div class="shepherd-text">Haz clic en esta zona del encabezado para desplegar o contraer el contenido del tema. Al expandirse verás las opciones disponibles.</div>',
            attachTo: {
                element: '.topic-card[data-topic="1"] .topic-header',
                on: 'top'
            },
            buttons: [
                {
                    text: '← Anterior',
                    action: tour.back,
                    classes: 'shepherd-button-secondary'
                },
                {
                    text: 'Siguiente →',
                    action: tour.next,
                    classes: 'shepherd-button-primary'
                }
            ]
        });
        
        // Paso 8: Contenido y Juegos
        tour.addStep({
            id: 'topic-actions',
            text: '<div class="shepherd-title">🎮 Contenido y Juegos</div><div class="shepherd-text"><strong>"Contenido"</strong> abre las diapositivas educativas con la teoría del tema.<br><br><strong>"Juega y aprende"</strong> te lleva a los juegos interactivos para practicar lo aprendido de forma divertida.</div>',
            attachTo: {
                element: '.topic-card[data-topic="1"] .topic-actions',
                on: 'top'
            },
            buttons: [
                {
                    text: '← Anterior',
                    action: tour.back,
                    classes: 'shepherd-button-secondary'
                },
                {
                    text: 'Siguiente →',
                    action: tour.next,
                    classes: 'shepherd-button-primary'
                }
            ]
        });
        
        // Paso 9: Inicio de Sesión
        tour.addStep({
            id: 'auth',
            text: '<div class="shepherd-title">🔐 Inicio de Sesión</div><div class="shepherd-text">Este botón abre la ventana de inicio de sesión. Regístrate o inicia sesión para guardar tu progreso y mantener un registro de tus logros.</div>',
            attachTo: {
                element: '#authBtn',
                on: 'left'
            },
            buttons: [
                {
                    text: '← Anterior',
                    action: tour.back,
                    classes: 'shepherd-button-secondary'
                },
                {
                    text: 'Siguiente →',
                    action: tour.next,
                    classes: 'shepherd-button-primary'
                }
            ]
        });
        
        // Paso 10: Ayuda Disponible
        tour.addStep({
            id: 'help',
            text: '<div class="shepherd-title">❓ Ayuda Disponible</div><div class="shepherd-text">¡Este tutorial siempre está disponible! Puedes acceder a él desde el menú "Ayuda" en el panel lateral izquierdo, o haciendo clic en este botón flotante de ayuda.<br><br><strong>¡Ahora estás listo para explorar EduMath!</strong> 🎉</div>',
            attachTo: {
                element: '.help-float',
                on: 'left'
            },
            buttons: [
                {
                    text: '← Anterior',
                    action: tour.back,
                    classes: 'shepherd-button-secondary'
                },
                {
                    text: '¡Finalizar! 🎉',
                    action: () => {
                        tour.complete();
                        finishTour();
                    },
                    classes: 'shepherd-button-primary'
                }
            ]
        });
        
        // Eventos del tour
        tour.on('cancel', () => {
            localStorage.setItem('edumath_tour_completed', 'true');
            localStorage.setItem('edumath_visited', 'true');
            showToast('Puedes volver a ver el tutorial desde el menú de Ayuda.', 'info');
            navigateTo('inicio');
        });
        
        // Iniciar el tour
        tour.start();
    }, 500);
}

function finishTour() {
    // Marcar como completado
    localStorage.setItem('edumath_tour_completed', 'true');
    localStorage.setItem('edumath_visited', 'true');
    
    // Volver a inicio
    navigateTo('inicio');
    
    showToast('🎉 ¡Tutorial completado! Ya puedes explorar EduMath.', 'success');
}

// ================================
// Autenticación
// ================================
function openAuthModal() {
    document.getElementById('authModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeAuthModal() {
    document.getElementById('authModal').classList.remove('active');
    document.body.style.overflow = '';
    resetAuthForms();
}

function toggleAuthForm() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const authTitle = document.getElementById('authTitle');
    const authSubtitle = document.getElementById('authSubtitle');
    const switchText = document.getElementById('authSwitchText');
    const switchBtn = document.getElementById('authSwitchBtn');
    
    if (loginForm.classList.contains('hidden')) {
        // Mostrar login
        loginForm.classList.remove('hidden');
        registerForm.classList.add('hidden');
        authTitle.textContent = '¡Bienvenido de nuevo!';
        authSubtitle.textContent = 'Ingresa tus datos para continuar';
        switchText.textContent = '¿No tienes cuenta?';
        switchBtn.textContent = 'Crear cuenta';
    } else {
        // Mostrar registro
        loginForm.classList.add('hidden');
        registerForm.classList.remove('hidden');
        authTitle.textContent = 'Crear cuenta';
        authSubtitle.textContent = 'Regístrate para comenzar a aprender';
        switchText.textContent = '¿Ya tienes cuenta?';
        switchBtn.textContent = 'Iniciar sesión';
    }
}

// Función para mostrar/ocultar contraseña
function togglePassword(inputId) {
    const input = document.getElementById(inputId);
    const button = input.parentElement.querySelector('.password-toggle i');
    
    if (input.type === 'password') {
        input.type = 'text';
        button.classList.remove('fa-eye');
        button.classList.add('fa-eye-slash');
    } else {
        input.type = 'password';
        button.classList.remove('fa-eye-slash');
        button.classList.add('fa-eye');
    }
}

function resetAuthForms() {
    document.getElementById('loginForm').reset();
    document.getElementById('registerForm').reset();
    document.getElementById('loginForm').classList.remove('hidden');
    document.getElementById('registerForm').classList.add('hidden');
    document.getElementById('authTitle').textContent = '¡Bienvenido de nuevo!';
    document.getElementById('authSubtitle').textContent = 'Ingresa tus datos para continuar';
    document.getElementById('authSwitchText').textContent = '¿No tienes cuenta?';
    document.getElementById('authSwitchBtn').textContent = 'Crear cuenta';
}

function initAuthForms() {
    // Formulario de login
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        
        // Simulación de login (se conectará a MySQL después)
        simulateLogin(email, password);
    });
    
    // Formulario de registro
    document.getElementById('registerForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('registerName').value;
        const email = document.getElementById('registerEmail').value;
        const age = document.getElementById('registerAge').value;
        const password = document.getElementById('registerPassword').value;
        const confirm = document.getElementById('registerConfirm').value;
        
        // Validar contraseñas
        if (password !== confirm) {
            showToast('Las contraseñas no coinciden', 'error');
            return;
        }
        
        // Simulación de registro (se conectará a MySQL después)
        simulateRegister(name, email, age, password);
    });
}

function simulateLogin(email, password) {
    // Simulación temporal - se reemplazará con conexión a MySQL
    const savedUser = localStorage.getItem('edumath_user');
    
    if (savedUser) {
        const user = JSON.parse(savedUser);
        if (user.email === email) {
            loginSuccess(user);
            return;
        }
    }
    
    // Login de demostración
    if (email && password) {
        const user = {
            name: email.split('@')[0],
            email: email
        };
        loginSuccess(user);
    } else {
        showToast('Por favor completa todos los campos', 'error');
    }
}

function simulateRegister(name, email, age, password) {
    // Simulación temporal - se reemplazará con conexión a MySQL
    const user = {
        name: name,
        email: email,
        age: age
    };
    
    // Guardar en localStorage temporalmente
    localStorage.setItem('edumath_user', JSON.stringify(user));
    
    showToast('¡Registro exitoso!', 'success');
    loginSuccess(user);
}

function loginSuccess(user) {
    isLoggedIn = true;
    currentUser = user;
    
    // Actualizar UI
    const authBtn = document.getElementById('authBtn');
    authBtn.innerHTML = `
        <i class="fas fa-user"></i>
        <span>${user.name}</span>
    `;
    authBtn.onclick = showUserMenu;
    
    closeAuthModal();
    showToast(`¡Bienvenido, ${user.name}!`, 'success');
}

function showUserMenu() {
    // Simple logout por ahora
    if (confirm('¿Deseas cerrar sesión?')) {
        logout();
    }
}

function logout() {
    isLoggedIn = false;
    currentUser = null;
    
    // Actualizar UI
    const authBtn = document.getElementById('authBtn');
    authBtn.innerHTML = `
        <i class="fas fa-sign-in-alt"></i>
        <span>Iniciar Sesión</span>
    `;
    authBtn.onclick = openAuthModal;
    
    showToast('Sesión cerrada', 'success');
}

function checkSavedUser() {
    const savedUser = localStorage.getItem('edumath_user');
    if (savedUser) {
        try {
            const user = JSON.parse(savedUser);
            loginSuccess(user);
        } catch (e) {
            localStorage.removeItem('edumath_user');
        }
    }
}

// ================================
// Notificaciones Toast
// ================================
function showToast(message, type = 'success') {
    // Remover toast existente
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }
    
    // Crear nuevo toast
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    
    // Mostrar
    setTimeout(() => toast.classList.add('show'), 10);
    
    // Ocultar después de 3 segundos
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ================================
// Cerrar modales con Escape
// ================================
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeAuthModal();
        closeContentModal();
        closeGameModal();
        closeProfessorModal();
        closeHelpModal();
    }
});

// ================================
// Cerrar modales al hacer click fuera
// ================================
document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', function(e) {
        if (e.target === this) {
            closeAuthModal();
            closeContentModal();
            closeGameModal();
            closeProfessorModal();
            closeHelpModal();
        }
    });
});

// ================================
// Navegación con teclado en diapositivas
// ================================
document.addEventListener('keydown', function(e) {
    if (document.getElementById('contentModal').classList.contains('active')) {
        if (e.key === 'ArrowRight') {
            nextSlide();
        } else if (e.key === 'ArrowLeft') {
            prevSlide();
        }
    }
});

// ================================
// Función para cerrar modal de contenido
// ================================
function closeContentModal() {
    const modal = document.getElementById('contentModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// ================================
// Actualizar contador de estrellas
// ================================
function updateTotalStars() {
    let totalStars = 0;
    
    // Lista de todos los IDs de juegos
    const gameIds = [
        'secuencia-pop', 'memoria-sucesiones',
        'pizza-fractions', 'fracciones-pop',
        'match-equivalentes', 'escalera-fracciones',
        'ordenar-carrera', 'mayor-menor-battle',
        'atrapa-multiplos', 'divisor-puzzle',
        'clasificador-express', 'ruleta-divisible',
        'numero-meta', 'calculadora-rota'
    ];
    
    // Sumar estrellas de todos los juegos
    gameIds.forEach(gameId => {
        const starsKey = `edumath_stars_${gameId}`;
        const stars = parseInt(localStorage.getItem(starsKey) || '0');
        totalStars += stars;
    });
    
    // Actualizar el elemento del DOM
    const totalStarsElement = document.getElementById('totalStars');
    if (totalStarsElement) {
        totalStarsElement.textContent = totalStars;
    }
}

// Función para agregar estrellas a un juego
function addGameStars(gameId, stars) {
    const starsKey = `edumath_stars_${gameId}`;
    const currentStars = parseInt(localStorage.getItem(starsKey) || '0');
    const newStars = Math.min(currentStars + stars, 5); // Máximo 5 estrellas
    localStorage.setItem(starsKey, newStars);
    updateTotalStars();
}

// ================================
// Sistema de Acceso Rápido (Historial)
// ================================
function saveLastTopic(topicId) {
    const topic = slidesConfig[topicId];
    if (topic) {
        localStorage.setItem('edumath_last_topic', JSON.stringify({
            id: topicId,
            name: topic.title
        }));
        updateQuickAccess();
    }
}

function saveLastGame(topicId, gameId, gameName) {
    localStorage.setItem('edumath_last_game', JSON.stringify({
        topicId: topicId,
        gameId: gameId,
        name: gameName
    }));
    updateQuickAccess();
}

function updateQuickAccess() {
    const lastTopicCard = document.getElementById('lastTopicCard');
    const lastGameCard = document.getElementById('lastGameCard');
    const noHistoryMessage = document.getElementById('noHistoryMessage');
    
    const lastTopic = JSON.parse(localStorage.getItem('edumath_last_topic') || 'null');
    const lastGame = JSON.parse(localStorage.getItem('edumath_last_game') || 'null');
    
    let hasHistory = false;
    
    if (lastTopic && lastTopicCard) {
        document.getElementById('lastTopicName').textContent = lastTopic.name;
        lastTopicCard.style.display = 'flex';
        hasHistory = true;
    }
    
    if (lastGame && lastGameCard) {
        document.getElementById('lastGameName').textContent = lastGame.name;
        lastGameCard.style.display = 'flex';
        hasHistory = true;
    }
    
    if (noHistoryMessage) {
        noHistoryMessage.style.display = hasHistory ? 'none' : 'flex';
    }
}

function goToLastTopic() {
    const lastTopic = JSON.parse(localStorage.getItem('edumath_last_topic') || 'null');
    if (lastTopic) {
        navigateTo('temas');
        setTimeout(() => {
            toggleTopic(lastTopic.id);
            const topicCard = document.querySelector(`.topic-card[data-topic="${lastTopic.id}"]`);
            if (topicCard) {
                topicCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }, 300);
    }
}

function goToLastGame() {
    const lastGame = JSON.parse(localStorage.getItem('edumath_last_game') || 'null');
    if (lastGame) {
        navigateTo('temas');
        setTimeout(() => {
            toggleTopic(lastGame.topicId);
            setTimeout(() => {
                openGameModal(lastGame.topicId);
            }, 300);
        }, 300);
    }
}
