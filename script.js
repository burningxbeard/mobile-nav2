const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');
const overlay = document.getElementById('overlay');
const mainContent = document.getElementById('main-content');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle the mobile menu and the hamburger-to-X animation
mobileMenu.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  mobileMenu.classList.toggle('active'); // Toggle 'X' state
  overlay.classList.toggle('active');
  mainContent.classList.toggle('menu-open');
});

// Close the mobile menu when any link is clicked
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    mobileMenu.classList.remove('active'); // Remove 'X' state
    overlay.classList.remove('active');
    mainContent.classList.remove('menu-open');
  });
});

// Close the mobile menu when the overlay is clicked
overlay.addEventListener('click', () => {
  navMenu.classList.remove('active');
  mobileMenu.classList.remove('active'); // Remove 'X' state
  overlay.classList.remove('active');
  mainContent.classList.remove('menu-open');
});

// const mobileMenu = document.getElementById('mobile-menu');
// const navMenu = document.querySelector('.nav-menu');
// const overlay = document.createElement('div');
// overlay.className = 'overlay';
// document.body.appendChild(overlay);

// // Toggle the mobile menu
// mobileMenu.addEventListener('click', () => {
//   navMenu.classList.toggle('active');
//   mobileMenu.classList.toggle('active'); // Toggle 'X' state
//   overlay.classList.toggle('active');
//   document.body.classList.toggle('menu-open'); // Prevent background scroll
// });

// // Close the mobile menu when clicking on the overlay
// overlay.addEventListener('click', () => {
//   navMenu.classList.remove('active');
//   mobileMenu.classList.remove('active'); // Remove 'X' state
//   overlay.classList.remove('active');
//   document.body.classList.remove('menu-open'); // Allow background scroll
// });
