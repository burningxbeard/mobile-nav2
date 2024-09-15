// Theme Toggle Functionality
const themeToggleIcon = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'light';

document.body.classList.add(`${currentTheme}-mode`);

themeToggleIcon.addEventListener('click', () => {
    const isDarkMode = document.body.classList.contains('dark-mode');

    if (isDarkMode) {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
    } else {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    }
});

// Mobile Menu Toggle Functionality
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('close-menu');

menuToggle.addEventListener('click', () => {
    mobileMenu.style.transform = 'translateY(0)';
});

closeMenu.addEventListener('click', () => {
    mobileMenu.style.transform = 'translateY(-100%)';
});
