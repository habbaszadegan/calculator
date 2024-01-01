let currentNum = '';
let operator = '';
let nextNum = '';
let displayValue = '';
let clearedDisplayForOperator = false;

let display = document.querySelector('#display');
const clear = document.querySelector('#clear');
const del = document.querySelector('#delete');
const nums = document.querySelectorAll('.nums');
const operat3r = document.querySelectorAll('.operator');
const decimal = document.querySelector('.decimal');
const equals = document.querySelector('.equals');


function operate (chosenOperator, num1, num2) {
    a = Number(num1);
    b = Number(num2);
    switch (chosenOperator) {
        case '+':
            display.textContent = round(a + b);
            break;
        case '-':
            display.textContent = round(a - b);
            break;
        case '*':
            display.textContent = round(a * b);
            break;
        case '/':
            if (b == 0) {
                display.textContent = 'Try again :)';
            } else {
                display.textContent = round(a / b);
            }
            break;
        default:
            alert(`Invalid operator: "${chosenOperator}". Please enter a valid operator (+, -, *, /).`);
            return NaN; // or return null or undefined depending on your desired behavior
    }
}

nums.forEach(button => {
    button.addEventListener('click', () => {
        if (display.textContent === '0') {
            display.textContent = '';
        }
        if (operator) {
            if (!clearedDisplayForOperator) { // Clear display only if not done yet
                display.textContent = '';
                clearedDisplayForOperator = true; // Set flag to prevent further clearing
            }
        }
        display.textContent += button.textContent;
    })
})

operat3r.forEach(button => {
    button.addEventListener('click', () => {
        whichNum(currentNum, nextNum);
        clearedDisplayForOperator = false;
        if (operator) {
            operate(operator, currentNum, nextNum);
            currentNum = display.textContent;
        }
        operator = button.textContent;
    })
})

decimal.addEventListener('click', () => {
    if (display.textContent.indexOf('.') !== -1) {
        return;
    } else {
        display.textContent += decimal.textContent;
    }
})

equals.addEventListener('click', () => {
    whichNum(currentNum, nextNum);
    clearedDisplayForOperator = false;
    if (currentNum && operator && nextNum) {
        operate(operator, currentNum, nextNum);
    }
    currentNum = '';
    nextNum = '';
})

clear.addEventListener('click', () => {
    currentNum = '';
    operator = '';
    nextNum = '';
    displayValue = '';
    clearedDisplayForOperator = false;
    display.textContent = 0;
})

del.addEventListener('click', () => {
    display.textContent = display.textContent.slice(0, -1);
    if (display.textContent === '') {
        display.textContent = 0;
    }
})

function whichNum(current, next) {
    if (current) {
        nextNum = display.textContent;
    } else {
        currentNum = display.textContent;
    }
}

function round(value) {
    return Number(Math.round(value+'e3')+'e-3');
}