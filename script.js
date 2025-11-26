// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Scroll Animation (Intersection Observer)
    // This makes elements fade in when they come into view
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.scroll-animate');
    animateElements.forEach(el => observer.observe(el));


    // 2. Parallax Effect for Hero (Optional polish)
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        const hero = document.querySelector('.hero-section');
        // Moves the background slower than the foreground
        hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    });
    
});
