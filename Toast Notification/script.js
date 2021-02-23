const button = document.getElementById('button')
const toasts = document.querySelector('.toasts')

const messages = [
  'Hello there!',
  'How are you?',
  'Having fun?',
  'How is it going?',
]

const types = ['info', 'success', 'error']

button.addEventListener('click', () => createNotification())

function createNotification(message = null, type = null) {
  const notification = document.createElement('div')
  notification.classList.add('toast')
  notification.classList.add(type ? type : getRandomTypes())

  notification.innerText = message ? message : getRandomMessage()

  toasts.appendChild(notification)

  setTimeout(() => notification.remove(), 3000)
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)]
}

function getRandomTypes() {
  return types[Math.floor(Math.random() * types.length)]
}
