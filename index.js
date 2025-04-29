// index.js
document.addEventListener('DOMContentLoaded', () => {
  // Dropdown Menù
  const menuBtn     = document.getElementById('menuBtn');
  const menuContent = document.getElementById('menuContent');
  menuBtn.addEventListener('click', e => {
    e.stopPropagation();
    menuContent.style.display =
      menuContent.style.display === 'block' ? 'none' : 'block';
  });
  document.addEventListener('click', e => {
    if (!menuContent.contains(e.target)) {
      menuContent.style.display = 'none';
    }
  });

  // Login Modal
  const loginMenuItem = document.getElementById('loginMenuItem');
  const loginModal    = document.getElementById('loginModal');
  loginMenuItem.addEventListener('click', e => {
    e.preventDefault();
    loginModal.style.display = 'flex';
  });
  window.addEventListener('click', e => {
    if (e.target === loginModal) {
      loginModal.style.display = 'none';
    }
  });

  // Submit Login con Enter e click
  const loginForm = document.getElementById('loginForm');
  loginForm.addEventListener('submit', async e => {
    e.preventDefault();
    // TODO: autenticazione Firebase qui
  });

  // Placeholder per navigazione calendario
  document.getElementById('prevMonth').addEventListener('click', () => {
    // TODO: mese precedente
  });
  document.getElementById('nextMonth').addEventListener('click', () => {
    // TODO: mese successivo
  });
});
