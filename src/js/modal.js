const btns = document.querySelector('.movie-collection');
const modalOverlay = document.querySelector('.modal__card-overlay');
const modalCard = document.querySelector('.modal__card-content');
const closeBtn = document.querySelector('.modal__close');



btns.addEventListener('click', showModal);
function showModal(e) {
  e.preventDefault();
  if (e.target !== btns) {
    modalOverlay.classList.add('modal__card-overlay--active');
    modalCard.classList.add('modal__card--active');
    closeModal();
  }
}

// let path = e.currentTarget.getAttribute('data-path');
// modalCard.classList.remove('modal__card--active');
// document.querySelector(`[data-target="${path}"]`).classList.add('modal__card--active');
// modalOverlay.classList.add('modal__card-overlay--active');

function closeModal(){
    closeBtn.addEventListener('click', closeByBtn);
    modalOverlay.addEventListener('click', closeByOverlay);
    window.addEventListener('keydown', closeByWindow);

}


function closeByOverlay(e) {
  if (e.target === modalOverlay) {
    modalOverlay.removeEventListener('click', closeByOverlay);
    modalOverlay.classList.remove('modal__card-overlay--active');
    modalCard.classList.remove('modal__card--active');
  }
}

function closeByBtn(e) {
  if (e.target === closeBtn) {
    closeBtn.removeEventListener('click', closeByBtn);
    modalOverlay.classList.remove('modal__card-overlay--active');
    modalCard.classList.remove('modal__card--active');
  }
}

function closeByWindow(e) {
  if (e.keyCode === 27) {
    window.removeEventListener('keydown', closeByWindow);
    modalOverlay.classList.remove('modal__card-overlay--active');
    modalCard.classList.remove('modal__card--active');
  }
}
