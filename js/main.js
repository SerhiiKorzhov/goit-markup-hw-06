document.addEventListener('DOMContentLoaded', () => {
  const menuMobile = document.getElementById('menu-mobile');
  const openBtn = document.getElementById('open-menu-btn');
  const closeBtn = document.getElementById('close-menu-btn');

  if (menuMobile && openBtn && closeBtn) {
    openBtn.addEventListener('click', () => {
      menuMobile.classList.add('is-open'); // показываем меню
    });

    closeBtn.addEventListener('click', () => {
      menuMobile.classList.remove('is-open'); // скрываем меню
    });
  }
});