// Example of using Date object methods for web development

// Create a new Date object
let currentDate = new Date();

// Get the current date and time
let currentDateTime = currentDate.toString();

// Get the individual date components
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth() + 1; // Month is zero-based, so we add 1
let currentDay = currentDate.getDate();
let currentHours = currentDate.getHours();
let currentMinutes = currentDate.getMinutes();
let currentSeconds = currentDate.getSeconds();

console.log("Current Date and Time: ", currentDateTime);
console.log("Current Year: ", currentYear);
console.log("Current Month: ", currentMonth);
console.log("Current Day: ", currentDay);
console.log("Current Hours: ", currentHours);
console.log("Current Minutes: ", currentMinutes);
console.log("Current Seconds: ", currentSeconds);
// Example of using Date object methods for web development
let mydate=new Date();
console.log(mydate);
console.log(mydate.toLocaleDateString());
let myime=Date.now();
console.log(myime);
console.log(mydate.getTime())
console.log(Math.floor(myime/1000));