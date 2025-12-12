// Roastery Page JavaScript

// Back to Top Button
const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Interactive Diagram Labels
const diagramLabels = document.querySelectorAll('.diagram-label');

diagramLabels.forEach(label => {
    label.addEventListener('mouseenter', () => {
        label.style.zIndex = '10';
    });
    
    label.addEventListener('mouseleave', () => {
        label.style.zIndex = '1';
    });
    
    // Add tooltip on click for mobile
    label.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            const text = label.querySelector('.label-text');
            text.style.display = text.style.display === 'block' ? 'none' : 'block';
        }
    });
});

// Animate roast cards on scroll
const roastCards = document