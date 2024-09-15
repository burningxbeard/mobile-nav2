// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  darkModeToggle.classList.toggle('fa-sun');
  darkModeToggle.classList.toggle('fa-moon');
});

// Mobile Navigation
const mobileToggle = document.getElementById('mobile-toggle');
const mobileNav = document.querySelector('.mobile-nav');
mobileToggle.addEventListener('click', () => {
  const isNavVisible = mobileNav.style.top === '0%';
  mobileNav.style.top = isNavVisible ? '-100%' : '0%';
});
