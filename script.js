document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('DOMContentLoaded', () => {
    
    // --- 0. PRELOADER LOGIC ---
    const preloader = document.querySelector('.preloader');
    const counter = document.querySelector('.counter');
    const body = document.body;

    // Lock scroll immediately
    body.classList.add('loading');

    let loadValue = 0;
    let imagesLoaded = false;

    // 1. Simulate progress (so it doesn't stay at 0 if loading is fast)
    const interval = setInterval(() => {
        if (loadValue < 90) {
            loadValue += Math.floor(Math.random() * 5); // Random increment
            counter.textContent = loadValue;
        }
    }, 100);

    // 2. Wait for the actual window load (images/videos)
    window.addEventListener('load', () => {
        imagesLoaded = true;
        
        // Clear the simulator
        clearInterval(interval);
        
        // Fast finish to 100
        const finishInterval = setInterval(() => {
            if (loadValue < 100) {
                loadValue++;
                counter.textContent = loadValue;
            } else {
                clearInterval(finishInterval);
                
                // 3. Trigger Exit Animation
                setTimeout(() => {
                    preloader.classList.add('finished');
                    body.classList.remove('loading'); // Unlock scroll
                    
                    // Optional: Trigger Home Title Animation here if you want perfect timing
                    const heroTitle = document.querySelector('.hero-title');
                    if(heroTitle) heroTitle.style.animationPlayState = 'running';
                    
                }, 500); // Slight pause at 100 before lifting
            }
        }, 10); // Super fast count to 100
    });

    // ... REST OF YOUR EXISTING CODE (Cursor, Transitions, etc.) ...
    // --- 1. CURSOR LOGIC ---
    const dot = document.querySelector('[data-cursor-dot]');
    const outline = document.querySelector('[data-cursor-outline]');
    
    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;
        dot.style.left = `${posX}px`;
        dot.style.top = `${posY}px`;
        outline.animate({ left: `${posX}px`, top: `${posY}px` }, { duration: 500, fill: "forwards" });
    });

    const hoverables = document.querySelectorAll('a, .nav-link, button, .grid-item');
    hoverables.forEach(el => {
        el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
        el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
    });

    // --- 2. TRANSITION LOGIC (The "Award Winning" Part) ---
    const navLinks = document.querySelectorAll('.nav-link');
    const curtain = document.querySelector('.curtain');
    const curtainContent = document.querySelector('.curtain-content');
    const pages = document.querySelectorAll('.page');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('data-target');
            const targetPage = document.getElementById(targetId);

            // If we are already on the page (and not clicking logo), do nothing
            if(targetPage.classList.contains('active') && !link.classList.contains('logo')) return;

            // 1. Curtain Rise
            curtain.classList.remove('exit');
            curtain.classList.add('active');
            
            setTimeout(() => {
                curtainContent.style.opacity = '1';
            }, 300);

            // 2. Change Page Content (Behind the curtain)
            setTimeout(() => {
                // Scroll to top
                window.scrollTo(0,0);
                
                // Switch Classes
                pages.forEach(p => p.classList.remove('active'));
                targetPage.classList.add('active');

            }, 1000); // Wait 1 second

            // 3. Curtain Fall
            setTimeout(() => {
                curtainContent.style.opacity = '0';
            }, 1200);

            setTimeout(() => {
                curtain.classList.remove('active');
                curtain.classList.add('exit'); // Slides down or up away
            }, 1500);
        });
    });

});
