// --------------------------MENGAMBIL ELEMENT HTML-----------------------

const numbers = document.querySelectorAll(".number")
const calculatorScreen = document.querySelector(".calculator-screen")
const operators = document.querySelectorAll (".operator")
const equalSign = document.querySelector(".equal-sign")
const clearBtn = document.querySelector(".all-clear")
const decimal = document.querySelector(".decimal")
const percentageBtn = document.querySelector(".percentage")
const deleteBtn = document.querySelector(".del")


// --------------------------DEFINISI VARIABEL-----------------------------

let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'


// --------------------------MENDETEKSI TOMBOL-----------------------------

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})

equalSign.addEventListener("click", () => {
    calculate()
    updateScreen(currentNumber)
})

clearBtn.addEventListener("click", () => {
    clearAll ()
    updateScreen(currentNumber)
})

decimal.addEventListener("click", (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

percentageBtn.addEventListener("click", () => {
    inputPercentage()
    updateScreen(currentNumber)
})

deleteBtn.addEventListener("click", () => {
    deleting()
    updateScreen(currentNumber)
})

// --------------------------UPDATE SCREEN-------------------------------

const updateScreen = (number) => {
    calculatorScreen.value = number
}


// ---------------------------INPUT TOMBOL---------------------------------

const inputNumber = (number) => {
    if(currentNumber === '0') {
        currentNumber = number
    }else {
        currentNumber += number
    }
}

const inputOperator = (operator) => {
    if(calculationOperator === '') {
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = '0'
}

const calculate = () => {
    let result = ''
    switch(calculationOperator) {
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case '-':
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break
        case 'x':
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break
        case '÷':
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break 
        default:
            return
    }
    currentNumber = result
    calculationOperator = ''   
}

const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}

const inputDecimal = (dot) => {
    if(currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}

const inputPercentage = () => {
    if(currentNumber === '0') {
        currentNumber = '0'
        return
    }
    currentNumber = currentNumber/100
}

const deleting = () => {
    if(currentNumber.length === 1) {
        currentNumber = '0'
    }else {
        currentNumber = currentNumber.substring(0, currentNumber.length-1)
    }
}
