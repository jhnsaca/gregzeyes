// --- TRANSLATION DATA ---
const translations = {
    en: {
        "loader-name": "GREGOIRE THIBAUT",
        "nav-work": "Work",
        "nav-services": "Services",
        "nav-profile": "Profile",
        "nav-contact": "Contact",
        "nav-loc": "Based in France",
        "nav-avail": "Available Worldwide",
        "hero-title-2": "ARCHITECT",
        "hero-sub": "Photography & Art Direction",
        "section-work": "SELECTED WORKS",
        
        "work-1-title": "SPONTANEOUS",
        "work-1-desc": "The flower women / Bolivia 2024",
        "work-2-title": "SHOOTING",
        "work-2-desc": "Theater poster / France 2025",
        "work-3-title": "MOTION",
        "work-3-desc": "Kid's lesson / South Africa 2022",
        "work-4-title": "PORTRAIT",
        "work-4-desc": "Character / Brasil 2023",
        "work-5-title": "DOCUMENTARY",
        "work-5-desc": "Late for school / South Africa 2019",
        "work-6-title": "NATURAL ART",
        "work-6-desc": "Roommates / Namibia 2023",

        "section-profile-label": "02 — PROFILE",
        "profile-headline": "Gregoire <br>Thibaut",
        "profile-text": "“I approach this world through the impulse to create stories. To succeed in making an emotion live forever, through a single frozen image, or through several that, one after another, form a film — is an art in itself. That is the one I practice.”",
        "stat-projects": "Projects",
        "stat-global": "Global",
        "stat-reach": "Reach",

        "section-expertise": "EXPERTISE",
        
        "serv-1-name": "Photography",
        "serv-1-desc": "We freeze time to capture the raw essence of your brand. From high-fashion editorial spreads to intimate event coverage, every frame is composed with cinematic precision.",
        "serv-1-tags": "Tags: Editorial / Portrait / Campaigns",
        
        "serv-2-name": "Video Production",
        "serv-2-desc": "Motion dictates emotion. We produce high-end commercial spots, music videos, and brand storytelling pieces that grip the audience from the first second.",
        "serv-2-tags": "Tags: Commercial / Clips / Film",
        
        "serv-3-name": "Content Creation",
        "serv-3-desc": "Designed for the scroll. We create striking, vertical-first visual assets optimized for Instagram Reels and TikTok. High retention, high energy.",
        "serv-3-tags": "Tags: Reels / TikTok / Shorts",
        
        "serv-4-name": "Community Mgmt",
        "serv-4-desc": "It's not just about posting; it's about building a cult following. We handle your strategy and audience interaction to turn passive followers into loyal ambassadors.",
        "serv-4-tags": "Tags: Strategy / Growth / Engagement",

        "section-next": "04 — NEXT STEPS",
        "contact-cta": "LET'S BUILD<br>YOUR LEGACY",
        
        // Mailto Data
        "mail-subject": "Project Inquiry | Let's Create",
        "mail-body": "Hello Gregoire,\n\nI have seen your portfolio and I would like to discuss a potential project with you.\n\nAre you available for a short call soon?\n\nBest regards,"
    },
    
    fr: {
        "loader-name": "GREGOIRE THIBAUT",
        "nav-work": "Projets",
        "nav-services": "Services",
        "nav-profile": "Profil",
        "nav-contact": "Contact",
        "nav-loc": "Basé en France",
        "nav-avail": "Disponible Monde",
        "hero-title-2": "ARCHITECTE",
        "hero-sub": "Photographie & Direction Artistique",
        "section-work": "SÉLECTION",
        
        "work-1-title": "SPONTANÉ",
        "work-1-desc": "Les femmes fleurs / Bolivie 2024",
        "work-2-title": "SHOOTING",
        "work-2-desc": "Affiche de théâtre / France 2025",
        "work-3-title": "MOUVEMENT",
        "work-3-desc": "Leçon d'enfant / Afrique du Sud 2022",
        "work-4-title": "PORTRAIT",
        "work-4-desc": "Caractère / Brésil 2023",
        "work-5-title": "DOCUMENTAIRE",
        "work-5-desc": "En retard / Afrique du Sud 2019",
        "work-6-title": "ART NATUREL",
        "work-6-desc": "Colocataires / Namibie 2023",

        "section-profile-label": "02 — PROFIL",
        "profile-headline": "Grégoire <br>Thibaut",
        "profile-text": "« J'aborde ce monde par l'impulsion de créer des histoires. Réussir à faire vivre une émotion pour toujours, à travers une image figée, ou plusieurs qui, l'une après l'autre, forment un film — est un art en soi. C'est celui que je pratique. »",
        "stat-projects": "Projets",
        "stat-global": "Portée",
        "stat-reach": "Globale",

        "section-expertise": "EXPERTISE",
        
        "serv-1-name": "Photographie",
        "serv-1-desc": "Nous figeons le temps pour capturer l'essence brute de votre marque. Des éditos mode aux reportages intimistes, chaque image est composée avec une précision cinématographique.",
        "serv-1-tags": "Tags : Édito / Portrait / Campagnes",
        
        "serv-2-name": "Production Vidéo",
        "serv-2-desc": "Le mouvement dicte l'émotion. Nous produisons des spots publicitaires, clips musicaux et storytelling de marque qui captivent l'audience dès la première seconde.",
        "serv-2-tags": "Tags : Pub / Clips / Film",
        
        "serv-3-name": "Création de Contenu",
        "serv-3-desc": "Conçu pour le scroll. Nous créons des visuels percutants, format vertical, optimisés pour Reels et TikTok. Haute rétention, haute énergie.",
        "serv-3-tags": "Tags : Reels / TikTok / Shorts",
        
        "serv-4-name": "Community Mgmt",
        "serv-4-desc": "Ce n'est pas juste poster ; c'est bâtir un culte. Nous gérons votre stratégie et les interactions pour transformer des abonnés passifs en ambassadeurs fidèles.",
        "serv-4-tags": "Tags : Stratégie / Croissance / Engagement",

        "section-next": "04 — SUITE",
        "contact-cta": "BÂTISSONS<br>VOTRE HÉRITAGE",

        // Mailto Data
        "mail-subject": "Demande de Projet | Créons ensemble",
        "mail-body": "Bonjour Grégoire,\n\nJ'ai vu votre portfolio et je souhaiterais discuter d'un projet potentiel avec vous.\n\nÊtes-vous disponible pour un court appel bientôt ?\n\nCordialement,"
    }
};


// --- LANGUAGE FUNCTION ---
function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    
    // 1. Update Text
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key]; // innerHTML allows <br> tags
        }
    });

    // 2. Update Mailto Link Dynamically
    const mailBtn = document.getElementById('dynamic-mail-btn');
    const subject = encodeURIComponent(translations[lang]["mail-subject"]);
    const body = encodeURIComponent(translations[lang]["mail-body"]);
    mailBtn.href = `mailto:gregoirethibautpro@gmail.com?subject=${subject}&body=${body}`;

    // 3. Update Buttons UI
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if(btn.textContent.toLowerCase() === lang) {
            btn.classList.add('active');
        }
    });
}


document.addEventListener('DOMContentLoaded', () => {
    
    // --- 0. INIT LANGUAGE (Default EN) ---
    setLanguage('en');

    // --- 1. MINIMAL LOADER LOGIC ---
    const loaderScreen = document.querySelector('.loader-screen');
    const fill = document.querySelector('.loader-bar-fill');
    const percentText = document.querySelector('.loader-percentage');
    let loadProgress = 0;
    
    const interval = setInterval(() => {
        loadProgress += Math.floor(Math.random() * 3) + 1;
        if (loadProgress > 100) loadProgress = 100;
        fill.style.width = `${loadProgress}%`;
        percentText.textContent = `${loadProgress}%`;
        if (loadProgress === 100) {
            clearInterval(interval);
            setTimeout(() => {
                loaderScreen.classList.add('complete');
                document.body.classList.remove('loading-active');
            }, 500);
        }
    }, 20);

    // --- 2. LOGO FADE ON SCROLL ---
    const logo = document.getElementById('logo-trigger');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            logo.style.opacity = '0.3';
        } else {
            logo.style.opacity = '1';
        }
    });

    // --- 3. BURGER MENU LOGIC ---
    const burger = document.querySelector('.burger-menu');
    const menuLinks = document.querySelectorAll('.menu-link');
    
    burger.addEventListener('click', () => {
        document.body.classList.toggle('menu-active');
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            document.body.classList.remove('menu-active');
        });
    });

    // --- 4. CUSTOM CURSOR ---
    const dot = document.querySelector('.cursor-dot');
    const circle = document.querySelector('.cursor-circle');

    window.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;
        dot.style.left = `${x}px`;
        dot.style.top = `${y}px`;
        circle.style.left = `${x}px`;
        circle.style.top = `${y}px`;
    });

    const hoverables = document.querySelectorAll('a, .service-item, .gallery-item, .lang-switcher');
    hoverables.forEach(el => {
        el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
        el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
    });

    // --- 5. SERVICES HOVER ---
    const serviceItems = document.querySelectorAll('.service-item');
    const serviceBg = document.getElementById('service-bg');

    serviceItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const img = item.getAttribute('data-image');
            serviceBg.style.backgroundImage = `url(${img})`;
            serviceBg.classList.add('active');
        });
    });

    // --- 6. PARALLAX ---
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const parallaxImg = document.querySelector('.parallax-img');
        if(parallaxImg && scrolled < window.innerHeight) {
            parallaxImg.style.transform = `translateY(${scrolled * 0.4}px)`;
        }
    });

});
