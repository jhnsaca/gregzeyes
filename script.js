document.addEventListener('DOMContentLoaded', () => {
    
    // 1. CUSTOM CURSOR LOGIC
    const cursorDot = document.querySelector('[data-cursor-dot]');
    const cursorOutline = document.querySelector('[data-cursor-outline]');

    window.addEventListener('mousemove', function (e) {
        const posX = e.clientX;
        const posY = e.clientY;

        // Dot follows instantly
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        // Outline follows with lag (animation in CSS)
        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });

    // 2. PAGE TRANSITIONS (THE "AWARD WINNING" FEEL)
    const links = document.querySelectorAll('.nav-trigger');
    const curtain = document.querySelector('.transition-curtain');
    const curtainText = document.querySelector('.curtain-text');
    const pages = document.querySelectorAll('.page');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('data-target');
            
            // If already on this page, do nothing
            if(document.getElementById(targetId).classList.contains('active-page')) return;

            // Start Transition
            curtain.classList.add('active');
            
            // Show text after curtain covers screen
            setTimeout(() => {
                curtainText.style.opacity = '1';
            }, 400);

            // Switch content behind the curtain
            setTimeout(() => {
                // Remove active class from all pages
                pages.forEach(page => page.classList.remove('active-page'));
                
                // Add active class to target
                document.getElementById(targetId).classList.add('active-page');
                
                // Reset scroll for horizontal section
                if(targetId === 'work') {
                    document.querySelector('.horizontal-scroll-wrapper').scrollLeft = 0;
                }

            }, 800);

            // Lift Curtain
            setTimeout(() => {
                curtainText.style.opacity = '0';
                curtain.classList.remove('active');
            }, 1400);
        });
    });

    // 3. HORIZONTAL SCROLL ENHANCEMENT (For Mouse Wheel)
    const scrollContainer = document.querySelector(".horizontal-scroll-wrapper");

    scrollContainer.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY;
    });

});
