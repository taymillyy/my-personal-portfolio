 // Smooth Scroll Activation for navigation links
    // Smooth Scroll for Navigation
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });