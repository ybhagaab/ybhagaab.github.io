document.addEventListener('DOMContentLoaded', () => {
  // Scroll reveal for product cards
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.product-card').forEach(card => {
    card.classList.add('reveal');
    revealObserver.observe(card);
  });

  // Topbar scroll behavior
  const topbar = document.querySelector('.topbar');
  const productsSection = document.getElementById('products');
  const projectsLink = document.querySelector('.topbar-links a[href="#products"]');

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;

        // Fade topbar after passing hero
        if (scrollY > 120) {
          topbar.classList.add('scrolled');
        } else {
          topbar.classList.remove('scrolled');
        }

        // Highlight "Projects" when in view
        if (productsSection && projectsLink) {
          const rect = productsSection.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.5 && rect.bottom > 0) {
            projectsLink.classList.add('active');
          } else {
            projectsLink.classList.remove('active');
          }
        }

        ticking = false;
      });
      ticking = true;
    }
  });
});
