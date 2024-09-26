const input = prompt("Enter a price:"); // input's type is string
const num = Number(input); // nb's type is number
console.log("The price entered is $" + num);
const taxedNum = num * 1.206;
console.log("The taxation rate is 20.6%, total price is $" + taxedNum);