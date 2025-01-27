const panel = document.getElementById('panel')
const sendBtn = document.getElementById('send')
const ratings = document.querySelectorAll('.rating')
const ratingsContainer = document.querySelector('.ratings-container')

let selectedRating = 'Satisfied'

ratingsContainer.addEventListener('click', (e) => {
  if (e.target.parentNode.classList.contains('rating')) {
    removeActive()
    e.target.parentNode.classList.add('active')
    selectedRating = e.target.nextElementSibling.innerText
  }
})

sendBtn.addEventListener('click', (e) => {
  panel.innerHTML = `
    <i class='fas fa-heart'></i>
    <strong>Thank You!</strong>
    <br/>
    <strong>Selected Rating: ${selectedRating} </strong>
    <p>We'll use your feedback to improve our service </p>
    `
})

function removeActive() {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove('active')
  }
}
