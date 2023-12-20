let number1;
let operator;
let number2;

const display = document.querySelector('#display');
const clear = document.querySelector('#clear');
const del = document.querySelector('#delete');
const nums = document.querySelectorAll('.nums');
const operat3r = document.querySelectorAll('.operator');


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

nums.forEach(button => {
    button.addEventListener('click', () => {
        display.textContent = button.textContent;
    })
})

// create an event listener and assign it the corresponding number click to populate the display with.
// create on eevent listener, loop over all items, if the string matches the current iteration populate 
// that value into the display