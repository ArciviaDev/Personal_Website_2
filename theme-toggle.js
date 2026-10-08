
 // Finds the HTML element with the ID "theme-toggler".
let theme_toggler = document.querySelector('#theme-toggler');

// Runs the function whenever the theme button is clicked.
theme_toggler.addEventListener('click', function () {

    // Adds or removes the dark_mode class from the HTML body.
    document.body.classList.toggle('dark_mode');

    // Checks if dark mode is currently enabled.
    if (document.body.classList.contains('dark_mode')) {

        // Saves dark mode as the selected theme in the browser.
        localStorage.setItem('website_theme', 'dark_mode');

        // Changes the button text to "Disable Dark Mode".
        theme_toggler.textContent = 'Disable Dark Mode';

    } else {

        // Saves the default (light) theme in the browser.
        localStorage.setItem('website_theme', 'default');

        // Changes the button text to "Enable Dark Mode".
        theme_toggler.textContent = 'Enable Dark Mode';
    }
});

// Function that restores the previously saved theme.
function retrieve_theme() {

    // Retrieves the saved theme from the browser's localStorage.
    var theme = localStorage.getItem('website_theme');

    // Checks if a previously saved theme exists.
    if (theme != null) {

        // Removes any previously applied theme classes.
        document.body.classList.remove('default', 'dark_mode');

        // Adds the saved theme class to the HTML body.
        document.body.classList.add(theme);
    }

    // Checks if the HTML body currently has the dark_mode class.
    if (document.body.classList.contains('dark_mode')) {

        // Displays "Disable Dark Mode" when dark mode is enabled.
        theme_toggler.textContent = 'Disable Dark Mode';

    } else {

        // Displays "Enable Dark Mode" when light mode is enabled.
        theme_toggler.textContent = 'Enable Dark Mode';
    }
}

// Restores the saved theme when the JavaScript file loads.
retrieve_theme();

// Listens for theme changes made in another browser tab.
window.addEventListener('storage', function () {

    // Updates the current page using the newly saved theme.
    retrieve_theme();

}, false);
