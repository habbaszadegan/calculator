let number1;
let operator;
let number2;
let displayValue;

const display = document.querySelector('#display');
const clear = document.querySelector('#clear');
const del = document.querySelector('#delete');
const nums = document.querySelectorAll('.nums');
const operat3r = document.querySelectorAll('.operator');
const buttons = document.querySelectorAll('button');


function operate (chosenOperator, num1, num2) {
    switch (chosenOperator) {
        case '+':
            return num1 + num2;
            break;
        case '-':
            return num1 - num2;
            break;
        case '*':
            return num1 * num2;
            break;
        case '/':
            return num1 / num2;
            break;
        default:
            console.log(`Invalid operator: "${chosenOperator}". Please enter a valid operator (+, -, *, /).`);
            return NaN; // or return null or undefined depending on your desired behavior
    }
}

buttons.forEach(button => {
    if (!(button === clear || button === del)) {
        button.addEventListener('click', () => {
            displayValue = display.textContent = button.textContent;
        })
    }
})

// Make the calculator work! You’ll need to store the first number and second number that are input into the 
// calculator, utilize the operator that the user selects, and then operate() on the two numbers when the user 
// presses the “=” key.
// You should already have the code that can populate the display, so once operate() has been called, update the 
// display with the ‘solution’ to the operation.
// This is the hardest part of the project. You need to figure out how to store all the values and call the operate 
// function with them. Don’t feel bad if it takes you a while to figure out the logic.

//-----------------------------------------------------------------------------------------------------

// UNUSED CODE SOLUTIONS

// nums.forEach(button => {
//     button.addEventListener('click', () => {
//         display.textContent = button.textContent;
//     })
// })

// operat3r.forEach(button => {

// })