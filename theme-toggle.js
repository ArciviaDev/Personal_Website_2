let theme_toggler = document.querySelector('#theme-toggler');


theme_toggler.addEventListener('click', function () {
    document.body.classList.toggle('dark_mode');

    if (document.body.classList.contains('dark_mode')) {
        localStorage.setItem('website_theme', 'dark_mode');

        // Changes the button text when dark mode is enabled.
        theme_toggler.textContent = 'Disable Dark Mode';

    } else {
        localStorage.setItem('website_theme', 'default');

        // Changes the button text when dark mode is disabled.
        theme_toggler.textContent = 'Enable Dark Mode';
    }
});


function retrieve_theme() {
    var theme = localStorage.getItem('website_theme');

    if (theme != null) {
        document.body.classList.remove('default', 'dark_mode');
        document.body.classList.add(theme);
    }
}

// Restores the saved theme when the page loads.
retrieve_theme();

// Updates the theme when it changes in another tab.
window.addEventListener('storage', function () {
    retrieve_theme();
}, false);