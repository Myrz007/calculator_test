let firstNumber;
let operator;
let secondNumber;

function add (firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

function subtract (firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function multiply (firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

function divide (firstNumber, secondNumber) {
    return firstNumber / secondNumber;
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