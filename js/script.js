// Optimized and Clean JavaScript Code
(function() {
    'use strict';

    // DOM Ready
    document.addEventListener('DOMContentLoaded', function() {
        // Initialize all components
        initStarsBackground();
        initParticles();
        initScrollEffects();
        initNavigation();
        initStatsCounter();
        initCardHoverEffects();
        initNewsletter();
        
        // Activate home link by default
        const homeLink = document.querySelector('a[href="#home"]');
        if (homeLink) homeLink.classList.add('active');
    });

    // Create shooting stars and twinkling stars
    function initStarsBackground() {
        const bgAnimation = document.getElementById('bg-animation');
        if (!bgAnimation) return;
        
        // Create twinkling stars
        for (let i = 0; i < 100; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            star.style.width = Math.random() * 3 + 'px';
            star.style.height = star.style.width;
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.animationDelay = Math.random() * 5 + 's';
            bgAnimation.appendChild(star);
        }
        
        // Create shooting stars
        for (let i = 0; i < 3; i++) {
            const shootingStar = document.createElement('div');
            shootingStar.classList.add('shooting-star');
            shootingStar.style.left = Math.random() * 100 + '%';
            shootingStar.style.top = Math.random() * 100 + '%';
            shootingStar.style.animationDelay = Math.random() * 8 + 's';
            bgAnimation.appendChild(shootingStar);
        }
    }

    // Initialize particles.js
    function initParticles() {
        if (typeof particlesJS !== 'undefined' && document.getElementById('particles-js')) {
            particlesJS('particles-js', {
                particles: {
                    number: { 
                        value: 60, 
                        density: { 
                            enable: true, 
                            value_area: 800 
                        } 
                    },
                    color: { value: "#00ffff" },
                    shape: { type: "circle" },
                    opacity: { 
                        value: 0.5, 
                        random: true 
                    },
                    size: { 
                        value: 3, 
                        random: true 
                    },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: "#00ffff",
                        opacity: 0.2,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 2,
                        direction: "none",
                        random: true,
                        straight: false,
                        out_mode: "out",
                        bounce: false
                    }
                },
                interactivity: {
                    detect_on: "canvas",
                    events: {
                        onhover: { 
                            enable: true, 
                            mode: "repulse" 
                        },
                        onclick: { 
                            enable: true, 
                            mode: "push" 
                        }
                    }
                }
            });
        }
    }

    // Initialize scroll effects
    function initScrollEffects() {
        const navbar = document.querySelector('.navbar');
        
        window.addEventListener('scroll', function() {
            // Navbar scroll effect
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
            
            // Activate nav link based on scroll position
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('.nav-link');
            
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (scrollY >= (sectionTop - 100)) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
            
            // Trigger number animation when stats section is in view
            const statsSection = document.getElementById('stats');
            if (statsSection) {
                const statsPosition = statsSection.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;
                
                if (statsPosition < screenPosition) {
                    const statNumbers = document.querySelectorAll('.stat-number');
                    statNumbers.forEach(stat => {
                        if (stat.innerText === '0') {
                            animateNumbers();
                        }
                    });
                }
            }
        });
    }

    // Initialize navigation
    function initNavigation() {
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile navbar after clicking a link
                    const navbarCollapse = document.querySelector('.navbar-collapse.show');
                    if (navbarCollapse) {
                        const navbarToggler = document.querySelector('.navbar-toggler');
                        if (navbarToggler) navbarToggler.click();
                    }
                }
            });
        });
    }

    // Animated number counting
    function initStatsCounter() {
        function animateNumbers() {
            const counters = document.querySelectorAll('.stat-number');
            const speed = 200;
            
            counters.forEach(counter => {
                const updateCount = () => {
                    const target = +counter.getAttribute('data-count');
                    const count = +counter.innerText.replace('+', '');
                    const increment = target / speed;
                    
                    if (count < target) {
                        counter.innerText = Math.ceil(count + increment);
                        if (counter.getAttribute('data-count') === '5000' || 
                            counter.getAttribute('data-count') === '50000') {
                            counter.innerText += '+';
                        }
                        setTimeout(updateCount, 20);
                    } else {
                        counter.innerText = target;
                        if (counter.getAttribute('data-count') === '5000' || 
                            counter.getAttribute('data-count') === '50000') {
                            counter.innerText += '+';
                        }
                    }
                };
                
                updateCount();
            });
        }
        
        // Expose animateNumbers for scroll trigger
        window.animateNumbers = animateNumbers;
    }

    // Add hover effect to service cards
    function initCardHoverEffects() {
        document.querySelectorAll('.service-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.classList.add('animate__pulse');
            });
            
            card.addEventListener('mouseleave', function() {
                this.classList.remove('animate__pulse');
            });
        });
    }

    // Initialize newsletter
    function initNewsletter() {
        const newsletterBtn = document.querySelector('.newsletter-box .btn-neon');
        const newsletterInput = document.querySelector('.newsletter-box input');
        
        if (!newsletterBtn || !newsletterInput) return;
        
        function validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        }
        
        newsletterBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const email = newsletterInput.value.trim();
            if (validateEmail(email)) {
                // In a real application, you would send this to a server
                alert('Thank you for subscribing to our newsletter!');
                newsletterInput.value = '';
            } else {
                alert('Please enter a valid email address.');
            }
        });
        
        newsletterInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                newsletterBtn.click();
            }
        });
    }

    // Performance optimization - lazy load images
    function lazyLoadImages() {
        const images = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }

    // Initialize lazy loading
    if ('IntersectionObserver' in window) {
        lazyLoadImages();
    }
})();