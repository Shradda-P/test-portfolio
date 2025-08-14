// Navigation functionality
let isScrolled = false;
let isMobileMenuOpen = false;

// Handle scroll events
function handleScroll() {
    const nav = document.getElementById('navigation');
    const scrollPosition = window.scrollY;
    
    if (scrollPosition > 50 && !isScrolled) {
        isScrolled = true;
        nav.classList.add('scrolled');
    } else if (scrollPosition <= 50 && isScrolled) {
        isScrolled = false;
        nav.classList.remove('scrolled');
    }
}

// Scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Scroll to section function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth'
        });
    }
    closeMobileMenu();
}

// Mobile menu toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const toggleButton = document.getElementById('mobileMenuToggle');
    
    isMobileMenuOpen = !isMobileMenuOpen;
    
    if (isMobileMenuOpen) {
        mobileMenu.classList.add('active');
        toggleButton.style.transform = 'rotate(90deg)';
    } else {
        mobileMenu.classList.remove('active');
        toggleButton.style.transform = 'rotate(0deg)';
    }
}

// Close mobile menu
function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const toggleButton = document.getElementById('mobileMenuToggle');
    
    isMobileMenuOpen = false;
    mobileMenu.classList.remove('active');
    toggleButton.style.transform = 'rotate(0deg)';
}

// Smooth scroll for anchor links
function smoothScrollToAnchor(event) {
    const target = event.target.getAttribute('href');
    if (target && target.startsWith('#')) {
        event.preventDefault();
        const element = document.querySelector(target);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }
}

// Animation on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.skill-card, .experience-card, .education-card, .contact-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize animations
function initAnimations() {
    const elements = document.querySelectorAll('.skill-card, .experience-card, .education-card, .contact-card');
    
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        element.style.transitionDelay = `${index * 0.1}s`;
    });
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', animateOnScroll);
    
    // Add mobile menu toggle event listener
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    }
    
    // Add smooth scroll for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', smoothScrollToAnchor);
    });
    
    // Initialize animations
    initAnimations();
    
    // Trigger initial animation check
    setTimeout(animateOnScroll, 100);
});

// Handle window resize
window.addEventListener('resize', function() {
    if (window.innerWidth > 768 && isMobileMenuOpen) {
        closeMobileMenu();
    }
});

// Prevent default behavior for contact links that should open externally
document.addEventListener('click', function(event) {
    const target = event.target.closest('[onclick]');
    if (target && target.getAttribute('onclick')) {
        // Let the onclick handler manage the behavior
        return;
    }
});