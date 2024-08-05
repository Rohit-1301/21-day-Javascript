// let arr=[1,2,3,4,5]
// let obj={
//     name:"Raj",
//     age:20,
//     city:"Delhi"
// }
// //prototype is a property of an object which is used to add new properties and methods to an object.

// Object.prototype.names=function(){
//     console.log("This is a prototype function");
// }
// arr.names();
// obj.names();

// Array.prototype.types=function(){
//     console.log("This is a prototype function on arr object");
// }
// arr.types();
//If we create a prototype on a Object then it will apply to ec=very type of object whether it is function,array,class,etc.
//If we create a prototype on particular object with his name for as above I made a prototype on arr then it will be applicable
//only on that particular array.

let names = "Rohit  Gupta  ";
String.prototype.truelength = function () {
  return this.trim().length;
};
console.log("The true lenngth of the given string is:- ", names.truelength());
