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
const equals = document.querySelector('.equals');
const buttons = document.querySelectorAll('button');


function operate (chosenOperator, num1, num2) {
    let result;
    a = Number(num1);
    b = Number(num2);
    switch (chosenOperator) {
        case '+':
            result = (a + b).toFixed(2);
            display.textContent = result;
            break;
        case '-':
            display.textContent = a - b;
            break;
        case '*':
            display.textContent = a * b;
            break;
        case '/':
            display.textContent = a / b;
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

equals.addEventListener('click', () => {
    whichNum(currentNum, nextNum);
    clearedDisplayForOperator = false;
    if (currentNum && operator && nextNum) {
        operate(operator, currentNum, nextNum);
    }
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

//step 1: update display value so the numbers follow each other instead of overwriting each other
    //step 1a: write separate function for step 1
//step 2: acknowledge the operator input is the end of number input for num1 and we've moved on to num2
//step 3: repeat step 1 for num2
    // step 3a: if the operator is already set, run the operation and continue collecting numbers.
//step 4: take in our three stored variables and initiate operate when clicking '='.
//step 5: if there is an operator already stored in our variable, run the operate() function and replace
//currentNum with the result of the function


// Make the calculator work! You’ll need to store the first number and second number that are input into the 
// calculator, utilize the operator that the user selects, and then operate() on the two numbers when the user 
// presses the “=” key.
// You should already have the code that can populate the display, so once operate() has been called, update the 
// display with the ‘solution’ to the operation.
// This is the hardest part of the project. You need to figure out how to store all the values and call the operate 
// function with them. Don’t feel bad if it takes you a while to figure out the logic.
