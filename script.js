// Dark Mode Toggle Logic
const toggleButton = document.getElementById('theme-toggle');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');

  if (document.body.classList.contains('dark-theme')) {
    toggleButton.textContent = '☀️ Light';
  } else {
    toggleButton.textContent = '🌙 Dark' ;
  }
});