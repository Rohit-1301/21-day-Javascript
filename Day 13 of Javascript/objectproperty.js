// let pi = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(pi);
// Math.PI = 5;
// console.log(Math.PI); //it will return 3.14 cause it is unwritable.

//here we get to know that there are some  object in his property desriptor it is set that it can't be writeable or ennumerable
//such as Math.Pi

// Object.defineProperty(Math, 'PI', {
//     writable: true,
// });
// Math.PI = 5;
// console.log(Math.PI);
//even if we try to change some object property  which are inbuilt will give us error such as Math.PI

let x = {
  name: "sachin",
  age: 20,
  email: "sachin@gmail.com",
};

Object.defineProperty(x, "name", {
  writable: false,
  enumerable: false,
});
//in the above object descriptor we change key name property to unwritable and unenumerable so it will not get print or not get overwrite.

for (let [key, vlaue] of Object.entries(x)) {
  console.log(`${key}: ${vlaue}`);
}

x.name="Aditya"
console.log(x.name);