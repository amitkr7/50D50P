const toggles = document.querySelectorAll('.toggle')

const good = document.getElementById('good')
const cheap = document.getElementById('cheap')
const fast = document.getElementById('fast')

toggles.forEach((toggle) =>
  toggle.addEventListener('change', (e) => manageBox(e.target))
)

function manageBox(clickedBox) {
  if (good.checked && cheap.checked && fast.checked) {
    if (good === clickedBox) {
      fast.checked = false
    }
    if (cheap === clickedBox) {
      good.checked = false
    }
    if (fast === clickedBox) {
      cheap.checked = false
    }
  }
}
