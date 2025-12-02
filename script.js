document.addEventListener('DOMContentLoaded', () => {
    
    // --- 0. PRELOADER LOGIC (L'Ecran de Chargement) ---
    const preloader = document.querySelector('.preloader');
    const counter = document.querySelector('.counter');
    const body = document.body;

    // Bloquer le scroll pendant le chargement
    body.classList.add('loading');

    let loadValue = 0;
    
    // 1. Simulation de progression (pour que ça bouge tout de suite)
    const interval = setInterval(() => {
        if (loadValue < 90) {
            loadValue += Math.floor(Math.random() * 5); 
            if(loadValue > 90) loadValue = 90;
            if(counter) counter.textContent = loadValue;
        }
    }, 100);

    // 2. Attendre que tout le site (images/videos) soit chargé
    window.addEventListener('load', () => {
        // Arrêter la simulation
        clearInterval(interval);
        
        // Finir rapidement jusqu'à 100
        const finishInterval = setInterval(() => {
            if (loadValue < 100) {
                loadValue++;
                if(counter) counter.textContent = loadValue;
            } else {
                clearInterval(finishInterval);
                
                // 3. Déclencher l'animation de sortie (Le Rideau se lève)
                setTimeout(() => {
                    if(preloader) preloader.classList.add('finished');
                    body.classList.remove('loading'); // Réactiver le scroll
                    
                }, 500); // Petite pause à 100% avant de lever le rideau
            }
        }, 10); // Compte très vite jusqu'à 100
    });


    // --- 1. CURSOR LOGIC (Le Curseur Custom) ---
    const dot = document.querySelector('[data-cursor-dot]');
    const outline = document.querySelector('[data-cursor-outline]');
    
    if(dot && outline) {
        window.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;
            dot.style.left = `${posX}px`;
            dot.style.top = `${posY}px`;
            outline.animate({ left: `${posX}px`, top: `${posY}px` }, { duration: 500, fill: "forwards" });
        });
    }

    const hoverables = document.querySelectorAll('a, .nav-link, button, .grid-item');
    hoverables.forEach(el => {
        el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
        el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
    });


    // --- 2. TRANSITION LOGIC (Le Changement de Page) ---
    const navLinks = document.querySelectorAll('.nav-link');
    const curtain = document.querySelector('.curtain');
    const curtainContent = document.querySelector('.curtain-content');
    const pages = document.querySelectorAll('.page');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('data-target');
            const targetPage = document.getElementById(targetId);

            if (!targetPage) return; // Sécurité si la page n'existe pas

            // Si on est déjà sur la page, on ne fait rien
            if(targetPage.classList.contains('active') && !link.classList.contains('logo')) return;

            // 1. Le Rideau descend
            curtain.classList.remove('exit');
            curtain.classList.add('active');
            
            setTimeout(() => {
                curtainContent.style.opacity = '1';
            }, 300);

            // 2. On change le contenu derrière le rideau
            setTimeout(() => {
                window.scrollTo(0,0);
                
                pages.forEach(p => p.classList.remove('active'));
                targetPage.classList.add('active');

            }, 1000); 

            // 3. Le Rideau remonte
            setTimeout(() => {
                curtainContent.style.opacity = '0';
            }, 1200);

            setTimeout(() => {
                curtain.classList.remove('active');
                curtain.classList.add('exit'); 
            }, 1500);
        });
    });

});
