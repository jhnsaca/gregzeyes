document.addEventListener('DOMContentLoaded', () => {
    
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
