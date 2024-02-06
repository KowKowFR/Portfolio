const toggleTheme = document.getElementById('theme-icon')
const Content = document.getElementById('content');

function setTheme() {
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        Content.classList.remove('light-theme');
        Content.classList.remove('dark-theme');
        Content.classList.add(currentTheme);
    }

    if (currentTheme == 'light-theme') {
        toggleTheme.textContent = 'dark_mode';
    } else if (currentTheme == 'dark-theme'){
        toggleTheme.textContent = "light_mode";
    };
}

setTheme();

toggleTheme.addEventListener('click', () => {
    localStorage.getItem('theme') === 'light-theme' ? toggleTheme.textContent = 'light_mode' : toggleTheme.textContent = 'dark_mode';
    
    Content.classList.toggle('light-theme');
    Content.classList.toggle('dark-theme');
    
    const currentTheme = Content.classList.contains('light-theme') ? 'light-theme' : 'dark-theme';
    localStorage.setItem('theme', currentTheme);
});