document.addEventListener('DOMContentLoaded', function () {
    // Initialize particles.js
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ff0000"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ff0000",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });

    // Header scroll effect
    const header = document.querySelector('.header');
    const logo = document.querySelector('.logo');
    const navLinks = document.querySelectorAll('.nav ul li a');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
            logo.classList.add('scrolled');
            mobileMenuBtn.classList.add('scrolled');
            navLinks.forEach(link => {
                link.classList.add('scrolled');
            });
        } else {
            header.classList.remove('scrolled');
            logo.classList.remove('scrolled');
            mobileMenuBtn.classList.remove('scrolled');
            navLinks.forEach(link => {
                link.classList.remove('scrolled');
            });
        }
    });

    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', function () {
        nav.classList.toggle('active');
        mobileMenuBtn.innerHTML = nav.classList.contains('active') ?
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });

    // Scroll animations
    const animateOnScroll = function () {
        const elements = document.querySelectorAll('.animate-on-scroll, .animate-from-left, .animate-from-right');

        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementPosition < windowHeight - 100) {
                element.classList.add('animate-on-scroll');
            }
        });
    };

    // Initial animations
    setTimeout(() => {
        document.querySelector('.animate-from-left').classList.add('animate-from-left');
        document.querySelector('.animate-from-right').classList.add('animate-from-right');
    }, 500);

    // Scroll event listener for animations
    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);

    // Show More/Show Less buttons
    const showMoreBtn = document.getElementById('showMoreBtn');
    const showLessBtnContainer = document.getElementById('showLessBtnContainer');
    const showLessBtn = document.getElementById('showLessBtn');
    const hiddenProjects = document.querySelector('.hidden-projects');

    // Only show the "Show More" button if there are hidden projects
    if (hiddenProjects && hiddenProjects.children.length > 0) {
        showMoreBtn.style.display = 'block';

        showMoreBtn.addEventListener('click', function () {
            hiddenProjects.classList.add('active');
            showMoreBtn.style.display = 'none';
            showLessBtnContainer.style.display = 'block';

            // Animate the appearance of hidden projects
            const hiddenProjectCards = hiddenProjects.querySelectorAll('.project-card');
            hiddenProjectCards.forEach((card, index) => {
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 100);
            });
        });

        showLessBtn.addEventListener('click', function () {
            hiddenProjects.classList.remove('active');
            showMoreBtn.style.display = 'block';
            showLessBtnContainer.style.display = 'none';

            // Scroll to the projects section
            document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
        });
    } else {
        showMoreBtn.style.display = 'none';
    }

    // Form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function () {
            // You can add a loading indicator here if you want
        });
    }
});