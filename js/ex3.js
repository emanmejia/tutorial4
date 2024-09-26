const dayEntered = prompt('Enter a day of the week. For ex: mon, tue, wed, thu, fri, sat');

function getFollowingDay(day) {
  let followingDay;
  switch (day) {
      case 'sun':
          followingDay = 'mon';
          break;
      case 'mon':
          followingDay = 'tue';
          break;
      case 'tue':
          followingDay = 'wed';
          break;
      case 'wed':
          followingDay = 'thu';
          break;
      case 'thu':
          followingDay = 'fri';
          break;
      case 'fri':
          followingDay = 'sat';
          break;
      case 'sat':
          followingDay = 'sun';
          break;
      default:
          followingDay = null;
  }

  return followingDay;
}

const followingDay = getFollowingDay(dayEntered);

if (followingDay) {
      console.log(`You entered: ${dayEntered}`);
      console.log(`The following day is: ${followingDay}`);
  } else {
      console.log('Invalid input! Please enter a valid three-letter abbreviation.  For ex: mon, tue, wed, thu, fri, sat');
  }