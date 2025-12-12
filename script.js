// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Change hamburger to X when active
    const bars = document.querySelectorAll('.bar');
    if (hamburger.classList.contains('active')) {
        bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
        bars[1].style.opacity = '0';
        bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
    } else {
        bars[0].style.transform = 'none';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'none';
    }
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        
        // Reset hamburger icon
        const bars = document.querySelectorAll('.bar');
        bars[0].style.transform = 'none';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'none';
    });
});

// Set active navigation link based on current page
const currentPage = window.location.pathname.split('/').pop();
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (currentPage === linkPage || (currentPage === '' && linkPage === 'index.html')) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});

// Lazy load hero image for performance
document.addEventListener('DOMContentLoaded', function() {
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        // Add a loading class for fade-in effect
        heroImage.style.opacity = '0';
        heroImage.style.transition = 'opacity 0.8s ease';
        
        setTimeout(() => {
            heroImage.style.opacity = '1';
        }, 100);
    }
});

// Adding some  scroll effect to navbar
window.addEventListener('scroll', () => {
    const topNav = document.querySelector('.top-nav');
    if (window.scrollY > 100) {
        topNav.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
        topNav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});