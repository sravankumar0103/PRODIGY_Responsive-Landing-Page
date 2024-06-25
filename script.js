window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.style.background = '#222';
    } else {
        header.style.background = '#333';
    }

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight / 1.3;

        if (sectionTop < triggerPoint) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});
