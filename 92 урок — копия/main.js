const modal = document.querySelector('.modal')

document.querySelector('.modal__btn--open').addEventListener('click', () => {
  modal.style.display = 'block'
})

document.querySelector('.modal__btn--close').addEventListener('click', () => {
  modal.style.display = 'none'
})




