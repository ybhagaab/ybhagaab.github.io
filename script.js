// Subtle entrance animations on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.project, .approach-card, .personal-card, .phil-item').forEach(el => {
  el.classList.add('animate-in');
  observer.observe(el);
});
