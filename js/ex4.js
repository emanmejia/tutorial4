let number1, number2;

while (true) {
    number1 = prompt("Enter the first integer number:");
    number2 = prompt("Enter the second integer number:");

    if (isFinite(number1) && isFinite(number2) && Number.isInteger(+number1) && Number.isInteger(+number2)) {
        number1 = +number1; // Convert to number
        number2 = +number2; // Convert to number
        break; 
    } else {
        console.log("Invalid input! Please enter valid integer numbers.");
    }
}

const sum = number1 + number2;
const difference = number1 - number2;
const product = number1 * number2;
const quotient = number2 !== 0 ? (number1 / number2).toFixed(2) : "undefined"; 
const modulo = number2 !== 0 ? number1 % number2 : "undefined"; 

console.log(`${number1} + ${number2} = ${sum}`);
console.log(`${number1} - ${number2} = ${difference}`);
console.log(`${number1} * ${number2} = ${product}`);
console.log(`${number1} / ${number2} = ${quotient}`);
console.log(`${number1} % ${number2} = ${modulo}`);
