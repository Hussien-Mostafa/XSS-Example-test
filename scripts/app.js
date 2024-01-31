const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const inputEl = document.getElementById('input')
const btnEl = document.getElementById('reset')
btnEl.addEventListener('click', (e) => {
    render(inputEl.value)
})
const render = (text) => {
    console.log(text)
    puzzleEl.innerHTML = text
}


