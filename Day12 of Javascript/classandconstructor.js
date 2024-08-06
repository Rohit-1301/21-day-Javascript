// class Gamedetail {
//   constructor(name, price, rating) {
//     this.name = name;
//     this.price = price;
//     this.rating = rating;
//   }
//   display() {
//     console.log("Name of the game is " + this.name);
//     console.log("Price of the game is " + this.price);
//     console.log("Rating of the game is " + this.rating);
//   }
// }

// let game = new Gamedetail("Gta 6", 7000, "5 Star");
// game.display();
//same thing we can made using function too
function gameinfo(name, price, rating) {
  this.name = name;
  this.price = price;
  this.rating = rating;
}
gameinfo.prototype.display = function () {
  console.log("Name of the game is " + this.name);
  console.log("Price of the game is " + this.price);
  console.log("Rating of the game is " + this.rating);
};

let game = new gameinfo("Call of Duty Warzone Mobile", 5000, "% Star");
game.display();
