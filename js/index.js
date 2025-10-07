// Initialize AOS (Animate On Scroll)
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
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

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const offset = 80;
                    const targetPosition = target.offsetTop - offset;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    const navbarCollapse = document.querySelector('.navbar-collapse');
                    if (navbarCollapse.classList.contains('show')) {
                        const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                        bsCollapse.hide();
                    }
                }
            });
        });

        // Active nav link on scroll
        window.addEventListener('scroll', function() {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('.nav-link');
            
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.pageYOffset >= sectionTop - 100) {
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

        // Function to open project modal
        function openProjectModal(title, tech, description) {
            document.getElementById('modalTitle').textContent = title;
            document.getElementById('modalTech').innerHTML = '<strong>Technologies:</strong> ' + tech;
            document.getElementById('modalDescription').textContent = description;
            
            const modal = new bootstrap.Modal(document.getElementById('projectModal'));
            modal.show();
        }

         function OpenLibrary(title, tech, description) {
            document.getElementById('modalTitle').textContent = title;
            document.getElementById('modalTech').innerHTML = '<strong>Technologies:</strong> ' + tech;
            document.getElementById('modalDescription').textContent = description;
            
            const modal = new bootstrap.Modal(document.getElementById('library'));
            modal.show();
        }
         function OpenNyAla(title, tech, description) {
            document.getElementById('modalTitle').textContent = title;
            document.getElementById('modalTech').innerHTML = '<strong>Technologies:</strong> ' + tech;
            document.getElementById('modalDescription').textContent = description;
            
            const modal = new bootstrap.Modal(document.getElementById('nyAla'));
            modal.show();
        }
         function openPrescription(title, tech, description) {
            document.getElementById('modalTitle').textContent = title;
            document.getElementById('modalTech').innerHTML = '<strong>Technologies:</strong> ' + tech;
            document.getElementById('modalDescription').textContent = description;
            
            const modal = new bootstrap.Modal(document.getElementById('prescri'));
            modal.show();
        }
         function openEmp(title, tech, description) {
            document.getElementById('modalTitle').textContent = title;
            document.getElementById('modalTech').innerHTML = '<strong>Technologies:</strong> ' + tech;
            document.getElementById('modalDescription').textContent = description;
            
            const modal = new bootstrap.Modal(document.getElementById('emp'));
            modal.show();
        }
         function openMessage(title, tech, description) {
            document.getElementById('modalTitle').textContent = title;
            document.getElementById('modalTech').innerHTML = '<strong>Technologies:</strong> ' + tech;
            document.getElementById('modalDescription').textContent = description;
            
            const modal = new bootstrap.Modal(document.getElementById('message'));
            modal.show();
        }
         function openDesign(title, tech, description) {
            document.getElementById('modalTitle').textContent = title;
            document.getElementById('modalTech').innerHTML = '<strong>Technologies:</strong> ' + tech;
            document.getElementById('modalDescription').textContent = description;
            
            const modal = new bootstrap.Modal(document.getElementById('design'));
            modal.show();
        }

        // Contact form submission
        document.querySelector('.contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Merci pour votre message ! Je vous répondrai dans les plus brefs délais.');
            this.reset();
        });

        // Download CV button
        document.querySelector('.btn-download').addEventListener('click', function(e) {
            e.preventDefault();
            alert('Téléchargement du CV en cours...\n\nNote: Remplacez cette alerte par un vrai lien de téléchargement vers votre CV.');
        });

        // Add typing effect to hero title
        const heroTitle = document.querySelector('.hero-title');

if (heroTitle) {
    const text = heroTitle.innerHTML; // garder le HTML original
    heroTitle.innerHTML = ''; // vider avant animation

    let i = 0;
    let isTag = false;
    let currentTag = '';

    function type() {
        if (i < text.length) {
            let char = text[i];

            if (char === '<') {
                isTag = true;
                currentTag = '';
            }

            if (isTag) {
                currentTag += char;
                if (char === '>') {
                    isTag = false;
                    heroTitle.innerHTML += currentTag; // insérer directement la balise
                }
            } else {
                heroTitle.innerHTML += char; // insérer le texte normalement
            }

            i++;
            setTimeout(type, 50); // vitesse d’écriture
        }
    }

    setTimeout(type, 500); // délai avant de commencer
}


        // Counter animation for stats
        function animateCounter(element, target, duration) {
            let start = 0;
            const increment = target / (duration / 16);
            
            const timer = setInterval(() => {
                start += increment;
                if (start >= target) {
                    element.textContent = target;
                    clearInterval(timer);
                } else {
                    element.textContent = Math.floor(start);
                }
            }, 16);
        }

        // Parallax effect for hero section
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const heroSection = document.getElementById('home');
            if (heroSection) {
                heroSection.style.transform = 'translateY(' + scrolled * 0.5 + 'px)';
            }
        });

        // Add hover effect to project cards
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });

        // Skill bars animation on scroll
        const skillSection = document.getElementById('competences');
        let skillsAnimated = false;

        window.addEventListener('scroll', function() {
            if (!skillsAnimated && isInViewport(skillSection)) {
                animateSkillBars();
                skillsAnimated = true;
            }
        });

        function isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        function animateSkillBars() {
            document.querySelectorAll('.progress-bar').forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.transition = 'width 1.5s ease-in-out';
                    bar.style.width = width;
                }, 100);
            });
        }

        // Add particle effect to hero section (optional)
        function createParticles() {
            const hero = document.getElementById('home');
            for (let i = 0; i < 50; i++) {
                const particle = document.createElement('div');
                particle.style.position = 'absolute';
                particle.style.width = Math.random() * 5 + 'px';
                particle.style.height = particle.style.width;
                particle.style.background = 'rgba(255,255,255,0.5)';
                particle.style.borderRadius = '50%';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                particle.style.animation = `float ${Math.random() * 10 + 5}s linear infinite`;
                hero.appendChild(particle);
            }
        }

        // Initialize on page load
        window.addEventListener('load', function() {
            // Fade in page content
            document.body.style.opacity = '0';
            setTimeout(() => {
                document.body.style.transition = 'opacity 0.5s ease-in-out';
                document.body.style.opacity = '1';
            }, 100);
        });