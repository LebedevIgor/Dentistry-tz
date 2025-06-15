export const initBurger = () => {
  const burgerButton = document.querySelector('.adaptive__burger');
  const burgerMenu = document.querySelector('.burger-menu');
  const closeButton = document.querySelector('.burger-menu__close');

  burgerButton.addEventListener('click', () => {
    burgerMenu.classList.add('burger-menu--active');
    document.body.style.overflow = 'hidden';
  });

  closeButton.addEventListener('click', () => {
    burgerMenu.classList.remove('burger-menu--active');
    document.body.style.overflow = '';
  });

  burgerMenu.addEventListener('click', (e) => {
    if (e.target === burgerMenu) {
      burgerMenu.classList.remove('burger-menu--active');
      document.body.style.overflow = '';
    }
  });
};
