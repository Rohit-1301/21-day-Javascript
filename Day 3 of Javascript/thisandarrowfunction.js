//part1 about this keyword
let user={
    username:"Rohit",
    password:"12346789",
    userdetail:function(){
        console.log("username is: ",this.username);
        console.log("password is: ",this.password);
        console.log(this);
    }
}
// user.userdetail();
// user.username="Aditya";
// user.userdetail();
// console.log(this);

// now important takeaway from this keyword is that this keyword is used to access the object properties.
//and also you have to note that this keyword will show in global scope empty value but when u run it in the browser 
//it will show the object name window.

//part2 arrow function
// let a=function(){
//     console.log(this);
// }
// a();
//when u declare function using funnction keyword and print this keyword it will show the global scope.
// let b=()=>{
//     console.log(this);
// }
// b();
//when u declare function using arrow function and print this keyword it will show the empty object.
// let add=(a,b)=> a+b;
// console.log(add(10,20));
//if we create an arrow function and function have only one line then we can omit the curly braces.

// let c=(a,b)=> ({username:a,password:b});//in this way we print the object in the console for arrow functions.
// console.log(c("Rohit","12345678"));

//part3 Immediately invoked function expression
 (function(name){
    console.log("Hello",name);
})(`Rohit`);
//here we can pass the value in the function and also we can use the backtick for the string value. and it will run the function.
//without calling it and in the same way we can do for arrow functions too.
