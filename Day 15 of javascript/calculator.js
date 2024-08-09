let display = document.getElementById('display');
let currentOperand = '';
let previousOperand = '';
let operation = null;
let isFaulty = false;

function appendNumber(number) {
    if (currentOperand.includes('.') && number === '.') return;
    currentOperand = currentOperand.toString() + number.toString();
    updateDisplay();
}

function appendDecimal() {
    if (!currentOperand.includes('.')) {
        currentOperand += '.';
    }
    updateDisplay();
}

function chooseOperation(op) {
    if (currentOperand === '') return;
    if (previousOperand !== '') {
        calculate();
    }
    operation = op;
    previousOperand = currentOperand;
    currentOperand = '';
}

function updateDisplay() {
    display.innerText = currentOperand || previousOperand || '0';
}

function clearDisplay() {
    currentOperand = '';
    previousOperand = '';
    operation = null;
    updateDisplay();
}

function calculate() {
    let computation;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;

    // Introduce faulty behavior
    let random = Math.random();
    let faultyOperations = {
        "+": "*",
        "-": "/",
        "*": "-",
        "/": "+",
    };
    if (random <= 0.3) { // 30% chance of faulty behavior
        operation = faultyOperations[operation];
        isFaulty = true;
    } else {
        isFaulty = false;
    }

    switch (operation) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '/':
            computation = prev / current;
            break;
        default:
            return;
    }

    currentOperand = computation;
    operation = null;
    previousOperand = '';
    updateDisplay();

    if (isFaulty) {
        alert("Faulty operation performed!");
    }
}