const previousOps = document.getElementById('previous-ops');
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

    return operations[operator](num1, num2);
}

function populateDisplay(value) {
    operation += value;
    currentOp.value = operation;
}

function spacedOperators(operation) {
    return operation.replace(/[\+\-\*÷]/g, (operator) => ` ${operator} `);
}

function populatePreviousOps(operation) {
    let validatedOp = document.createElement('p');
    validatedOp.textContent = `${spacedOperators(operation)} =`;
    previousOps.appendChild(validatedOp);
}

buttons.forEach((button) => button.addEventListener('click', () => {
    const buttonContent = button.textContent;

    if (buttonContent !== '=') populateDisplay(buttonContent);
    else {
        populatePreviousOps(operation);
        operation = '';
    }
}));
