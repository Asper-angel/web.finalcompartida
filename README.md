<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Trabajo Compartido final</title>
     <meta name="description" content="Presentación de nuestra Biografia profesonal sobre nosotros.">
    <meta name="author" content="Angel Mauricio">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rzweb.com />

 <meta property="og:title" content="Portal de búsqueda | ANGEL">
    <meta property="og:description" content="Aqui mostraremos un poco de aprendizaje de pregramción.">
    <meta property="og:image" content="assets/img/img 1.0.jpg">
    <meta property="og:type" content="website">
     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"/>
     
</head>
<body>
    
    <header class="main-header">
        <h1 class="logo-title">Proyecto final</h1>

    <nav class="nav-container">
        <ul class="nav-menu">
            <li><a href="#sobre-mi" class="nav-link">Sobre Mí</a></li>
            <li><a href="#portafolio" class="nav-link">Portafolio</a></li>
            <li><a href="#contacto" class="nav-link">Contacto</a></li>
        </ul>
    </nav>
            <button id="theme-toggle" class="theme-toggle-btn" aria-label="Cambiar modo de color">
                 Modo Oscuro
            </button>
        </div>
    </header>

    <main>
        <section id="sobre-mi">
            <h2>Sobre Mí</h2>
            <p>Sección introductoria de tu perfil profesional.</p>
        </section>

        <section id="portafolio">
            <h2>Portafolio</h2>
            <p>Aquí se mostrarán tus mejores proyectos.</p>
        </section>

        <section id="contacto">
            <h2>Contacto</h2>
            <p>Formulario o enlaces a redes sociales.</p>
        </section>
    </main>

    <script>
        const toggleBtn = document.getElementById('theme-toggle');
        
        // Verifica si el usuario ya tenía una preferencia guardada
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme) {
            document.documentElement.setAttribute('data-theme', currentTheme);
            if (currentTheme === 'dark') {
                toggleBtn.textContent = ' Modo Claro';
            }
        }

        // Función para cambiar de tema
        toggleBtn.addEventListener('click', () => {
            let theme = document.documentElement.getAttribute('data-theme');
            
            if (theme === 'dark') {
                document.documentElement.removeAttribute('data-theme');
                toggleBtn.textContent = '🌙 Modo Oscuro';
                localStorage.setItem('theme', 'light');
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                toggleBtn.textContent = '☀️ Modo Claro';
                localStorage.setItem('theme', 'dark');
            }
        });
    </script>

    <main class="container">

    <section id="sobre-mi" class="section-content">
        <div class="about-grid">
            <div class="about-text">
                <h2>Sobre Mí</h2>
                <p>¡Hola! Soy Angel, mi compañero y yo somos apasionados por el desarrollo web y el diseño interactivo. Yo especializo y todavia aprendo en crear experiencias digitales optimizadas, funcionales y atractivas para el usuario final.</p>
                <p>Con meses de experiencia en el sector, ayudo a crear y profesionalmente a digitalizar sus ideas con altos estándares de calidad técnica.</p>
                
                <div class="audio-container">
                    <p><strong>Escucha mi presentación:</strong></p>
                    <audio controls>
                        <source src="audio/saludo.mp3" type="audio/mpeg">
                        <source src="audio/saludo.ogg" type="audio/ogg">
                        Tu navegador no soporta el elemento de audio.
                    </audio>
                </div>
            </div>

            <figure class="profile-figure">
                <img src="assets/img/ermo_official-profile-pic-7437435_1920.png" alt="Foto de perfil profesional" class="profile-img">
                <figcaption>Desarrollador Full Stack & Diseñador UI</figcaption>
            </figure>
        </div>
    </section>

    <hr class="divider">

    <section id="portafolio" class="section-content">
        <h2>Mis Proyectos</h2>
        
        <div class="swiper mySwiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="assets/img/img2.0.jpg" alt="Proyecto E-commerce">
                    <div class="slide-caption">Plataforma de Comercio Electrónico</div>
                </div>
                <div class="swiper-slide">
                    <img src="assets/img/img0.3.png" alt="Proyecto Dashboard">
                    <div class="slide-caption">Panel de Control de Analítica</div>
                </div>
                <div class="swiper-slide">
                    <img src="assets/img/img0.4.png" alt="Proyecto App Móvil">
                    <div class="slide-caption">Aplicación Móvil de Gestión de Tareas</div>
                </div>
            </div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-pagination"></div>
        </div>

        <div class="video-container">
            <h3>Proceso Técnico en Acción</h3>
            <p>Un breve vistazo a cómo optimizo el flujo de trabajo de desarrollo moderno.</p>
            <video controls width="100%" poster="https://via.placeholder.com/800x450?text=Miniatura+del+Video">
                <source src="video/proceso-tecnico.mp4" type="video/mp4">
                <source src="video/proceso-tecnico.webm" type="video/webm">
                Tu navegador no soporta el elemento de video nativo.
            </video>
        </div>
    </section>

    <hr class="divider">

    <section id="servicios" class="section-content">
        <h2>Servicios y Tarifas</h2>
        <p>A continuación se detallan los servicios principales, tiempos estimados de entrega y costos base orientativos.</p>
        
        <div class="table-responsive">
            <table class="services-table">
                <thead>
                    <tr>
                        <th>Servicio</th>
                        <th>Descripción</th>
                        <th>Tiempo de Entrega</th>
                        <th>Costo Base</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Desarrollo Landing Page</strong></td>
                        <td>Sitio web de una sola página optimizado para conversión.</td>
                        <td>3 - 5 días hábiles</td>
                        <td>$250 USD</td>
                    </tr>
                    <tr>
                        <td><strong>Sitio Web Corporativo</strong></td>
                        <td>Hasta 5 secciones internas, autoadministrable y SEO básico.</td>
                        <td>2 semanas</td>
                        <td>$600 USD</td>
                    </tr>
                    <tr>
                        <td><strong>Tienda Online (E-commerce)</strong></td>
                        <td>Pasarela de pagos, gestión de inventario y carrito.</td>
                        <td>3 - 4 semanas</td>
                        <td>$1,200 USD</td>
                    </tr>
                    <tr>
                        <td><strong>Consultoría Técnica</strong></td>
                        <td>Auditoría de rendimiento web y optimización SEO.</td>
                        <td>Por hora</td>
                        <td>$50 USD / h</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>

    <hr class="divider">

    <section id="contacto" class="section-content">
        <h2>Contacto</h2>
        <div class="contact-grid">
            
            <form action="#" method="POST" class="contact-form">
                <div class="form-group">
                    <label for="nombre">Nombre Completo *</label>
                    <input type="text" id="nombre" name="nombre" required placeholder="Ej. Juan Pérez">
                </div>

                <div class="form-group">
                    <label for="email">Correo Electrónico *</label>
                    <input type="email" id="email" name="email" required placeholder="ejemplo@correo.com">
                </div>

                <div class="form-group">
                    <label for="asunto">Asunto *</label>
                    <input type="text" id="asunto" name="asunto" required placeholder="Motivo del mensaje">
                </div>

                <div class="form-group">
                    <label for="mensaje">Mensaje *</label>
                    <textarea id="mensaje" name="mensaje" rows="5" required placeholder="Escribe aquí los detalles de tu proyecto..."></textarea>
                </div>

                <button type="submit" class="submit-btn">Enviar Mensaje</button>
            </form>

            <div class="map-container">
                <h3>Zona de Cobertura / Ubicación</h3>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15614.270967311604!2d-77.0432337891915!3d-11.935141367362327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c7d2ee01a3c1%3A0x29195924de6dea47!2sMaderoterapia%20Per%C3%BA!5e0!3m2!1ses-419!2spe!4v1781458479891!5m2!1ses-419!2spe" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>" 
                    width="100%" 
                    height="350" 
                    style="border:0;" 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>

        </div>
    </section>

</main>
    
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

<script>
    const swiper = new Swiper(".mySwiper", {
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
    });
</script> 
<script src="scripts/main.js"></script>

<aside class="sidebar" aria-label="Información complementaria">
    
    <div class="sidebar-box">
        <h3>Conectemos</h3>
        <ul class="social-links">
            <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <span>💼</span> LinkedIn
                </a>
            </li>
            <li>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <span>💻</span> GitHub
                </a>
            </li>
            <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <span>🐦</span> Twitter / X
                </a>
            </li>
        </ul>
    </div>

    <div class="sidebar-box">
        <h3>Glosario Breve</h3>
        <dl class="glossary">
            <dt>UI (Interfaz de Usuario)</dt>
            <dd>El conjunto de elementos visuales y pantallas con los que un usuario interactúa en un sitio web o aplicación.</dd>
            
            <dt>SEO</dt>
            <dd>Optimización para motores de búsqueda; prácticas para mejorar la visibilidad de una web en Google.</dd>
            
            <dt>Responsive</dt>
            <dd>Diseño web adaptivo que se despliega correctamente en cualquier tamaño de pantalla (móvil, tablet, PC).</dd>
        </dl>
    </div>
</aside>

<footer class="main-footer">
    <div class="footer-content">
        <p>&copy; 2026 MiPortafolio. Todos los derechos reservados.</p>
        <nav class="footer-nav" aria-label="Enlaces del pie de página">
            <a href="servicios.html" class="footer-link">Ver catálogo de servicios detallado &rarr;</a>
        </nav>
    </div>
    <p>&copy; 2026 MiPortafolio. Todos los derechos reservados.</p>
    <p>
        <a href="servicios.html">Ver Servicios</a>
    </p>
</footer>
</body>
</html>
