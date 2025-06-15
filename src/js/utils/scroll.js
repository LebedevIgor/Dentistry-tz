export const scrollToBottom = () => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth',
  });
};

export const initScrollButton = () => {
  const priceButton = document.querySelector('.implantation__price-btn');
  if (priceButton) {
    priceButton.addEventListener('click', scrollToBottom);
  }
};
