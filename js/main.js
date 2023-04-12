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
    if (num2 === 0) return 'To divide by zero is impossible';

    return Math.round(num1 / num2 * 1000) / 1000;
}

function modulo(num1, num2) {
    if (num2 === 0) return 'To divide by zero is not defined';

    return num1 % num2;
}

function percentage(num) {
    return num / 100;
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
    operation += value;
    currentOp.value = operation;
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
            currentOp.value = '';
            operation = '';
            firstNumber = '';
            operator = '';
            secondNumber = '';
        }
        else if (button.className === 'operator') {
            handleNumbers(buttonContent);
            populateValue(buttonContent);
            populateDisplay(buttonContent);
        }
        else {
            populateValue(buttonContent);
            populateDisplay(buttonContent);
        }
    }
    else {
        secondNumber = `${operate(operator, firstNumber, secondNumber)}`;
        currentOp.value = secondNumber;
        operation = secondNumber;
        firstNumber = '';
        operator = '';
    }
}));
