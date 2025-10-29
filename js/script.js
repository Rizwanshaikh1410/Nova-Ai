// Theme toggle
(function(){
  const toggle = document.getElementById('themeToggle');
  const html = document.documentElement;
  function setTheme(t){
    if(t==='dark'){ html.setAttribute('data-theme','dark'); localStorage.setItem('nova-theme','dark'); }
    else { html.removeAttribute('data-theme'); localStorage.setItem('nova-theme','light'); }
  }
  const saved = localStorage.getItem('nova-theme') || 'light';
  setTheme(saved);
  if(toggle){
    toggle.addEventListener('click', function(){
      const current = document.documentElement.hasAttribute('data-theme') ? 'dark' : 'light';
      setTheme(current==='dark' ? 'light' : 'dark');
      toggle.innerText = current==='dark' ? '🌙' : '☀️';
    });
  }
})();

// Simple mobile nav toggle fix for Bootstrap collapse
document.addEventListener('DOMContentLoaded', function(){
  var navLinks = document.querySelectorAll('.nav-link');
  var bsCollapse = document.querySelector('.navbar-collapse');
  navLinks.forEach(function(link){
    link.addEventListener('click', function(){
      if(window.getComputedStyle(document.querySelector('.navbar-toggler')).display !== 'none'){
        // hide collapse
        var collapse = new bootstrap.Collapse(bsCollapse, {toggle:false});
        collapse.hide();
      }
    });
  });
});
