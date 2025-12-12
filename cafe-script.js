// Cafe Page JavaScript

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

// Animate abit of the brewing cards on scroll
const brewingCards = document.querySelectorAll('.brewing-card');

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Setting for the initial state for animation
brewingCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

// Hoveringg effect for cafe cards
const cafeCards = document.querySelectorAll('.cafe-card');

cafeCards.forEach(card => {
    const link = card.querySelector('.cafe-link');
    
    card.addEventListener('mouseenter', () => {
        link.style.color = '#3E2723';
    });
    
    card.addEventListener('mouseleave', () => {
        link.style.color = '#8D6E63';
    });
});

// Lazy load images
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        imageObserver.observe(img);
    });
});

// Add smooth scroll to cafe links
document.querySelectorAll('.cafe-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        // In a real site, this would navigate to the cafe's website, but Idk how. Soo
        // for now, show a message
        const cafeName = link.closest('.cafe-info').querySelector('h4').textContent;
        alert(`This would navigate to ${cafeName}'s website in a real implementation.`);
    });
});