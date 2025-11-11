
// Main JavaScript for RB Engineering
document.addEventListener('DOMContentLoaded', function() {
    // Initialize animations
    const animateElements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    animateElements.forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(element);
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form validation and submission
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (!name || !email || !phone || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            // Here you would typically send the form data to a server
            alert('Thank you for your message! We will contact you soon.');
            contactForm.reset();
        });
    }

    // Initialize all feather icons
    feather.replace();
});

// Highlight active nav link based on scroll position
function highlightActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a, custom-navbar a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', highlightActiveNavLink);

// WhatsApp button functionality
document.addEventListener('click', function(e) {
    if (e.target.closest('.whatsapp-button')) {
        window.open('https://wa.me/9779856014872', '_blank');
    }
});

// Gallery lightbox functionality
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        const imgSrc = this.querySelector('img').src;
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <img src="${imgSrc}" alt="Gallery Image">
                <button class="lightbox-close">&times;</button>
            </div>
        `;
        document.body.appendChild(lightbox);
        
        lightbox.querySelector('.lightbox-close').addEventListener('click', () => {
            lightbox.remove();
        });
    });
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
document.querySelectorAll('.learn-btn').forEach(button => {
  button.addEventListener('click', function(e) {
    const circle = document.createElement('span');
    const diameter = Math.max(this.clientWidth, this.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - this.offsetLeft - radius}px`;
    circle.style.top = `${e.clientY - this.offsetTop - radius}px`;
    circle.classList.add('ripple');

    const ripple = this.getElementsByClassName('ripple')[0];
    if (ripple) ripple.remove();

    this.appendChild(circle);
  });
});
document.querySelectorAll('.learn-btn, .view-btn').forEach(button => {
  button.addEventListener('click', function(e) {
    const circle = document.createElement('span');
    const diameter = Math.max(this.clientWidth, this.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - this.offsetLeft - radius}px`;
    circle.style.top = `${e.clientY - this.offsetTop - radius}px`;
    circle.classList.add('ripple');

    const ripple = this.getElementsByClassName('ripple')[0];
    if (ripple) ripple.remove();

    this.appendChild(circle);
  });
});
window.addEventListener('scroll', () => {
  AOS.refresh();
});
