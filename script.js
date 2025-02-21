document.addEventListener('DOMContentLoaded', () => {
    // Array of interests to cycle through
    const interests = [
        'Photography',
        'Coffee',
        'GPUs',
        'interesting people',
        'smoking meat',
        'playing piano',
        'playing guitar',
        'good house music',
        'Machine Learning',
        'AI',
        'Welding'
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
});