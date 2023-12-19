let number1;
let operator;
let number2;


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