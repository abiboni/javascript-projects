// Declare and assign the variables below
let shuttleName = 'Determination';
let shuttleSpeedMph = 17500;
let kilometersToMars = 225000000
let kilometersToMoon =38400;
const milesPerKm = 0.621;
// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof shuttleName);
console.log(typeof shuttleSpeedMph);
console.log(typeof kilometersToMars);
console.log(typeof kilometersToMoon);
console.log(typeof milesPerKm);


// Calculate a space mission below
let milesToMars = kilometersToMars * milesPerKm
let hoursToMars = milesToMars / shuttleSpeedMph
let daysToMars = hoursToMars
// Print the results of the space mission calculations below
console.log(milesToMars);
console.log(hoursToMars);
console.log(daysToMars);
console.log(shuttleName + " will take " + daysToMars + " days to reach Mars.");
// Calculate a trip to the moon below
let milesToMoon = kilometersToMoon * milesPerKm
let hoursToMoon = milesToMoon / shuttleSpeedMph
let daysToMoon = hoursToMoon
// Print the results of the trip to the moon below
console.log(milesToMoon);
console.log(hoursToMoon);
console.log(daysToMoon);
console.log(shuttleName + " will take " + daysToMoon + " days to reach the Moon.")