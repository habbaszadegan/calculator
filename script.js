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
    if (button.id === '#clear' || button.id === '#delete') {
        return;
    } else {
        button.addEventListener('click', () => {
            displayValue = display.textContent = button.textContent;
        })
    }
})

//-----------------------------------------------------------------------------------------------------

// UNUSED CODE SOLUTIONS

// nums.forEach(button => {
//     button.addEventListener('click', () => {
//         display.textContent = button.textContent;
//     })
// })

// operat3r.forEach(button => {

// })