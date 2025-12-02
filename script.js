document.addEventListener('DOMContentLoaded', () => {
    
    // 1. LOADER LOGIC
    const loader = document.querySelector('.loader-overlay');
    const counter = document.querySelector('.loader-counter');
    let count = 0;
    
    // Prevent scrolling during load
    document.body.style.overflow = 'hidden';

    const loadInterval = setInterval(() => {
        count += Math.floor(Math.random() * 5) + 1;
        if(count > 100) count = 100;
        
        // Pad with zeros (001, 050, 100)
        counter.textContent = count.toString().padStart(3, '0');

        if(count === 100) {
            clearInterval(loadInterval);
            setTimeout(() => {
                loader.classList.add('complete');
                document.body.style.overflow = 'auto'; // Re-enable scroll
            }, 500);
        }
    }, 30); // Speed of counter

    // 2. PARALLAX HERO
    const heroImg = document.querySelector('.hero-img');
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        // Move image slightly slower than scroll
        if(heroImg) {
            heroImg.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // 3. SERVICES HOVER EFFECT (HOLOGRAPHIC CHANGE)
    const serviceItems = document.querySelectorAll('.service-item');
    const serviceBg = document.getElementById('service-bg');

    serviceItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const imgUrl = item.getAttribute('data-img');
            serviceBg.style.backgroundImage = `url(${imgUrl})`;
            serviceBg.classList.add('active');
        });

        // Optional: Remove active class on mouseleave to go back to black
        // item.addEventListener('mouseleave', () => {
        //     serviceBg.classList.remove('active');
        // });
    });

    // 4. CUSTOM CURSOR
    const cursor = document.querySelector('.cursor-follower');
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // Add hover scale effect
    const hoverElements = document.querySelectorAll('a, .service-item, .gallery-card');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
        el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
    });

    // 5. HORIZONTAL SCROLL CONVERTER (Simple Version)
    // Converts vertical scroll wheel into horizontal movement only for the work section
    const trackWrapper = document.querySelector('.gallery-track-wrapper');
    
    trackWrapper.addEventListener('wheel', (evt) => {
        evt.preventDefault();
        trackWrapper.scrollLeft += evt.deltaY;
    });

});
