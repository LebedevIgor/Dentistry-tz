export const initGallerySlider = () => {
  const slider = document.querySelector('.gallery__slider');
  const slides = slider.querySelectorAll('.gallery__slider-slide');
  const texts = slider.querySelectorAll('.gallery__slider-text');
  const prevBtn = slider.querySelector('.gallery__slider-left');
  const nextBtn = slider.querySelector('.gallery__slider-right');
  let currentSlide = 0;
  const slideCount = slides.length;
  let autoSlideInterval;
  slides[0].classList.add('active');

  const showSlide = (index) => {
    slides.forEach((slide) => {
      slide.classList.remove('active');
    });

    texts.forEach((text) => {
      text.style.opacity = '0';
      text.style.visibility = 'hidden';
    });

    slides[index].classList.add('active');
    texts[index].style.opacity = '1';
    texts[index].style.visibility = 'visible';
  };

  const nextSlide = () => {
    currentSlide = (currentSlide + 1) % slideCount;
    showSlide(currentSlide);
  };

  const prevSlide = () => {
    currentSlide = (currentSlide - 1 + slideCount) % slideCount;
    showSlide(currentSlide);
  };

  const startAutoSlide = () => {
    if (autoSlideInterval) {
      clearInterval(autoSlideInterval);
    }
    autoSlideInterval = setInterval(nextSlide, 15000);
  };

  prevBtn.addEventListener('click', () => {
    prevSlide();
    startAutoSlide();
  });

  nextBtn.addEventListener('click', () => {
    nextSlide();
    startAutoSlide();
  });

  startAutoSlide();
};
