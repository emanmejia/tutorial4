const inputName = prompt("Please enter your name? ");
const inputNumber = prompt("Please enter your units completed in college? ");
const number = Number(inputNumber);



console.log("Hello " + inputName)
if (inputNumber === "") {
    console.log('No input was entered, please enter a valid number.');
} else if ((number >= 0) && (number <= 30)) {
  console.log('Thank you!  You entered ' + number + ' units, Your grade standing is Freshman.');
} else if ((number >= 31) && (number <= 60)) {
  console.log('Thank you!  You entered ' + number + ' units, Your grade standing is Sophomore.');
} else if ((number >= 61) && (number <= 90)) {
  console.log('Thank you!  You entered ' + number + ' units, Your grade standing is Junior.');
} else if (number >= 91) {
  console.log('Thank you!  You entered ' + number + ' units, Your grade standing is Senior.');
} else {
  console.log('Your college unit number entry was invalid.')
}