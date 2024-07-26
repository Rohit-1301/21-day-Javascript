// Example demonstrating the use of various Math functions

// Calculate the area of a circle
function calculateCircleArea(radius) {
    return Math.PI * Math.pow(radius, 2);
  }
  
  // Rounding up to the next largest integer
  let numCeil = Math.ceil(5.3);
  
  // Rounding down to the next smallest integer
  let numFloor = Math.floor(8.9);
  
  // Rounding to the nearest integer
  let numRound = Math.round(7.6);
  
  // Getting the integer part of a number
  let numTrunc = Math.trunc(9.2);
  
  console.log("Area of a circle with radius 1: ", calculateCircleArea(1));
  console.log("Ceil of 5.3: ", numCeil);
  console.log("Floor of 8.9: ", numFloor);
  console.log("Round of 7.6: ", numRound);
  console.log("Trunc of 9.2: ", numTrunc);
  