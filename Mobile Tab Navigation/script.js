const imgEl = document.querySelectorAll('img')
const liEl = document.querySelectorAll('li')

liEl.forEach((el, idx) => {
  el.addEventListener('click', () => {
    hideImage()
    removeActive()
    showContent(el, idx)
  })
})

function hideImage() {
  imgEl.forEach((img) => img.classList.remove('show'))
}

function removeActive() {
  liEl.forEach((el) => el.classList.remove('active'))
}

function showContent(el, idx) {
  el.classList.add('active')
  imgEl[idx].classList.add('show')
}
