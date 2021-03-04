const container = document.getElementById('container')
const colors = [
  '#06e052',
  '#e3a481',
  '#0eb621',
  '#fc458e',
  '#b2db15',
  '#aa226d',
  '#792ed8',
  '#73872a',
  '#520d3a',
  '#cefcb8',
  '#a5b3d9',
  '#7d1d85',
  '#c4fd57',
  '#f1ae16',
  '#8fe22a',
  '#ef6e3c',
  '#243eeb',
]

const SQUARES = 500

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement('div')

  square.classList.add('square')

  square.addEventListener('mouseover', () => setColor(square))
  square.addEventListener('mouseout', () => removeColor(square))

  container.appendChild(square)
}

function getColor() {
  return colors[Math.floor(Math.random() * colors.length)]
}

function setColor(element) {
  const color = getColor()
  element.style.background = color
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
  element.style.background = '#1d1d1d'
  element.style.boxShadow = '0 0 2px #000'
}
