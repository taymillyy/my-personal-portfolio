 // Smooth Scroll Activation for navigation links
 const navLinks = document.querySelectorAll('nav a');
 const sections = document.querySelectorAll('section');

 navLinks.forEach(link => {
     link.addEventListener('click', (e) => {
         e.preventDefault();
         const targetSection = document.querySelector(link.getAttribute('href'));
         window.scrollTo({
             top: targetSection.offsetTop - 50,
             behavior: 'smooth'
         });
     });
 });