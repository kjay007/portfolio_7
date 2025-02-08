//w


particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#ef4444' /* Updated color for particles */
        },
        shape: {
            type: 'circle'
        },
        opacity: {
            value: 0.5,
            random: false
        },
        size: {
            value: 5,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#ef4444', /* Updated color for lines */
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 6,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out'
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'repulse'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        }
    },
    retina_detect: true
});


// Footer Animations
document.addEventListener('DOMContentLoaded', () => {
// Animate footer sections on scroll
const footerSections = document.querySelectorAll('.footer-section');
const footerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            footerObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2
});

footerSections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.6s ease';
    footerObserver.observe(section);
});

// Social icons hover effect
const socialIcons = document.querySelectorAll('.social-icon');
socialIcons.forEach(icon => {
    icon.addEventListener('mouseover', () => {
        icon.style.transform = 'translateY(-5px) rotate(360deg)';
        icon.style.transition = 'all 0.5s ease';
    });

    icon.addEventListener('mouseout', () => {
        icon.style.transform = 'translateY(0) rotate(0deg)';
    });
});

// Newsletter form animation
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = newsletterForm.querySelector('.newsletter-input');
        const button = newsletterForm.querySelector('.newsletter-btn');
        
        // Animate button
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 200);

        // Clear input with animation
        input.style.transition = 'all 0.3s ease';
        input.style.transform = 'translateX(10px)';
        setTimeout(() => {
            input.value = '';
            input.style.transform = 'translateX(0)';
        }, 300);
    });
}
});
document.addEventListener('DOMContentLoaded', () => {
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Add different animation delays based on element type
            if (entry.target.classList.contains('timeline-item')) {
                entry.target.style.animation = `fadeInLeft 0.8s ease forwards ${index * 0.2}s`;
            } else if (entry.target.classList.contains('experience-card')) {
                entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
                // Animate list items after card animation
                const listItems = entry.target.querySelectorAll('li');
                listItems.forEach((item, i) => {
                    item.style.animation = `fadeInLeft 0.5s ease forwards ${0.8 + (i * 0.2)}s`;
                });
            }
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.timeline-item, .experience-card').forEach(item => {
    observer.observe(item);
});

// Add hover effect for timeline dots
document.querySelectorAll('.timeline-item').forEach(item => {
    const dot = item.querySelector('.timeline-dot');
    item.addEventListener('mouseenter', () => {
        dot.style.transform = 'scale(1.5)';
        dot.style.boxShadow = '0 0 0 6px rgba(220, 53, 69, 0.3)';
    });
    item.addEventListener('mouseleave', () => {
        dot.style.transform = 'scale(1)';
        dot.style.boxShadow = '0 0 0 4px rgba(220, 53, 69, 0.2)';
    });
});
});

// Intersection Observer for scroll-based animations
const observerOptions = {
threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
    }
});
}, observerOptions);

// Observe about section elements
document.addEventListener('DOMContentLoaded', () => {
const aboutContent = document.querySelector('.about-content');
const skillItems = document.querySelectorAll('.skill-item');

if (aboutContent) observer.observe(aboutContent);
skillItems.forEach(item => observer.observe(item));

// Add hover effect for skill items
skillItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.querySelector('i').style.transform = 'translateX(5px)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.querySelector('i').style.transform = 'translateX(0)';
    });
});
});

   // Gradient effect
document.addEventListener('mousemove', (e) => {
const x = (e.clientX / window.innerWidth) * 100;
const y = (e.clientY / window.innerHeight) * 100;
document.documentElement.style.setProperty('--x', `${x}%`);
document.documentElement.style.setProperty('--y', `${y}%`);

// Cloud movement
const cloud = document.querySelector('.cloud');
cloud.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});


document.onmousemove = (e) => {
animatedCircles(e);
};
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true
    });

    // Loading Screen
    window.addEventListener('load', () => {
        setTimeout(() => {
            document.querySelector('.loader').style.display = 'none';
        }, 2000);
    });

    // Counter Animation
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const step = target / (duration / 16); // 60fps
        let current = 0;

        const updateCounter = () => {
            current += step;
            if (current < target) {
                counter.textContent = Math.round(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };

        // Start counter animation when element is in viewport
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    observer.unobserve(entry.target);
                }
            });
        });

        observer.observe(counter);
    });

    // Active Navigation Link
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });

    document.addEventListener('DOMContentLoaded', () => {
const bassDropSound = document.getElementById('bassDropSound');
const portfolioButton = document.querySelector('a[href="#work"].btn-danger');
const contactButton = document.querySelector('a[href="#contact"].btn-outline-light');

function playBassDropSound() {
    bassDropSound.currentTime = 0; // Reset sound to start
    bassDropSound.play();
}

if (portfolioButton) {
    portfolioButton.addEventListener('click', playBassDropSound);
}

if (contactButton) {
    contactButton.addEventListener('click', playBassDropSound);
}
});

document.addEventListener('DOMContentLoaded', () => {
const bassDropSound = document.getElementById('bassDropSound');
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

function playBassDropSound() {
    bassDropSound.currentTime = 0; // Reset sound to start
    bassDropSound.play();
}

navLinks.forEach(link => {
    link.addEventListener('click', playBassDropSound);
});
});

document.addEventListener('DOMContentLoaded', function() {
const audio = document.getElementById('backgroundAudio');
const checkbox = document.getElementById('checkboxInput');

// Set audio to loop
audio.loop = true;

// Function to play audio with user interaction
function playAudio() {
    audio.play().catch(error => {
        console.log('Autoplay failed, waiting for user interaction');
        // Add event listener for first user interaction
        document.addEventListener('click', function startAudio() {
            audio.play();
            document.removeEventListener('click', startAudio);
        });
    });
}

// Attempt to play audio on load
playAudio();

// Toggle mute/unmute
checkbox.addEventListener('change', function() {
    audio.muted = this.checked;
});

// Ensure audio continues playing
audio.addEventListener('ended', playAudio);
});

//  out sound
document.addEventListener('DOMContentLoaded', function() {
const hoverSound = document.getElementById('hoverSound');
const hoverElements = document.querySelectorAll('section, .stats-card, .skill-card, .portfolio-item, .software-container, .timeline-item');

hoverElements.forEach(element => {
    element.addEventListener('mouseenter', function() {
        hoverSound.currentTime = 0; // Reset sound to start
        hoverSound.play().catch(error => {
            console.log('Audio play prevented:', error);
        });
    });
});
});

// Reviews
document.addEventListener('DOMContentLoaded', function() {
        const track = document.querySelector('.review-track');
        const cards = document.querySelectorAll('.review-card');
        let currentIndex = 0;

        function slideReviews() {
            const cardWidth = cards[0].offsetWidth;
            currentIndex = (currentIndex + 1) % cards.length;
            track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        }

        // Auto-slide every 5 seconds
        setInterval(slideReviews, 5000);
    });

    // MAP

    document.addEventListener('DOMContentLoaded', function() {
        const markers = document.querySelectorAll('.map-marker');
        markers.forEach(marker => {
            marker.addEventListener('mouseover', function() {
                const tooltip = document.createElement('div');
                tooltip.className = 'tooltip';
                tooltip.textContent = this.getAttribute('title');
                this.appendChild(tooltip);
            });
            marker.addEventListener('mouseout', function() {
                const tooltip = this.querySelector('.tooltip');
                if (tooltip) tooltip.remove();
            });
        });
    });