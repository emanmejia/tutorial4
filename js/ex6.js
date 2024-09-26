const number = prompt("Enter a number:");

console.log("Multiplication Table for $" + number);

for (let i = 0; i <= 10; i++) {
    const result = number * i;
    console.log(`${number} x ${i} = ${result}`);
}