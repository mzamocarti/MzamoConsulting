// Intersection Observer for scroll animations
const observerOptions = { threshold: 0.2 };
const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Select elements to animate
document.querySelectorAll('.service-card, .project-card, .process-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = '0.6s ease-out';
    scrollObserver.observe(el);
});

// Form Submission Feedback
/*const contactForm = document.getElementById('project-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('.btn-submit');
        btn.innerText = 'Sending...';
        btn.disabled = false;
        
        setTimeout(() => {
            btn.innerText = 'Message Sent! ✓';
            btn.style.background = '#4ade80';
            contactForm.reset();
        }, 1500);
    });
}*/
