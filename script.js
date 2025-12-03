document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. MINIMAL LOADER LOGIC ---
    const loaderScreen = document.querySelector('.loader-screen');
    const fill = document.querySelector('.loader-bar-fill');
    const percentText = document.querySelector('.loader-percentage');
    
    let loadProgress = 0;
    
    // Simulate loading
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

    // --- 2. LOGO FADE ON SCROLL (New Feature) ---
    const logo = document.getElementById('logo-trigger');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            // Become transparent when scrolling down to avoid clashing with text
            logo.style.opacity = '0.3';
        } else {
            // Back to full opacity at the top
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

    const hoverables = document.querySelectorAll('a, .service-item, .gallery-item');
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
