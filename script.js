// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

mobileMenuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Smooth scrolling for navigation links
const navLinkItems = document.querySelectorAll('.nav-links a');

navLinkItems.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
    navLinks.classList.remove('active');
  });
});

// Animate on scroll
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.feature, .team-member, .method');
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    const isVisible = rect.top <= window.innerHeight * 0.75;
    if (isVisible) {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }
  });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);