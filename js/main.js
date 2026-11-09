// 1. Dark/Light toggle: saves the visitor's choice in localStorage
const root = document.documentElement;
const toggle = document.querySelector('#themeToggle');
const label = document.querySelector('#themeLabel');

function showTheme(theme) {
  root.setAttribute('data-bs-theme', theme);
  label.textContent = theme === 'dark' ? 'Light' : 'Dark'; // shows the mode you can switch TO
}
showTheme(root.getAttribute('data-bs-theme') || 'light');

toggle.addEventListener('click', function () {
  const next = root.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
  showTheme(next);
  try { localStorage.setItem('theme', next); } catch (e) {}
});

// 2. Lightbox (work page only): copies the clicked project into the shared modal
const projectImage = document.querySelector('#modalProjectImage');
if (projectImage) {
  const projectTitle = document.querySelector('#projectLightboxLabel');
  const projectDescription = document.querySelector('#modalProjectDescription');
  document.querySelectorAll('.open-lightbox').forEach(function (button) {
    button.addEventListener('click', function () {
      projectImage.src = this.dataset.projectSrc;
      projectImage.alt = this.dataset.projectTitle + ' full image';
      projectTitle.textContent = this.dataset.projectTitle;
      projectDescription.textContent = this.dataset.projectDescription;
    });
  });
}
