let firstNumber;
let operator;
let secondNumber;

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

function operate(operator) {
    const operations = {
        '+': add(firstNumber, secondNumber),
        '-': subtract(firstNumber, secondNumber),
        '*': multiply(firstNumber, secondNumber),
        '/': divide(firstNumber, secondNumber),
    }

    return operations[operator];
}