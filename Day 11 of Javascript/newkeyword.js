//The nature of javascript programming language is prototype
//Which means it search in depth layer of every instances till he get null value
//The prototype is the object that is associated with every object in javascript
//Every object in javascript has a prototype property which makes inheritance possible in javascript
//In javascript mostly everything is an object and it finally ends in null

// function multiplybytwo(num){
//     return num*2;
// }
// multiplybytwo.power=2;
// console.log(multiplybytwo(10));
// console.log(multiplybytwo.power);
// console.log(multiplybytwo.prototype);

//Now understand the sue of new and his keyword in javascript

function gameinfo(gamename, price) {
  this.gamename = gamename;
  this.price = price;
}
//In the below block of code this keyword is helping the function to refer the current object that pass
gameinfo.prototype.getprice = function () {
  console.log(`The price of the game is:- ${this.price}`);
};
gameinfo.prototype.getgamename = function () {
  console.log(`The name of the game is:- ${this.gamename}`);
};

let game1 = new gameinfo("Valorant", 5000);
//in the function declaration if we didn't add new keyword in it the it will show error to us if we call the getprice and getgamename
//why because it is not added in the main one so if we add new keyword then will run even if the other prototype is added in it.
let game2 = new gameinfo("GTA", 10000);
console.log(game1);
game1.getprice();

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function.
This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly 
created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, 
to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value 
(object, array, function, etc.), the newly created object is returned.

*/
