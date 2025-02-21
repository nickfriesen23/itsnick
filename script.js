document.addEventListener('DOMContentLoaded', () => {
    // Array of interests to cycle through
    const interests = [
        'Photography.',
        'AI.',
        'Machine Learning.',
        'Piano.',
        'Guitar.',
        'Dance Music.',
        'Coffee.',
        'GPUs.',
        'interesting people.',
        'smoking meat.',
        'Welding.',
        'Chopin.',
        'Sparkling Water.',
        'Jesus.',
        'facial expressions.',
        'the blues.',
        'warmly lit spaces.'
    ];

    const changingText = document.getElementById('changing-text');
    let lastIndex = -1;

    // Function to get random index different from last one
    function getRandomIndex() {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * interests.length);
        } while (newIndex === lastIndex && interests.length > 1);
        lastIndex = newIndex;
        return newIndex;
    }

    // Function to update text with fade effect
    function updateText() {
        changingText.style.opacity = '0';
        
        setTimeout(() => {
            const index = getRandomIndex();
            changingText.textContent = interests[index];
            changingText.style.opacity = '1';
        }, 250); // Half of the interval for smooth transition
    }

    // Add transition style - faster for quicker words
    changingText.style.transition = 'opacity 0.25s ease-in-out';

    // Start the text rotation - 500ms interval
    setInterval(updateText, 500);

    // Add smooth scroll behavior for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add intersection observer for section animations
    const sections = document.querySelectorAll('.section');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        sectionObserver.observe(section);
    });

    // Add hover effect for nav cards
    document.querySelectorAll('.nav-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});