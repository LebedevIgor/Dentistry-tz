import './../scss/main.scss';
import { initGallerySlider } from './../scss/section/gallery/gallery.js';
import { initModal } from '../scss/components/modal/modal.js';
import { initScrollButton } from './utils/scroll.js';
import { initBurger } from '../scss/components/burgerMenu/burgerMenu.js';

document.addEventListener('DOMContentLoaded', () => {
  initGallerySlider();
  initModal();
  initScrollButton();
  initBurger();
});
