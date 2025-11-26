document.addEventListener('DOMContentLoaded', () => {

    // 1. CUSTOM CURSOR
    const dot = document.querySelector('[data-cursor-dot]');
    const outline = document.querySelector('[data-cursor-outline]');
    
    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;
        
        // Dot is instant
        dot.style.left = `${posX}px`;
        dot.style.top = `${posY}px`;
        
        // Outline has slight delay for fluid feel
        outline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });

    // Add hover effect to cursor over links/images
    const hoverables = document.querySelectorAll('a, .work-card, button');
    hoverables.forEach(el => {
        el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
        el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
    });

    // 2. SCROLL ANIMATIONS (Intersection Observer)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    // 3. HORIZONTAL SCROLL WITH MOUSE WHEEL (Only for Work Section)
    const scrollContainers = document.querySelectorAll('.horizontal-scroll-container');
    
    scrollContainers.forEach(container => {
        container.addEventListener('wheel', (evt) => {
            // If user is scrolling vertically really fast, ignore. 
            // If strictly hovering the container, scroll horizontally.
            evt.preventDefault();
            container.scrollLeft += evt.deltaY;
        });
    });

});
