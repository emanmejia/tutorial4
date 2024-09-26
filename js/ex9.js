const input = prompt("Enter a temperature in Celsius degrees:"); // input's type is string
const num = Number(input); // nb's type is number
console.log("The temperature in Celsius entered is " + num);
const convertedNum = (num * 9/5) + 32;
console.log("The temperature in Fahrenheit is " + convertedNum);