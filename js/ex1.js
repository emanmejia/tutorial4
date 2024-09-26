const input = prompt("Enter a number between 1 - 100? ");
const number = Number(input);

if (input === "") {
  console.log('No input was entered, please enter a valid number.');
} else if ((number >= 1) && (number <= 100)) {
  console.log('Thank you!  You entered ' + number + ', a valid number');
} else {
  console.log('Sorry! ' + number + ' is not a valid entry')
}