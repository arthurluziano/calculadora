const btnSwitch = document.querySelector('#switch')

btnSwitch.addEventListener('click', () => {
    let body = document.querySelector('body')
    let container = document.querySelector('.container')
    let resultDisplay = document.querySelector('.resultDisplay')
    let line = document.querySelectorAll('.line')
    let switchModeBtn = document.querySelector('.switch_mode')
    let buttons = document.querySelector('.buttons')

    body.classList.toggle('body-dark-mode')
    container.classList.toggle('container-dark-mode')
    resultDisplay.classList.toggle('resultDisplay-dark-mode')
    line.forEach((element) => {
        element.classList.toggle('line-dark-mode')
    })
    switchModeBtn.classList.toggle('switch_mode-dark-mode')
    buttons.classList.toggle('buttons-dark-mode')
})

const clearBtn = document.querySelector('#clear')

clearBtn.addEventListener('click', () => {
    surprise()

    signal = false
    decimal = false
    result.innerHTML = ''
})

const numbers = [...document.querySelectorAll('.numbers')]
const operators = [...document.querySelectorAll('.operators')]
const result = document.querySelector('#result')
const equal = document.querySelector('#equal')

let signal = false
let decimal = false

numbers.map((element) => {
    signal = false

    element.addEventListener('click', (event) => {
        surprise()

        if (resultStatus || result.innerHTML == 'Made by <br> Arthur Luziano :)') {
            result.innerHTML = ''
            resultStatus = false
        }

        if (event.target.innerHTML == ',') {
            if (!decimal) {
                if (result.innerHTML == '') {
                    result.innerHTML += `0${event.target.innerHTML}`
                    decimal = true
                }
            }
        } else {
            result.innerHTML += event.target.innerHTML
            signal = false
        }
    })
})

operators.map((element) => {
    element.addEventListener('click', (event) => {
        surprise()

        if (result.innerHTML == '') {
            if (event.target.innerHTML == '(') {
                result.innerHTML = '('
            } else if (event.target.innerHTML == 'Hi!') {
                let resultDisplay = document.querySelector('.resultDisplay')
                resultDisplay.style.justifyContent = 'center'
                result.innerHTML = 'Made by <br> Arthur Luziano :)'
            } else {
                alert('Formato usado inválido.')
            }
        } else {
            if (!signal) {
                signal = true

                if (event.target.innerHTML == 'x') {
                    result.innerHTML += '*'
                } else {
                    if (event.target.innerHTML == ')') {
                        result.innerHTML += event.target.innerHTML
                        signal = false
                    } else if (event.target.innerHTML == 'Hi!') {
                        alert('Formato usado inválido.')
                        signal = false
                    } else {
                        result.innerHTML += event.target.innerHTML
                    }
                }
            }
        }
    })
})

let resultStatus = false

equal.addEventListener('click', () => {
    signal = false
    decimal = false

    const resultOperation = eval(result.innerHTML)

    result.innerHTML = resultOperation
    resultStatus = true
})

function surprise() {
    let resultDisplay = document.querySelector('.resultDisplay')
    resultDisplay.style.justifyContent = 'end'
}