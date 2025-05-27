// LucenixHQ Landing Page JavaScript

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 800,
        easing: 'ease',
        once: true,
        offset: 100
    });

    // Navigation toggle for mobile
    const navbarToggle = document.getElementById('navbarToggle');
    const navbarMenu = document.getElementById('navbarMenu');
    
    if (navbarToggle) {
        navbarToggle.addEventListener('click', function() {
            navbarToggle.classList.toggle('active');
            navbarMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking a nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navbarToggle.classList.remove('active');
            navbarMenu.classList.remove('active');
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Back to top button
    const backToTopButton = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('active');
        } else {
            backToTopButton.classList.remove('active');
        }
    });
    
    if (backToTopButton) {
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Active navigation link based on scroll position
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Form validation
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple validation
            let valid = true;
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const subject = document.getElementById('subject');
            const message = document.getElementById('message');
            
            if (!name.value.trim()) {
                valid = false;
                showError(name, 'Name is required');
            } else {
                removeError(name);
            }
            
            if (!email.value.trim()) {
                valid = false;
                showError(email, 'Email is required');
            } else if (!isValidEmail(email.value)) {
                valid = false;
                showError(email, 'Please enter a valid email');
            } else {
                removeError(email);
            }
            
            if (!subject.value.trim()) {
                valid = false;
                showError(subject, 'Subject is required');
            } else {
                removeError(subject);
            }
            
            if (!message.value.trim()) {
                valid = false;
                showError(message, 'Message is required');
            } else {
                removeError(message);
            }
            
            if (valid) {
                // Simulate form submission
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                
                submitBtn.disabled = true;
                submitBtn.textContent = 'Sending...';
                
                setTimeout(() => {
                    contactForm.reset();
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalText;
                    
                    // Show success message
                    const successMessage = document.createElement('div');
                    successMessage.className = 'success-message';
                    successMessage.textContent = 'Your message has been sent successfully!';
                    successMessage.style.color = '#28a745';
                    successMessage.style.padding = '1rem 0';
                    
                    contactForm.appendChild(successMessage);
                    
                    setTimeout(() => {
                        successMessage.remove();
                    }, 5000);
                }, 1500);
            }
        });
    }

    // Coming Soon section editable content
    const editMobileBtn = document.getElementById('edit-mobile');
    const saveMobileBtn = document.getElementById('save-mobile');
    const cancelMobileBtn = document.getElementById('cancel-mobile');
    const mobileDescription = document.getElementById('mobile-description');
    const mobileTextarea = document.getElementById('mobile-textarea');
    const mobileForm = document.getElementById('mobile-form');
    
    if (editMobileBtn && saveMobileBtn && cancelMobileBtn && mobileDescription && mobileTextarea && mobileForm) {
        editMobileBtn.addEventListener('click', function() {
            mobileTextarea.value = mobileDescription.textContent;
            mobileForm.classList.add('active');
            editMobileBtn.style.display = 'none';
        });
        
        saveMobileBtn.addEventListener('click', function() {
            mobileDescription.textContent = mobileTextarea.value;
            mobileForm.classList.remove('active');
            editMobileBtn.style.display = 'block';
        });
        
        cancelMobileBtn.addEventListener('click', function() {
            mobileForm.classList.remove('active');
            editMobileBtn.style.display = 'block';
        });
    }
    
    const editAutoBtn = document.getElementById('edit-auto');
    const saveAutoBtn = document.getElementById('save-auto');
    const cancelAutoBtn = document.getElementById('cancel-auto');
    const autoDescription = document.getElementById('auto-description');
    const autoTextarea = document.getElementById('auto-textarea');
    const autoForm = document.getElementById('auto-form');
    
    if (editAutoBtn && saveAutoBtn && cancelAutoBtn && autoDescription && autoTextarea && autoForm) {
        editAutoBtn.addEventListener('click', function() {
            autoTextarea.value = autoDescription.textContent;
            autoForm.classList.add('active');
            editAutoBtn.style.display = 'none';
        });
        
        saveAutoBtn.addEventListener('click', function() {
            autoDescription.textContent = autoTextarea.value;
            autoForm.classList.remove('active');
            editAutoBtn.style.display = 'block';
        });
        
        cancelAutoBtn.addEventListener('click', function() {
            autoForm.classList.remove('active');
            editAutoBtn.style.display = 'block';
        });
    }

    // Micro animations for hero image
    const heroImage = document.getElementById('heroImage');
    if (heroImage) {
        heroImage.style.animation = 'float 6s ease-in-out infinite';
    }

    // Add micro animations to service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });

    // Helper functions
    function showError(input, message) {
        const formGroup = input.parentElement;
        const errorMessage = formGroup.querySelector('.error-message') || document.createElement('div');
        
        errorMessage.className = 'error-message';
        errorMessage.textContent = message;
        errorMessage.style.color = '#dc3545';
        errorMessage.style.fontSize = '0.875rem';
        errorMessage.style.marginTop = '0.25rem';
        
        if (!formGroup.querySelector('.error-message')) {
            formGroup.appendChild(errorMessage);
        }
        
        input.style.borderColor = '#dc3545';
    }
    
    function removeError(input) {
        const formGroup = input.parentElement;
        const errorMessage = formGroup.querySelector('.error-message');
        
        if (errorMessage) {
            errorMessage.remove();
        }
        
        input.style.borderColor = '';
    }
    
    function isValidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    // Initialize interactive elements
    initializeInteractiveElements();
});

// Function to initialize interactive elements with micro animations
function initializeInteractiveElements() {
    // Add hover effect to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });

    // Add ripple effect to service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            ripple.style.position = 'absolute';
            ripple.style.width = '1px';
            ripple.style.height = '1px';
            ripple.style.borderRadius = '50%';
            ripple.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
            ripple.style.transform = 'scale(0)';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.style.animation = 'ripple 0.6s linear';
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add keyframe animation for ripple effect
    if (!document.querySelector('#rippleAnimation')) {
        const style = document.createElement('style');
        style.id = 'rippleAnimation';
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(100);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}
