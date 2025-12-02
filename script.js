document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. PRELOADER & HERO LOGIC ---
    const preloader = document.querySelector('.preloader');
    const counter = document.querySelector('.counter');
    const body = document.body;

    body.classList.add('loading');

    let loadValue = 0;
    
    // Simulate initial loading
    const interval = setInterval(() => {
        if (loadValue < 90) {
            loadValue += Math.floor(Math.random() * 5); 
            if(loadValue > 90) loadValue = 90;
            if(counter) counter.textContent = loadValue;
        }
    }, 100);

    window.addEventListener('load', () => {
        clearInterval(interval);
        
        // Fast finish
        const finishInterval = setInterval(() => {
            if (loadValue < 100) {
                loadValue++;
                if(counter) counter.textContent = loadValue;
            } else {
                clearInterval(finishInterval);
                
                // Lift Curtain
                setTimeout(() => {
                    if(preloader) preloader.classList.add('finished');
                    body.classList.remove('loading');
                }, 500);
            }
        }, 10);
    });


    // --- 2. CURSOR LOGIC ---
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


    // --- 3. PAGE NAVIGATION (SPA Logic) ---
    const navLinks = document.querySelectorAll('.nav-link');
    const curtain = document.querySelector('.curtain');
    const curtainContent = document.querySelector('.curtain-content');
    const pages = document.querySelectorAll('.page');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('data-target');
            const targetPage = document.getElementById(targetId);

            if (!targetPage) return;

            // Don't reload if already active (unless it's the logo which usually means "Reset Home")
            if(targetPage.classList.contains('active') && !link.classList.contains('logo')) return;

            // 1. Curtain Rise
            curtain.classList.remove('exit');
            curtain.classList.add('active');
            
            setTimeout(() => {
                curtainContent.style.opacity = '1';
            }, 300);

            // 2. Change Content Behind Curtain
            setTimeout(() => {
                window.scrollTo(0,0);
                
                pages.forEach(p => p.classList.remove('active'));
                targetPage.classList.add('active');

            }, 1000); 

            // 3. Curtain Fall
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
