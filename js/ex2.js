const unitsInput = prompt("Please enter the number of units completed:");

  // Parse the input to an integer
  const unitsCompleted = Number.parseInt(unitsInput, 10);

  // Validate units input
  if (isNaN(unitsCompleted) || unitsCompleted < 0 || !Number.isInteger(unitsCompleted)) {
      console.log(`Sorry, ${unitsInput} is not a valid entry for units completed.`);
      return;
  }

  // Determine grade standing
  let gradeStanding;
  if (unitsCompleted >= 0 && unitsCompleted <= 30) {
      gradeStanding = "Freshman";
  } else if (unitsCompleted <= 60) {
      gradeStanding = "Sophomore";
  } else if (unitsCompleted <= 90) {
      gradeStanding = "Junior";
  } else {
      gradeStanding = "Senior";
  }

  // Output the message
  console.log(`Your grade standing is ${gradeStanding}`);

// Call the function
getUserInfo();