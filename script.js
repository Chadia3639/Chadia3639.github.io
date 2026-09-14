function toggleTheme() {
    const isDark = document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("dark", isDark);

    const btn = document.querySelector("#theme-toggle, .theme-toggle, button");
    if (btn) {
        btn.textContent = isDark ? "☀️ Light" : "🌙 Dark";
    }
}

// Additional backup event handler
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector("#theme-toggle, .theme-toggle, button");
    if (btn) {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            toggleTheme();
        });
    }
});