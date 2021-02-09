const toggles = document.querySelectorAll('.faq-toggle')
const faqs = document.querySelectorAll('.faq')

function hideAll() {
  faqs.forEach((faq) => {
    faq.classList.remove('active')
  })
}

toggles.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    if (toggle.parentNode.classList.contains('active')) {
      hideAll()
    } else {
      hideAll()
      toggle.parentNode.classList.toggle('active')
    }
  })
})
