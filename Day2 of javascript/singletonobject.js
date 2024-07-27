// singleton objects

const user = new Object();
user.name = "Rohit";
user.age = 20;
user.email = "rohit.gmail.com";
user.city = "Mumbai";

console.log(user);

const user1 = {
  age: 20,
  email: "rohit.gmail.com",
  city: "Mumbai",
  country: "India",
  fullname: {
    userfullname: {
      firstname: "Rohit",
      lastname: "Gupta",
    },
  },
};

console.log(user1.fullname.userfullname.firstname);
let obj1 = { 1: "A", 2: "B", 3: "C" };
let obj2 = { 4: "A", 5: "B", 6: "C" };

// let obj3={obj1,obj2};//it will return object inside the  object in object  way

// let obj3=Object.assign({},obj1,obj2);//it is assign method
let obj3 = { ...obj1, ...obj2 }; //it is the spread method
console.log(obj3);
console.log(Object.keys(obj3)); //it will return the keys of the object
console.log(Object.values(obj3)); //it will return the values of the object
console.log(Object.entries(obj3)); //it will return the key and value of the object
console.log(obj3.hasOwnProperty("1")); //it will return true if the key is present in the object it will return true
console.log(Object.is(obj1, obj2)); //it will return true if the two object are same

let software={
    softwarename:"Text converter",
    program:"javascript",
    price:6000,

}
const {softwarename:s}=software;//It is destructuring of object to call any key or parameter in a shortcut way
console.log(s);