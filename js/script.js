// 🌙 NOVA AI - Theme + Navbar Logic
(function(){
  const currentPage = window.location.pathname.split('/').pop().toLowerCase();
  const isHomePage = (currentPage === 'index.html' || currentPage === '');

  const toggle = document.getElementById('themeToggle');
  const html = document.documentElement;

  // 🌌 Apply Theme
  function setTheme(theme){
    if(theme === 'dark'){
      html.setAttribute('data-theme', 'dark');
      localStorage.setItem('nova-theme', 'dark');
    } else {
      html.removeAttribute('data-theme');
      localStorage.setItem('nova-theme', 'light');
    }
  }

  // 🏠 Home Page Always Dark
  if (isHomePage) {
    setTheme('dark');  // Force dark mode
    if (toggle) {
      toggle.style.opacity = '0.5';
      toggle.style.pointerEvents = 'none';
      toggle.title = "Dark mode always on homepage";
    }
  } else {
    // 🌗 Load Saved Theme for Other Pages
    const savedTheme = localStorage.getItem('nova-theme') || 'light';
    setTheme(savedTheme);

    // 🌓 Theme Toggle Logic
    if (toggle) {
      toggle.addEventListener('click', function(){
        const isDark = html.hasAttribute('data-theme');
        setTheme(isDark ? 'light' : 'dark');
        toggle.innerText = isDark ? '☀️' : '🌙';
      });
    }
  }
})();

// 📱 Bootstrap Mobile Nav Collapse Fix
document.addEventListener('DOMContentLoaded', function(){
  const navLinks = document.querySelectorAll('.nav-link');
  const bsCollapse = document.querySelector('.navbar-collapse');
  const navToggler = document.querySelector('.navbar-toggler');

  if (navLinks.length && bsCollapse && navToggler) {
    navLinks.forEach(function(link){
      link.addEventListener('click', function(){
        if (window.getComputedStyle(navToggler).display !== 'none') {
          const collapse = new bootstrap.Collapse(bsCollapse, { toggle: false });
          collapse.hide();
        }
      });
    });
  }
});