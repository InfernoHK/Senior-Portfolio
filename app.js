window.addEventListener('scroll', function () {
var navbar = document.getElementById('navbar');
console.log('scrolling'); // ← debug check

if (window.scrollY > 175) {
    navbar.classList.add('scrolled');
} else {
    navbar.classList.remove('scrolled');
}
});

// Function to apply a random animation direction
function applyRandomAnimation(element) {
// Array of animation classes
const animations = ['animate-down', 'animate-right', 'animate-left', 'animate-up'];
// Select a random animation
const randomAnimation = animations[Math.floor(Math.random() * animations.length)];

// Add the base animation class and the specific direction class
element.classList.add('animate-drop');
element.classList.add(randomAnimation);
}

// Image slideshow functionality
function setupImageSlideshow() {
const slides = document.querySelectorAll('.slide-image');
if (slides.length === 0) return;

let currentSlide = 0;

function showNextSlide() {
    // Remove active class from current slide
    slides[currentSlide].classList.remove('active');
    
    // Move to next slide (loop back to first if at the end)
    currentSlide = (currentSlide + 1) % slides.length;
    
    // Add active class to new current slide
    slides[currentSlide].classList.add('active');
}

// Change slide every 3 seconds
setInterval(showNextSlide, 4500);
}

window.addEventListener("load", function () {
const navbar = document.getElementById("navbar");
applyRandomAnimation(navbar);

// Animate visible sections only
document.querySelectorAll("section").forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
    applyRandomAnimation(section);
    }
});

const sideTitle = document.querySelector(".side-title");
const navLinks = document.querySelectorAll(".nav-links a");

applyRandomAnimation(sideTitle);
navLinks.forEach(link => applyRandomAnimation(link));

// Initialize the image slideshow
setupImageSlideshow();

document.body.classList.add("loaded");

// Scroll into view only if element is not in view already
const hash = window.location.hash;
if (hash) {
    const target = document.querySelector(hash);
    if (target) {
    const rect = target.getBoundingClientRect();
    if (rect.top < 0 || rect.bottom > window.innerHeight) {
        setTimeout(() => {
        target.scrollIntoView({ behavior: "smooth" });
        }, 300);
    }
    }
}
});

document.addEventListener("DOMContentLoaded", () => {
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        applyRandomAnimation(entry.target);
        entry.target.classList.remove('hidden');
        observer.unobserve(entry.target);
    }
    });
}, {
    threshold: 0.2 // adjust if needed
});

document.querySelectorAll('.hidden').forEach(el => {
    observer.observe(el);
});
});

// Add mobile menu functionality
document.addEventListener("DOMContentLoaded", function() {
// Check if we're on a small screen
const checkMobileView = () => {
    if (window.innerWidth <= 480) {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks && !navLinks.classList.contains('mobile-ready')) {
        // Create a menu toggle button
        const menuToggle = document.createElement('button');
        menuToggle.innerHTML = '☰';
        menuToggle.classList.add('mobile-menu-toggle');
        menuToggle.style.cssText = `
        background: none;
        border: none;
        color: inherit;
        font-size: 1.5em;
        cursor: pointer;
        padding: 5px;
        display: block;
        margin: 0 auto;
        `;
        
        // Insert the button before the nav links
        navLinks.parentNode.insertBefore(menuToggle, navLinks);
        
        // Hide nav links initially on mobile
        navLinks.style.display = 'none';
        
        // Toggle nav links visibility when button is clicked
        menuToggle.addEventListener('click', function() {
        if (navLinks.style.display === 'none') {
            navLinks.style.display = 'flex';
        } else {
            navLinks.style.display = 'none';
        }
        });
        
        navLinks.classList.add('mobile-ready');
    }
    } else {
    // Reset for larger screens
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
        navLinks.style.display = 'flex';
    }
    
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    if (menuToggle) {
        menuToggle.remove();
    }
    }
};

// Run on load and resize
checkMobileView();
window.addEventListener('resize', checkMobileView);
});