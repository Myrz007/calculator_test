const currentOp = document.getElementById('current-op');
const buttons = document.querySelectorAll('button');

let operation = '';
let firstNumber = '';
let operator = '';
let secondNumber = '';

function add(num1,num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(operator, num1, num2) {
    const operations = {
        '+': add,
        '-': subtract,
        '*': multiply,
        '÷': divide,
    }

    return operations[operator](parseFloat(num1), parseFloat(num2));
}

function populateValue(value) {
    if (value === '+' || value === '-' || value === '*' || value === '÷') secondNumber = '';
    else secondNumber += value;
}

function populateDisplay(value) {
    if (value === '⌫') currentOp.value = '';
    else {
        operation += value;
        currentOp.value = operation;
    }
}

function handleNumbers(symbol) {
    if (firstNumber === '') {
        firstNumber = secondNumber;
    }
    else {
        firstNumber = operate(operator, firstNumber, secondNumber)
        secondNumber = '';
    }

    operator = symbol;
}

buttons.forEach((button) => button.addEventListener('click', () => {
    const buttonContent = button.textContent;
    
    if (buttonContent !== '=') {
        if (buttonContent === '⌫') {
            operation = '';
            firstNumber = '';
            operator = '';
            secondNumber = '';
        }

        populateDisplay(buttonContent);
    }
    else {
        operation = '';
    }
}));
