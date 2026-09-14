document.addEventListener("DOMContentLoaded", function () {
    // Find any button that has 'Dark', 'Light', or 'theme' in its ID, class, or text
    const themeBtn = document.querySelector("#theme-toggle, .theme-toggle, button");

    if (themeBtn) {
        themeBtn.addEventListener("click", function () {
            // Toggle both common dark mode class names on the body
            document.body.classList.toggle("dark-mode");
            document.body.classList.toggle("dark");

            // Update button text dynamically
            if (document.body.classList.contains("dark-mode") || document.body.classList.contains("dark")) {
                themeBtn.textContent = "☀️ Light";
            } else {
                themeBtn.textContent = "🌙 Dark";
            }
        });
    }
});