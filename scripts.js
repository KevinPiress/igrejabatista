// Theme toggle
const themeToggleBtn = document.getElementById('theme-toggle');
function setTheme(theme) {
  if(theme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggleBtn.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.remove('dark-mode');
    themeToggleBtn.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  }
}
function toggleTheme() {
  if(document.body.classList.contains('dark-mode')) {
    setTheme('light');
  } else {
    setTheme('dark');
  }
}
themeToggleBtn.addEventListener('click', toggleTheme);
// Load theme preference
const savedTheme = localStorage.getItem('theme');
if(savedTheme) {
  setTheme(savedTheme);
} else {
  // Default: respect system preference
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  setTheme(prefersDark ? 'dark' : 'light');
}

// Form validation and submission simulation
const form = document.getElementById('contact-form');
const msg = document.getElementById('form-message');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  msg.style.display = 'none';
  msg.style.color = 'crimson';
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  if(name.length < 2) {
    msg.textContent = 'Por favor, insira um nome válido com pelo menos 2 caracteres.';
    msg.style.display = 'block';
    form.name.focus();
    return;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!emailRegex.test(email)) {
    msg.textContent = 'Por favor, insira um e-mail válido.';
    msg.style.display = 'block';
    form.email.focus();
    return;
  }
  if(message.length < 5) {
    msg.textContent = 'Por favor, escreva uma mensagem com pelo menos 5 caracteres.';
    msg.style.display = 'block';
    form.message.focus();
    return;
  }
  // Simulate sending
  msg.style.color = 'green';
  msg.textContent = 'Mensagem enviada com sucesso! Entraremos em contato em breve.';
  msg.style.display = 'block';
  form.reset();
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href').substring(1);
    const targetElem = document.getElementById(targetId);
    if(targetElem) {
      e.preventDefault();
      targetElem.focus({preventScroll:true});
      window.scroll({
        top: targetElem.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});
