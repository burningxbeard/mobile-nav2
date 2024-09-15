// Get the theme toggle button
const themeToggleButton = document.getElementById('theme-toggle');

// Check if dark mode is already enabled from previous sessions
const currentTheme = localStorage.getItem('theme') || 'light';

// Apply the saved theme on page load
document.body.classList.add(`${currentTheme}-mode`);
themeToggleButton.textContent = currentTheme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';

// Toggle theme on button click
themeToggleButton.addEventListener('click', () => {
    const isDarkMode = document.body.classList.contains('dark-mode');

    if (isDarkMode) {
        // Switch to light mode
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        themeToggleButton.textContent = 'Switch to Dark Mode';
        localStorage.setItem('theme', 'light');
    } else {
        // Switch to dark mode
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        themeToggleButton.textContent = 'Switch to Light Mode';
        localStorage.setItem('theme', 'dark');
    }
});
