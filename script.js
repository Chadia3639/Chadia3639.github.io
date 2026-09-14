function toggleTheme() {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("dark");

    const btn = document.querySelector("#theme-toggle, .theme-toggle, button");
    if (btn) {
        if (document.body.classList.contains("dark-mode") || document.body.classList.contains("dark")) {
            btn.textContent = "☀️ Light";
        } else {
            btn.textContent = "🌙 Dark";
        }
    }
}