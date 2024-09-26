const validPassword = "secret";
let attempts = 0;

while (attempts < 3) {
  const userInput = prompt("Please enter your password: ");

  if (userInput === validPassword) {
    console.log("Password Successful!");
    break;
  } else {
    attempts++;
    console.log('You have entered the incorrect password:  Please try again.');
  }
}

if (attempts === 3) {
  console.log("You are locked out.  Max attempts 3.")
}