//object literals
let mysym=Symbol("mykey");
let user={
    name:"Rohit",
    age:20,
    email:"rohit.gmail.com",
    city:"Mumbai",
    country:"India",
    [mysym]:"mykey"

};
// console.log(user.email);
// console.log(user["email"])//when we want to check the data of object in square bracket we have to give the key in the
//                          //form of the data type of value it holds else it shows error
// Object.freeze(user);//this function is used to freeze the object so that no one can change its value
// user.email="rohit.microsoft.com";
// console.log(user.email);
// console.log(user);//it will show the value of the symbol

user.greeting=function(){
    console.log("Hello World");
}
user.greet=function(){
console.log(`Hi my name is ${this.name}`);
}
console.log(user.greeting());
console.log(user.greet());