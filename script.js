document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. MINIMAL LOADER LOGIC ---
    const loaderScreen = document.querySelector('.loader-screen');
    const fill = document.querySelector('.loader-bar-fill');
    const percentText = document.querySelector('.loader-percentage');
    
    let loadProgress = 0;
    
    // Simulate loading
    const interval = setInterval(() => {
        // Random speed
        loadProgress += Math.floor(Math.random() * 3) + 1;
        
        if (loadProgress > 100) loadProgress = 100;
        
        // Update width and text
        fill.style.width = `${loadProgress}%`;
        percentText.textContent = `${loadProgress}%`;

        if (loadProgress === 100) {
            clearInterval(interval);
            setTimeout(() => {
                loaderScreen.classList.add('complete');
                document.body.classList.remove('loading-active');
            }, 500); // Wait a bit at 100%
        }
    }, 20); // Speed of loop


    // --- 2. BURGER MENU LOGIC (Connected) ---
    const burger = document.querySelector('.burger-menu');
    const menuLinks = document.querySelectorAll('.menu-link');
    
    // Toggle Menu
    burger.addEventListener('click', () => {
        document.body.classList.toggle('menu-active');
    });

    // Close menu when clicking a link
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            document.body.classList.remove('menu-active');
        });
    });


    // --- 3. CUSTOM CURSOR ---
    const dot = document.querySelector('.cursor-dot');
    const circle = document.querySelector('.cursor-circle');

    window.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;
        
        dot.style.left = `${x}px`;
        dot.style.top = `${y}px`;
        
        // Circle follows with animation via CSS
        circle.style.left = `${x}px`;
        circle.style.top = `${y}px`;
    });

    // Add hover states
    const hoverables = document.querySelectorAll('a, .service-item, .gallery-item');
    hoverables.forEach(el => {
        el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
        el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
    });


    // --- 4. SERVICES HOVER (Background Swap) ---
    const serviceItems = document.querySelectorAll('.service-item');
    const serviceBg = document.getElementById('service-bg');

    serviceItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const img = item.getAttribute('data-image');
            serviceBg.style.backgroundImage = `url(${img})`;
            serviceBg.classList.add('active');
        });
        
        // Optional: Reset on leave or keep last image
        // item.addEventListener('mouseleave', () => {
        //     serviceBg.classList.remove('active');
        // });
    });


    // --- 5. PARALLAX EFFECT FOR HERO ---
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const parallaxImg = document.querySelector('.parallax-img');
        if(parallaxImg && scrolled < window.innerHeight) {
            parallaxImg.style.transform = `translateY(${scrolled * 0.4}px)`;
        }
    });

});
