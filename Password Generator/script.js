const resultEl = document.getElementById('result')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const clipboardEl = document.getElementById('clipboard')
const lengthEl = document.getElementById('length')
const generateEl = document.getElementById('generate')

const randomFunction = {
  upper: getRandomUpper,
  lower: getRandomLower,
  number: getRandomNumber,
  symbol: getRandomSymbol,
}

generateEl.addEventListener('click', () => {
  const length = +lengthEl.value
  const hasUpper = uppercaseEl.checked
  const hasLower = lowercaseEl.checked
  const hasNumber = numbersEl.checked
  const hasSymbol = symbolsEl.checked

  resultEl.innerText = generatePassword(
    hasUpper,
    hasLower,
    hasNumber,
    hasSymbol,
    length
  )
})

clipboardEl.addEventListener('click', () => {
  const textarea = document.createElement('textarea')
  const password = resultEl.innerText

  if (!password) return
  textarea.value = password
  document.body.appendChild(textarea)
  textarea.select()
  document.execCommand('copy')
  textarea.remove()
  alert('Password Copied to Clipboard')
})

function generatePassword(upper, lower, number, symbol, length) {
  let generatedPassword = ''
  const typesCount = upper + lower + number + symbol
  const typesArr = [{ upper }, { lower }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  )

  if (typesCount === 0) return ''

  //Equal char count implementation
  // for (let i = 0; i < length; i += typesCount) {
  //   typesArr.forEach((type) => {
  //     const funcName = Object.keys(type)[0]
  //     generatedPassword += randomFunction[funcName]()
  //   })
  // }

  //Unequal char count implementation
  typesArr.forEach((type) => {
    const funcName = Object.keys(type)[0]
    generatedPassword += randomFunction[funcName]()
  })

  for (let i = 0; i < length - typesArr.length; i++) {
    typ = typesArr[Math.floor(Math.random() * typesArr.length)]
    const func = Object.keys(typ)[0]
    generatedPassword += randomFunction[func]()
  }

  const finalPassword = shufflePassword(generatedPassword.slice(0, length))

  return finalPassword
}

function shufflePassword(password) {
  let newPassword = password.split(''),
    currentIndex = newPassword.length,
    tempIndex,
    randomIndex

  // While there remain elements to shuffle…
  while (currentIndex) {
    // Pick a remaining element…
    randomIndex = Math.floor(Math.random() * currentIndex--)

    // And swap it with the current element.
    tempIndex = newPassword[currentIndex]
    newPassword[currentIndex] = newPassword[randomIndex]
    newPassword[randomIndex] = tempIndex
  }

  return newPassword.join('')
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}<>?/'"
  return symbols[Math.floor(Math.random() * symbols.length)]
}
