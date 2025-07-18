document.addEventListener('DOMContentLoaded', () => {
  const openMenuBtn = document.querySelector('.menu-mobile-btn');
  const closeMenuBtn = document.querySelector('.modal-mobile-menu-close');
  const mobileMenu = document.querySelector('.modal-mobile-menu');

  if (!openMenuBtn || !closeMenuBtn || !mobileMenu) {
    console.warn('Один из элементов меню не найден!');
    return;
  }

  openMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('is-open');
  });

  closeMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
  });
});
