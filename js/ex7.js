let hours = parseInt(prompt("Enter hours (0-23):"));
let minutes = parseInt(prompt("Enter minutes (0-59):"));
let seconds = parseInt(prompt("Enter seconds (0-59):"));

if (
    isNaN(hours) || hours < 0 || hours > 23 ||
    isNaN(minutes) || minutes < 0 || minutes > 59 ||
    isNaN(seconds) || seconds < 0 || seconds > 59
) {
    console.log("Invalid input! Please enter valid time values.");
} else {
    console.log(`Time input: ${hours}h${minutes}m${seconds}s`);

    seconds += 1;

    if (seconds === 60) {
        seconds = 0;
        minutes += 1;
    } if (minutes === 60) {
        minutes = 0;
        hours += 1;
    } if (hours === 24) {
        hours = 0;
    }

    console.log(`One second later: ${hours}h${minutes}m${seconds}s`);
}