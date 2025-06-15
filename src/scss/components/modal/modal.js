export const initModal = () => {
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = `
    <div class="modal__content">
      <div class="modal__content-container">
        
        <h2 class="modal__title">Оставьте ваши контакты, мы перезвоним в течение 15 минут</h2>
        <form class="modal__form">
            <input type="tel" class="modal__input" placeholder="Ваш телефон" required>
            <button type="submit" class="modal__submit">Отправить</button>
        </form>
        <div class="modal__footer">Нажимая на кнопку, вы соглашаетесь с условиями обработки <span>персональных данных</span></div>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  const openModalBtns = document.querySelectorAll(
    '.relations__btn, .guarantees__message-btn'
  );
  const modalForm = modal.querySelector('.modal__form');

  openModalBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      modal.classList.add('modal--active');
    });
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('modal--active');
      document.body.style.overflow = '';
    }
  });

  modalForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    modal.classList.remove('modal--active');
    document.body.style.overflow = '';
    modalForm.reset();
  });
};
